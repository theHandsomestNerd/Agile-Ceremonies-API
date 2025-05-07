// Backend Secure Trigger API - If you want to securely proxy n8n trigger calls (so users can’t hit n8n directly)
import {WorkflowLogType, WorkflowTriggerType, WorkflowType} from "../Workflow.types";
import WorkflowRepository from "../repository/WorkflowRepository";
import * as logger from "firebase-functions/logger";
import AgentQueueRepository from "../repository/AgentQueueRepository";
import AgentProfilesRepository from "../repository/AgentProfilesRepository";
import {AgentProfilesType} from "../AgentProfiles.types";
import {n8nWorkflowId} from "../config";
import WorkflowService from "./WorkflowService";
// import PromptsLibraryRepository from "../repository/PromptsLibraryRepository";

async function initialize() {
    return AgentQueueRepository.createAgentQueues()
}


async function createWorkflowTrigger(workflowId: string) {
    // Fetch the n8n ID and validate
    const workflow: WorkflowType = await WorkflowRepository.getWorkflowById(workflowId);
    if (!workflow) throw 'Workflow not found';
    logger.log("Workflow found", workflow)
    const agent: AgentProfilesType = await AgentProfilesRepository.agentProfilesGet(workflow.ownerAgentId).then((agentResponse) => {
        return agentResponse.agent as AgentProfilesType
    });
    if (!agent) throw 'The agent that owns this workflow was not found: ' + workflow.ownerAgentId;

    // get the agent prompt
    // const agentSystemPrompt = await PromptsLibraryRepository.getPromptById(`${agent.id}-system-prompt`).then((promptResponse) => {
    //     return promptResponse
    // });
    //
    // // setup the workflow trigger request
    //
    // let workflowTrigger: WorkflowTriggerType = {
    //     workflowId: workflowId,
    //     triggeredBy: 'compass',
    //     active: true,
    //     workflowStatus: {
    //         [workflow.steps[0].id] : {
    //             input: {
    //                 inputType: "text",
    //                 message: "Workflow triggered by Compass",
    //                 systemPrompt: agentSystemPrompt.prompt_text,
    //                 userPrompt: workflow.steps[0].expectedIO.input?.userPrompt || workflow.steps[0].id+" userPrompt missing"
    //             },
    //             output: {
    //                 outputType: "text",
    //                 status: "waiting",
    //                 message: "Workflow triggered by Compass",
    //             }
    //         }
    //     },
    //     n8nId: n8nWorkflowId.value(),
    // };
    //
    // workflowTrigger.active = true;


    return WorkflowRepository.getWorkflowById(workflowId);
}

export async function executeWorkflowTrigger(workflowTriggerRequest: WorkflowTriggerType): Promise<{ output: any }> {
    // Fetch the n8n ID and validate
    const workflow: WorkflowType = await WorkflowRepository.getWorkflowById(workflowTriggerRequest.workflowId);
    if (!workflow) throw 'Workflow not found';
    logger.log("Workflow found", workflow)
    const agent: AgentProfilesType = await AgentProfilesRepository.agentProfilesGet(workflow.ownerAgentId).then((agentResponse) => {
        return agentResponse.agent as AgentProfilesType
    });
    if (!agent) throw 'The agent that owns this workflow was not found: ' + workflow.ownerAgentId;

    // get the agent prompt
    // const agentSystemPrompt = await PromptsLibraryRepository.getPromptById(`${agent.id}-system-prompt`).then((promptResponse) => {
    //     return promptResponse
    // });

    // setup the workflow trigger request

    let workflowTrigger: WorkflowTriggerType = {...workflowTriggerRequest};

    workflowTrigger.active = true;

    const n8nWorkflowEndpoint = `${agent.workflowEndpoint}/#${n8nWorkflowId.value()}`
    logger.log("the url", n8nWorkflowEndpoint)
    logger.log("the trigger", workflowTriggerRequest)

    // TODO: Add Auth to N8N agents When I test i have to enable the workflow for test in n8n so this can wait.
    let workflowLog: WorkflowLogType = {
        workflowId: workflowTriggerRequest.workflowId,
        triggeredBy: workflowTriggerRequest.triggeredBy,
        workflowStatus: workflowTriggerRequest.workflowStatus,
        timestamp: new Date().toISOString(),
        message: "Workflow triggered: "+ workflowTriggerRequest.workflowId,
    }

    const n8nRes = await fetch(n8nWorkflowEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: 'Bearer YOUR_N8N_TOKEN'},
        body: JSON.stringify({workflow_trigger: workflowTriggerRequest})
    }).then((n8nResponse) => {
        return n8nResponse
    }).catch(e => {
        logger.error("Error triggering workflow: ", e)
        logger.error("Error inputs: ", JSON.stringify(workflowTriggerRequest))
        throw new Error('Error triggering workflow: ' + e.message)
    });


    const output = await n8nRes.json();
    logger.log("n8n response", output)

    // Update workflow trigger with output from call to n8n
    //set up next step in workflow.

    logger.log("workflow log", workflowLog)

    // Save log to Firestore
    return WorkflowService.saveWorkflowLog(workflowTriggerRequest.workflowId, workflowLog).then(() => {
        return {output: output};
    }).catch((e) => {
        return {output: output};
    });
}


export default {
    initialize,
    executeWorkflowTrigger,
    createWorkflowTrigger
}