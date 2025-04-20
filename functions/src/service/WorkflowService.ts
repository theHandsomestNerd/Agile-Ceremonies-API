
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

export async function triggerWorkflow(workflowId:string, inputData:WorkflowTriggerType) {
    // Fetch the n8n ID and validate
    const workflow = await WorkflowRepository.getWorkflowById(workflowId);
    if (!workflow) throw 'Workflow not found';
    logger.log("Workflow found", workflow)

    const n8nRes = await fetch(`${process.env.AGENT_COMPASS_WEBHOOK}${workflow.n8nId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer YOUR_N8N_TOKEN' },
        body: JSON.stringify(inputData)
    });

    const output = await n8nRes.json();

    // Save log to Firestore
    await saveWorkflowLog(workflowId, {
        inputData,
        triggeredBy: process.env.WHO_AI || "No Agent Id",
        outputData: output,
        status: n8nRes.ok ? 'success' : 'error',
        error: n8nRes.ok ? null : output.error,
        timestamp: new Date().toISOString(),
        message: 'Workflow triggered'
    });

    return output;
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