
// Backend Secure Trigger API - If you want to securely proxy n8n trigger calls (so users can’t hit n8n directly)
import {WorkflowLogType, WorkflowTriggerType, WorkflowType} from "../Workflow.types";
import WorkflowRepository from "../repository/WorkflowRepository";
import * as logger from "firebase-functions/logger";

async function getWorkflow(workflowId:string) {
        return WorkflowRepository.getWorkflowById(workflowId);
}

async function createWorkflow(data: WorkflowType) {

    return WorkflowRepository.createWorkflow(data);
}

export async function triggerWorkflow(workflowTriggerRequest:WorkflowTriggerType):Promise<{output: any}> {
    // Fetch the n8n ID and validate
    const workflow:WorkflowType = await WorkflowRepository.getWorkflowById(workflowTriggerRequest.workflowId);
    if (!workflow) throw 'Workflow not found';
    logger.log("Workflow found", workflow)

    // TODO: Add Auth to N8N agents When I test i have to enable the workflow for test in n8n so this can wait.
    const n8nRes = await fetch(`${workflow.workflowTriggerEndpoint}${workflow.n8nId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer YOUR_N8N_TOKEN' },
        body: JSON.stringify(workflowTriggerRequest)
    });

    const output = await n8nRes.json();
    logger.log("n8n response", output)

    // Save log to Firestore
    return saveWorkflowLog(workflowTriggerRequest.workflowId, {
        inputData: workflowTriggerRequest.inputData,
        outputData: output,
        status: n8nRes.ok ? 'success' : 'error',
        error: n8nRes.ok ? "" : output.error,
        timestamp: new Date().toISOString(),
        message: 'Workflow triggered.'
    }).then(()=>{
        return output;
    }).catch((e)=>{
        return new Error('Error saving workflow log: ' + e);
    });
}

async function updateWorkflow(id:string, data:WorkflowType) {
    return WorkflowRepository.updateWorkflow(id, data);
}

async function deleteWorkflow(id:string) {
    await WorkflowRepository.deleteWorkflow(id)
    return 'Workflow deleted';
}

async function saveWorkflowLog(workflowId:string, logData:WorkflowLogType) {
    return WorkflowRepository.saveWorkflowLog(workflowId,logData)
}

export default {createWorkflow, getWorkflow, triggerWorkflow, updateWorkflow, deleteWorkflow, saveWorkflowLog}