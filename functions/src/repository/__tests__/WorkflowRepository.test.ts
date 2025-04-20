import WorkflowRepository from '../WorkflowRepository';
import * as admin from 'firebase-admin';

jest.mock('firebase-admin', () => {
    const docMock = {
        get: jest.fn().mockResolvedValue({ exists: true, id: '123', data: jest.fn() }),
        update: jest.fn().mockResolvedValue(undefined),
        delete: jest.fn().mockResolvedValue(undefined),
        set: jest.fn().mockResolvedValue(undefined),
    };
    const collectionMock = {
        doc: jest.fn(() => docMock),
        add: jest.fn().mockResolvedValue({ id: '123' }),
    };
    const firestoreMock = {
        collection: jest.fn(() => collectionMock),
    };
    return {
        firestore: jest.fn(() => firestoreMock),
        initializeApp: jest.fn(),
    };
});

const mockFirestore = admin.firestore();

describe('WorkflowRepository', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getWorkflowById', () => {
        it('should return a workflow if it exists', async () => {
            const mockData = { id: '123', name: 'Test Workflow', n8nId: 'n8n123', description: '', steps: [], createdAt: Date.now(), updatedAt: Date.now(), status: 'active', lastRun: null, created_at: Date.now(), ownerId: 'user123' };
            mockFirestore.collection().doc().get.mockResolvedValueOnce({ exists: true, id: '123', data: () => mockData });

            const result = await WorkflowRepository.getWorkflowById('123');
            expect(result).toEqual(mockData);
            expect(mockFirestore.collection).toHaveBeenCalledWith('workflows');
            expect(mockFirestore.collection().doc).toHaveBeenCalledWith('123');
            expect(mockFirestore.collection().doc().get).toHaveBeenCalled();
        });

        it('should throw an error if the workflow does not exist', async () => {
            mockFirestore.collection().doc().get.mockResolvedValueOnce({ exists: false });

            await expect(WorkflowRepository.getWorkflowById('123')).rejects.toEqual('Workflow not found');
        });
    });

    describe('createWorkflow', () => {
        it('should create a new workflow and return its ID', async () => {
            const mockData = { name: 'New Workflow', n8nId: 'n8n123', description: '', steps: [], createdAt: Date.now(), updatedAt: Date.now(), status: 'active', lastRun: null, created_at: Date.now(), ownerId: 'user123' };

            const result = await WorkflowRepository.createWorkflow(mockData);
            expect(result).toEqual({ id: '123', message: 'Workflow created' });
            expect(mockFirestore.collection).toHaveBeenCalledWith('workflows');
            expect(mockFirestore.collection().add).toHaveBeenCalledWith(mockData);
        });
    });

    describe('updateWorkflow', () => {
        it('should update an existing workflow', async () => {
            const mockData = { name: 'Updated Workflow' };

            const result = await WorkflowRepository.updateWorkflow('123', mockData);
            expect(result).toBe('Workflow updated');
            expect(mockFirestore.collection).toHaveBeenCalledWith('workflows');
            expect(mockFirestore.collection().doc).toHaveBeenCalledWith('123');
            expect(mockFirestore.collection().doc().update).toHaveBeenCalledWith(mockData);
        });
    });

    describe('deleteWorkflow', () => {
        it('should delete a workflow', async () => {
            const result = await WorkflowRepository.deleteWorkflow('123');
            expect(result).toBe('Workflow deleted');
            expect(mockFirestore.collection).toHaveBeenCalledWith('workflows');
            expect(mockFirestore.collection().doc).toHaveBeenCalledWith('123');
            expect(mockFirestore.collection().doc().delete).toHaveBeenCalled();
        });
    });

    describe('saveWorkflowLog', () => {
        it('should save a workflow log', async () => {
            const mockLogData = { message: 'Log entry', timestamp: Date.now(), triggeredBy: 'user123', status: 'success', inputData: {}, outputData: {}, error: null };

            const result = await WorkflowRepository.saveWorkflowLog('123', mockLogData);
            expect(result).toBe('Workflow log saved');
            expect(mockFirestore.collection).toHaveBeenCalledWith('workflows');
            expect(mockFirestore.collection().doc).toHaveBeenCalledWith('123');
            expect(mockFirestore.collection().doc().collection).toHaveBeenCalledWith('workflow_logs');
            expect(mockFirestore.collection().doc().collection().doc).toHaveBeenCalled();
            expect(mockFirestore.collection().doc().collection().doc().set).toHaveBeenCalledWith(mockLogData);
        });
    });
});
