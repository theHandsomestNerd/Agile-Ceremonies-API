import * as admin from 'firebase-admin';
import {WorkflowLogType, WorkflowType} from '../Workflow.types';
import * as logger from 'firebase-functions/logger';
import {AgentWorkflows} from "../data/Workflows";
// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
    admin.initializeApp();
}

// Get Firestore instance
const firestore = admin.firestore();
const workflowsCollection = firestore.collection('workflows');

/**
 * Repository for managing Workflow data in Firestore
 */
const WorkflowRepository = {
    /**
     * Get a workflow by its ID
     * @param id Workflow ID
     * @returns Promise with the workflow data
     */
    async getWorkflowById(id: string): Promise<WorkflowType> {
        const docRef = workflowsCollection.doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            logger.log("Workflow not found: ", id)
            throw 'Workflow not found';
        } else {
            logger.log("Get Workflow found by id "+ id, doc.data())
        }

        return {
            ...(doc.data()),
            id: doc.id,
        } as WorkflowType;
    },

    /**
     * Create a new workflow
     * @param data Workflow data
     * @returns Promise with the created workflow ID and confirmation message
     */
    async createWorkflow(data: WorkflowType): Promise<{ id: string; message: string }> {
        await workflowsCollection.doc(data.id).set({
            ...data,
            createdAt: (new Date()).toISOString(),
            updatedAt:  (new Date()).toISOString(),
            ownerAgentId: data.ownerAgentId,
            status: 'active'
        });

        return {
            id: data.id,
            message: 'Workflow created',
        };
    },

    /**
     * Update an existing workflow
     * @param id Workflow ID
     * @param data Updated workflow data
     * @returns Promise with confirmation message
     */
    async updateWorkflow(id: string, data: Partial<WorkflowType>): Promise<string> {
        const docRef = workflowsCollection.doc(id);
        await docRef.update({
            ...data,
            updatedAt: Date.now().toString(),
        });

        return 'Workflow updated';
    },

    /**
     * Delete a workflow
     * @param id Workflow ID
     * @returns Promise with confirmation message
     */
    async deleteWorkflow(id: string): Promise<string> {
        const docRef = workflowsCollection.doc(id);
        await docRef.delete();

        return 'Workflow deleted';
    },

    /**
 * Save a workflow execution log
 * @param workflowId Workflow ID
 * @param logData Log data
 * @returns Promise with confirmation message
 */
async saveWorkflowLog(workflowId: string, logData: WorkflowLogType): Promise<string> {
    logger.log("Saving workflow log for workflow ID: ", workflowId, logData);

    if (!workflowId) {
        throw new Error('Invalid workflowId: workflowId is required');
    }

    try {
        const workflowRef = workflowsCollection.doc(workflowId);
        const logsCollection = workflowRef.collection('workflow_logs');

        await logsCollection.doc().set({
            ...logData,
            timestamp: logData.timestamp || new Date(), // Use native Date object
        });
    } catch (e:any) {
        logger.error("Error saving workflow log: ", e);
        throw new Error('Error saving workflow log: ' + e.message);
    }

    return 'Workflow log saved';
},

    /**
     * * Initialize agent profiles in Firestore from agent roster object
     *  * @returns A promise that resolves with status of updating
     *  */
    async agentWorkflowsInitialize(){
        // Use a batch write for atomicity
        const batch = firestore.batch();

        // First clear any existing agents if reinitializing
        const existingWorkflows = await workflowsCollection.get();
        logger.log("Existing workflows found:", existingWorkflows.size);
        existingWorkflows.forEach(doc => {
            batch.delete(doc.ref);
        });
        logger.log("Existing workflows purged");
        // Add all agents from the roster
        for (const workflow of AgentWorkflows) {
            const docRef = workflowsCollection.doc(workflow.id);
            logger.log("Initializing AI Agent Workflow: ", workflow);
            batch.set(docRef, {
                ...workflow,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }

        await batch.commit();
        return {
            success: true,
            message: `Initialized ${AgentWorkflows.length} agent workflows`
        };
    }
};



export default WorkflowRepository;
