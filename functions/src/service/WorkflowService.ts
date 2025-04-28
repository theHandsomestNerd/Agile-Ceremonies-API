// Backend Secure Trigger API - If you want to securely proxy n8n trigger calls (so users can’t hit n8n directly)
import {WorkflowLogType, WorkflowType} from "../Workflow.types";
import WorkflowRepository from "../repository/WorkflowRepository";

async function initializeWorkflows() {
    return WorkflowRepository.agentWorkflowsInitialize();
}

async function getWorkflow(workflowId: string) {
    return WorkflowRepository.getWorkflowById(workflowId);
}

async function createWorkflow(data: WorkflowType) {

    return WorkflowRepository.createWorkflow(data);
}

async function updateWorkflow(id: string, data: WorkflowType) {
    return WorkflowRepository.updateWorkflow(id, data);
}

async function deleteWorkflow(id: string) {
    await WorkflowRepository.deleteWorkflow(id)
    return 'Workflow deleted';
}

async function saveWorkflowLog(workflowId: string, logData: WorkflowLogType) {
    return WorkflowRepository.saveWorkflowLog(workflowId, logData)
}

export default {
    initializeWorkflows,
    createWorkflow,
    getWorkflow,
    updateWorkflow,
    deleteWorkflow,
    saveWorkflowLog
}