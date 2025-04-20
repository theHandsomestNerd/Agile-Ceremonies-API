import createAgentQueues from '../AgentQueueRepository';
import * as admin from 'firebase-admin';

jest.mock('firebase-admin', () => {
    const databaseMock = {
        ref: jest.fn(() => ({
            set: jest.fn(),
        })),
    };
    return {
        database: jest.fn(() => databaseMock),
        initializeApp: jest.fn(),
    };
});

const mockDatabase = admin.database();

describe('AgentQueueRepository', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createAgentQueues', () => {
        it('should create incoming queues for all agents and initialize compass outgoing queue', async () => {
            const agentIds = [
                "nat",
                "compass",
                "josh",
                "antosh",
                "lia",
                "brian",
                "man-man",
                "james",
                "terrell"
            ];

            const setMock = jest.fn();
            (mockDatabase.ref as jest.Mock).mockImplementation(() => ({
                set: setMock,
            }));

            await createAgentQueues();

            // Verify incoming queues for all agents
            for (const agentId of agentIds) {
                expect(mockDatabase.ref).toHaveBeenCalledWith(`/agentQueue/${agentId}/incoming`);
                expect(setMock).toHaveBeenCalledWith({
                    timestamp: expect.any(Number),
                    message: "Agent queue initialized",
                    status: "ready",
                });
            }

            // Verify compass outgoing queue
            expect(mockDatabase.ref).toHaveBeenCalledWith(`/compassQueue/outgoing/initial`);
            expect(setMock).toHaveBeenCalledWith({
                timestamp: expect.any(Number),
                message: "Compass queue initialized",
                status: "ready",
            });
        });
    });
});
