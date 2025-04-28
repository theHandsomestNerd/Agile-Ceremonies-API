// Backend Secure Trigger API - If you want to securely proxy n8n trigger calls (so users can’t hit n8n directly)
import {WorkflowLogType, WorkflowTriggerType, WorkflowType} from "../Workflow.types";
import WorkflowRepository from "../repository/WorkflowRepository";
import * as logger from "firebase-functions/logger";
import AgentQueueRepository from "../repository/AgentQueueRepository";
import AgentProfilesRepository from "../repository/AgentProfilesRepository";
import {AgentProfilesType} from "../AgentProfiles.types";
import {helpDeskWorkflowN8NId} from "../config";

async function initialize() {
    return AgentQueueRepository.createAgentQueues()
}

async function getWorkflow(workflowId: string) {
    return WorkflowRepository.getWorkflowById(workflowId);
}

async function createWorkflow(data: WorkflowType) {

    return WorkflowRepository.createWorkflow(data);
}

export async function executeWorkflowTrigger(workflowTriggerRequest: WorkflowTriggerType): Promise<{ output: any }> {
    // Fetch the n8n ID and validate
    const workflow: WorkflowType = await WorkflowRepository.getWorkflowById(workflowTriggerRequest.workflowId);
    if (!workflow) throw 'Workflow not found';
    logger.log("Workflow found", workflow)
    const agent: AgentProfilesType = await AgentProfilesRepository.agentProfilesGet(workflow.ownerAgentId).then((agentResponse)=>{
        return agentResponse.agent as AgentProfilesType
    });
    if (!agent) throw 'The agent that owns this workflow was not found: '+ workflow.ownerAgentId;
    const n8nWorkflowEndpoint = `${agent.workflowEndpoint}#${helpDeskWorkflowN8NId.value()}`
    logger.log("the url", n8nWorkflowEndpoint)
    logger.log("the trigger", workflowTriggerRequest)

    // TODO: Add Auth to N8N agents When I test i have to enable the workflow for test in n8n so this can wait.
    const n8nRes = await fetch(n8nWorkflowEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: 'Bearer YOUR_N8N_TOKEN'},
        body: JSON.stringify(workflowTriggerRequest)
    }).catch(e=>{
        logger.error("Error triggering workflow: ", e)
        logger.error("Error inputs: ", JSON.stringify(workflowTriggerRequest))
        throw 'Error triggering workflow: ' + e
    });


    const output = await n8nRes.json();
    logger.log("n8n response", output)

    const workflowLog:WorkflowLogType = {
        io: {
            output: output,
        },
        status: 'success',
        timestamp: new Date().toISOString(),
        workflow: workflow,
        message: workflowTriggerRequest
    }
    logger.log("workflow log", workflowLog)

    // Save log to Firestore
    return saveWorkflowLog(workflowTriggerRequest.workflowId, workflowLog).then(() => {
        return {output: output};
    }).catch((e) => {
        return {output: output};
    });
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
    initialize,
    createWorkflow,
    getWorkflow,
    executeWorkflowTrigger,
    updateWorkflow,
    deleteWorkflow,
    saveWorkflowLog
}