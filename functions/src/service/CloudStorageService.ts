// CloudStorageService.ts
import * as admin from 'firebase-admin';
import * as logger from 'firebase-functions/logger';
import * as crypto from 'crypto';
import * as path from 'path';

/**
 * Service for handling Firebase Cloud Storage operations
 */
export class CloudStorageService {
    private readonly storage: admin.storage.Storage;
    private readonly bucket: any; // TODO: Replace 'any' with proper type when @types/firebase-admin is updated
    private readonly projectFolder: string = 'man-man-audio-transcriber'; // Project-specific folder

    /**
     * Creates a new CloudStorageService instance
     * @param bucketName Optional custom bucket name, uses default if not provided
     */
    constructor(bucketName?: string) {
        // Ensure Firebase admin is initialized
        if (!admin.apps.length) {
            admin.initializeApp();
        }

        this.storage = admin.storage();
        this.bucket = bucketName
            ? this.storage.bucket(bucketName)
            : this.storage.bucket();

        logger.info('CloudStorageService initialized with bucket:', this.bucket.name);
        logger.info('Using project folder:', this.projectFolder);
    }

    /**
     * Uploads a buffer to Cloud Storage and returns the download URL
     *
     * @param fileBuffer The buffer containing file data
     * @param mimeType The MIME type of the file
     * @param subFolder Optional sub-folder path within the project folder
     * @param fileName Optional custom file name (a unique name will be generated if not provided)
     * @returns Promise resolving to the public download URL
     */
    async uploadBuffer(
        fileBuffer: Buffer,
        mimeType: string,
        subFolder: string = 'audio',
        fileName?: string
    ): Promise<string> {
        try {
            // Generate a unique file name if not provided
            if (!fileName) {
                const randomId = crypto.randomBytes(8).toString('hex');
                const extension = this.getFileExtensionFromMimeType(mimeType);
                fileName = `${Date.now()}-${randomId}${extension}`;
            }

            // Create the full path for the file, including the project folder
            const filePath = path.join(this.projectFolder, subFolder, fileName);
            logger.info(`Uploading file to path: ${filePath}`);

            // Create a file reference
            const file = this.bucket.file(filePath);

            // Upload the buffer
            await file.save(fileBuffer, {
                metadata: {
                    contentType: mimeType
                },
                resumable: fileBuffer.length > 5 * 1024 * 1024 // Use resumable uploads for files > 5MB
            });

            // Make the file publicly accessible
            await file.makePublic();

            // Get the public URL
            const publicUrl = `https://storage.googleapis.com/${this.bucket.name}/${filePath}`;
            logger.info(`File uploaded successfully. Public URL: ${publicUrl}`);

            return publicUrl;
        } catch (error) {
            logger.error('Error uploading file to Cloud Storage:', error);
            throw new Error(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    /**
     * Deletes a file from Cloud Storage
     *
     * @param filePath The path to the file within the project folder
     * @returns Promise resolving to true if deletion was successful
     */
    async deleteFile(filePath: string): Promise<boolean> {
        try {
            // Ensure the path is within the project folder
            const fullPath = path.join(this.projectFolder, filePath);
            const file = this.bucket.file(fullPath);
            await file.delete();
            logger.info(`File deleted successfully: ${fullPath}`);
            return true;
        } catch (error) {
            logger.error(`Error deleting file ${filePath}:`, error);
            return false;
        }
    }

    /**
     * Gets a temporary signed URL for a file (useful for time-limited access)
     *
     * @param filePath The path to the file within the project folder
     * @param expirationMinutes How long the URL should be valid (in minutes)
     * @returns Promise resolving to the signed URL
     */
    async getSignedUrl(filePath: string, expirationMinutes: number = 60): Promise<string> {
        try {
            // Ensure the path is within the project folder
            const fullPath = path.join(this.projectFolder, filePath);
            const file = this.bucket.file(fullPath);

            const [signedUrl] = await file.getSignedUrl({
                action: 'read',
                expires: Date.now() + expirationMinutes * 60 * 1000
            });

            logger.info(`Generated signed URL for ${fullPath}, valid for ${expirationMinutes} minutes`);
            return signedUrl;
        } catch (error) {
            logger.error(`Error generating signed URL for ${filePath}:`, error);
            throw new Error(`Failed to generate signed URL: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    /**
     * Lists all files in a folder within the project folder
     *
     * @param subFolder The subfolder path to list
     * @returns Promise resolving to an array of file names
     */
    async listFiles(subFolder: string = ''): Promise<string[]> {
        try {
            const folderPath = path.join(this.projectFolder, subFolder);
            const [files] = await this.bucket.getFiles({ prefix: folderPath });
            return files.map((file:any) => file.name.replace(`${this.projectFolder}/`, '')); // Remove the project folder prefix for cleaner results
        } catch (error) {
            logger.error(`Error listing files in ${subFolder}:`, error);
            throw new Error(`Failed to list files: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    /**
     * Helper method to get file extension from MIME type
     */
    private getFileExtensionFromMimeType(mimeType: string): string {
        const mimeToExt: Record<string, string> = {
            'audio/wav': '.wav',
            'audio/x-wav': '.wav',
            'audio/mp3': '.mp3',
            'audio/mpeg': '.mp3',
            'audio/ogg': '.ogg',
            'audio/webm': '.webm',
            'audio/aac': '.aac',
            'audio/flac': '.flac'
        };

        return mimeToExt[mimeType] || '';
    }

    /**
     * Organizes files by date for easier management
     *
     * @param fileBuffer The buffer containing file data
     * @param mimeType The MIME type of the file
     * @returns Promise resolving to the public download URL
     */
    async uploadBufferByDate(
        fileBuffer: Buffer,
        mimeType: string
    ): Promise<string> {
        // Create a date-based folder structure (YYYY/MM/DD)
        const now = new Date();
        const dateFolder = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}`;

        // Upload to the date-organized subfolder
        return this.uploadBuffer(fileBuffer, mimeType, `audio/${dateFolder}`);
    }
}

// Export a singleton instance for the default bucket
const cloudStorageService = new CloudStorageService();
export default cloudStorageService;