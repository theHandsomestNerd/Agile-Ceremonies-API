import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger"
import {promptsLibrary} from "../data/PromptsLibrary";
import {PromptsFilterType, PromptsLibraryType} from "../PromptsLibrary.types";

const firestore = admin.firestore();
const PromptsLibraryCollection = firestore.collection('prompts');

/**
 * * Initialize prompt library in Firestore from prompts Library object
 *  * @returns A promise that resolves with status of updating
 *  */
const promptsLibraryInitialize = async () => {
    // Use a batch write for atomicity
    const batch = firestore.batch();

    // First clear any existing agents if reinitializing
    const existingPrompts = await PromptsLibraryCollection.get();
    logger.log("Existing prompts found:", existingPrompts.size);
    existingPrompts.forEach(doc => {
        batch.delete(doc.ref);
    });
    logger.log("Existing prompts purged");
    // Add all agents from the roster
    for (const prompt of promptsLibrary) {
        const docRef = PromptsLibraryCollection.doc(prompt.id);
        logger.log("Initializing AI Agent Prompts: ", prompt);
        batch.set(docRef, {
            ...prompt,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    await batch.commit();
    return {
        success: true,
        message: `Initialized ${promptsLibrary.length} prompts`
    };
}

/**
 * Get a prompt by its ID
 * @param id Prompt ID
 * @returns Promise with the prompt data
 */
const getPromptById = async (id: string): Promise<PromptsLibraryType> => {
    const docRef = PromptsLibraryCollection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
        logger.log("Prompt not found: ", id)
        throw 'Prompt not found';
    } else {
        logger.log("Get Prompt found by id " + id, doc.data())
    }

    return {
        ...(doc.data()),
        id: doc.id,
    } as PromptsLibraryType;
}
/**
 * Create a new prompt
 * @param data Prompt data
 * @returns Promise with the created prompt ID and confirmation message
 */
const createPrompt = async (data: PromptsLibraryType): Promise<{ id: string; message: string }> => {
    await PromptsLibraryCollection.doc(data.id).set({
        ...data,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
        ownerAgentId: data.authorId,
        status: 'active'
    });

    return {
        id: data.id,
        message: 'Prompt created',
    };
}

/**
 * Update an existing prompt
 * @param id Prompt ID
 * @param data Updated prompt data
 * @returns Promise with confirmation message
 */
const updatePromptLibrary = async (id: string, data: Partial<PromptsLibraryType>): Promise<string> => {
    const docRef = PromptsLibraryCollection.doc(id);
    await docRef.update({
        ...data,
        updatedAt: Date.now().toString(),
    });

    return 'Prompt updated';
}


/**
 * Delete a prompt
 * @param id Prompt ID
 * @returns Promise with confirmation message
 */
const deletePrompt = async (id: string): Promise<string> => {
    const docRef = PromptsLibraryCollection.doc(id);
    await docRef.delete();

    return 'Prompt deleted';
}


/**
 * Get all agent profiles with optional filters
 * @param filters The filters to apply
 * @returns A promise that resolves to the filtered agent profiles
 */
const promptsGetAll = async (filters?: PromptsFilterType) => {
    let agentsQuery: admin.firestore.Query<admin.firestore.DocumentData> = PromptsLibraryCollection;

    // Filter by status if provided
    if (filters?.statusFilter) {
        agentsQuery = agentsQuery.where('status', '==', filters.statusFilter);
    }

    // Filter by domain if provided
    if (filters?.domainFilter) {
        agentsQuery = agentsQuery.where('domains', 'array-contains', filters.domainFilter);
    }

    // Filter by role if provided
    if (filters?.roleFilter) {
        agentsQuery = agentsQuery.where('role', 'in', filters.roleFilter);
    }

    // Filter by capability if provided
    if (filters?.capabilityFilter) {
        agentsQuery = agentsQuery.where('capabilities', 'array-contains', filters.capabilityFilter);
    }

    // Filter by description if provided
    if (filters?.descriptionFilter) {
        agentsQuery = agentsQuery.where('description', '>=', filters.descriptionFilter);
    }

    const agentSnapshot = await agentsQuery.get();

    if (agentSnapshot.empty) {
        throw new Error('No agent profiles found');
    }

    const agents = agentSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    logger.log("Agents found: ", agents)

    return {
        success: true,
        agents
    };
}

export default {
    promptsLibraryInitialize,
    getPromptById,
    createPrompt,
    updatePromptLibrary,
    deletePrompt,
    promptsGetAll
};