import WorkflowRepository from '../WorkflowRepository';
import * as admin from 'firebase-admin';
import {WorkflowLogType, WorkflowType} from "../../Workflow.types";

jest.mock('firebase-admin', () => {
    // Create a document mock that also supports collection method
    const docMock = {
        get: jest.fn() as jest.Mock,
        update: jest.fn() as jest.Mock,
        delete: jest.fn() as jest.Mock,
        set: jest.fn() as jest.Mock,
        collection: jest.fn(), // Add collection method to document mock
    };

    // Create a collection mock
    const collectionMock = {
        doc: jest.fn(() => docMock),
        add: jest.fn() as jest.Mock,
    };

    // Make the document's collection method return the collection mock
    docMock.collection.mockReturnValue(collectionMock);

    const firestoreMock = {
        collection: jest.fn(() => collectionMock),
    };
    
    return {
        firestore: jest.fn(() => firestoreMock),
        initializeApp: jest.fn(), // Mock initializeApp to prevent errors
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
            (mockFirestore.collection('workflows').doc().get as jest.Mock).mockResolvedValueOnce({
                exists: true,
                id: '123',
                data: () => mockData,
            });

            const result = await WorkflowRepository.getWorkflowById('123');
            expect(result).toEqual(mockData); // Removed redundant id property
        });

        it('should throw an error if the workflow does not exist', async () => {
            (mockFirestore.collection('workflows').doc().get as jest.Mock).mockResolvedValueOnce({
                exists: false,
            });

            expect(WorkflowRepository.getWorkflowById('nonexistent-id')).toThrow('Workflow not found');
        });
    });

    describe('createWorkflow', () => {
        it('should create a workflow and return its id', async () => {
            const mockData:WorkflowType = {
                id: 'temp-id', // Added missing "id" property
                name: 'New Workflow', 
                n8nId: 'n8n123', 
                description: '', 
                steps: [], 
                createdAt: Date.now().toString(),
                updatedAt: Date.now().toString(),
                status: 'active', 
                ownerId: 'user123'
            };
            (mockFirestore.collection('workflows').add as jest.Mock).mockResolvedValueOnce({ id: 'new-id' });

            const result = await WorkflowRepository.createWorkflow(mockData);
            expect(result).toEqual({ id: 'new-id', message: 'Workflow created' });
        });
    });

    describe('updateWorkflow', () => {
        it('should update a workflow and return a success message', async () => {
            const mockData = { name: 'Updated Workflow' };
            (mockFirestore.collection('workflows').doc().update as jest.Mock).mockResolvedValueOnce(undefined);

            const result = await WorkflowRepository.updateWorkflow('123', mockData);
            expect(result).toEqual('Workflow updated');
        });
    });

    describe('deleteWorkflow', () => {
        it('should delete a workflow and return a success message', async () => {
            (mockFirestore.collection('workflows').doc().delete as jest.Mock).mockResolvedValueOnce(undefined);

            const result = await WorkflowRepository.deleteWorkflow('123');
            expect(result).toEqual('Workflow deleted');
        });
    });

    describe('saveWorkflowLog', () => {
        it('should save a workflow log and return a success message', async () => {
            const mockLogData:WorkflowLogType = {
                message: 'Log entry', 
                timestamp: Date.now().toString(),
                triggeredBy: 'user123',
                status: 'success',
                inputData: { workflowId: '123', type: 'interval', interval: 5, lastTriggeredAt: Date.now().toString(), active: true },
                outputData: { output: "output" },
                error: null
            };
            // Updated: Use set directly on the document returned by the subcollection's doc method
            (mockFirestore.collection('workflows').doc().collection('workflow_logs').doc().set as jest.Mock).mockResolvedValueOnce(undefined);

            const result = await WorkflowRepository.saveWorkflowLog('123', mockLogData);
            expect(result).toEqual('Workflow log saved');
        });
    });
});

