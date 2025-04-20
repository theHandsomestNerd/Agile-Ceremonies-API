import WorkflowService from '../WorkflowService';
import WorkflowRepository from '../../repository/WorkflowRepository';
import {WorkflowLogType, WorkflowTriggerType, WorkflowType} from "../../Workflow.types";

jest.mock('../../repository/WorkflowRepository');
jest.mock('firebase-admin', () => {
    const docMock = {
        get: jest.fn() as jest.Mock,
        update: jest.fn() as jest.Mock,
        delete: jest.fn() as jest.Mock,
        set: jest.fn() as jest.Mock,
    };
    const collectionMock = {
        doc: jest.fn(() => docMock),
        add: jest.fn() as jest.Mock,
    };
    const firestoreMock = {
        collection: jest.fn(() => collectionMock),
    };
    return {
        firestore: jest.fn(() => firestoreMock),
        initializeApp: jest.fn(), // Mock initializeApp to prevent errors
    };
});

describe('WorkflowService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getWorkflow', () => {
        it('should return a workflow by ID', async () => {
            const mockWorkflow: WorkflowType = { id: '123', name: 'Test Workflow', n8nId: 'n8n123', description: '', steps: [], createdAt: 'now', updatedAt: 'now', status: 'active', ownerId: 'user123' };
            (WorkflowRepository.getWorkflowById as jest.Mock).mockResolvedValueOnce(mockWorkflow);

            const result = await WorkflowService.getWorkflow('123');
            expect(result).toEqual(mockWorkflow);
            expect(WorkflowRepository.getWorkflowById).toHaveBeenCalledWith('123');
        });
    });

    describe('createWorkflow', () => {
        it('should create a workflow and return its ID', async () => {
            const mockWorkflow: WorkflowType = { id: 'temp-id', name: 'New Workflow', n8nId: 'n8n123', description: '', steps: [], createdAt: 'now', updatedAt: 'now', status: 'active', ownerId: 'user123' };
            const mockResponse = { id: 'new-id', message: 'Workflow created' };
            (WorkflowRepository.createWorkflow as jest.Mock).mockResolvedValueOnce(mockResponse);

            const result = await WorkflowService.createWorkflow(mockWorkflow);
            expect(result).toEqual(mockResponse);
            expect(WorkflowRepository.createWorkflow).toHaveBeenCalledWith(mockWorkflow);
        });
    });

    describe('triggerWorkflow', () => {
        it('should trigger a workflow and save a log', async () => {
            const mockWorkflow: WorkflowType = { id: '123', name: 'Test Workflow', n8nId: 'n8n123', description: '', steps: [], createdAt: 'now', updatedAt: 'now', status: 'active', ownerId: 'user123' };
            const mockInputData: WorkflowTriggerType = { workflowId: '123', type: 'interval', interval: 5, lastTriggeredAt: 'now', active: true };
            const mockOutput = { output: 'success' };

            // Mock fetch
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockOutput),
                })
            ) as jest.Mock;

            // Mock repository calls
            (WorkflowRepository.getWorkflowById as jest.Mock).mockResolvedValueOnce(mockWorkflow);
            (WorkflowRepository.saveWorkflowLog as jest.Mock).mockResolvedValueOnce('Workflow log saved');

            const result = await WorkflowService.triggerWorkflow(mockInputData);

            // Assertions
            expect(result).toEqual(mockOutput);
            expect(WorkflowRepository.getWorkflowById).toHaveBeenCalledWith('123');
            expect(global.fetch).toHaveBeenCalledWith(
                `${process.env.AGENT_COMPASS_WEBHOOK}${mockWorkflow.n8nId}`,
                expect.objectContaining({
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer YOUR_N8N_TOKEN' },
                    body: JSON.stringify(mockInputData),
                })
            );
            expect(WorkflowRepository.saveWorkflowLog).toHaveBeenCalledWith('123', expect.objectContaining({
                inputData: mockInputData,
                outputData: mockOutput,
                status: 'success',
            }));
        });
    });

    describe('updateWorkflow', () => {
        it('should update a workflow and return a success message', async () => {
            const mockData = { name: 'Updated Workflow' };
            (WorkflowRepository.updateWorkflow as jest.Mock).mockResolvedValueOnce('Workflow updated');

            const result = await WorkflowService.updateWorkflow('123', mockData as WorkflowType);
            expect(result).toEqual('Workflow updated');
            expect(WorkflowRepository.updateWorkflow).toHaveBeenCalledWith('123', mockData);
        });
    });

    describe('deleteWorkflow', () => {
        it('should delete a workflow and return a success message', async () => {
            (WorkflowRepository.deleteWorkflow as jest.Mock).mockResolvedValueOnce('Workflow deleted');

            const result = await WorkflowService.deleteWorkflow('123');
            expect(result).toEqual('Workflow deleted');
            expect(WorkflowRepository.deleteWorkflow).toHaveBeenCalledWith('123');
        });
    });

    describe('saveWorkflowLog', () => {
        it('should save a workflow log and return a success message', async () => {
            const mockLogData: WorkflowLogType = {
                message: 'Log entry',
                timestamp: 'now',
                triggeredBy: 'user123',
                status: 'success',
                inputData: { workflowId: '123', type: 'interval', interval: 5, lastTriggeredAt: 'now', active: true },
                outputData: { output: 'success' },
                error: null,
            };
            (WorkflowRepository.saveWorkflowLog as jest.Mock).mockResolvedValueOnce('Workflow log saved');

            const result = await WorkflowService.saveWorkflowLog('123', mockLogData);
            expect(result).toEqual('Workflow log saved');
            expect(WorkflowRepository.saveWorkflowLog).toHaveBeenCalledWith('123', mockLogData);
        });
    });
});
