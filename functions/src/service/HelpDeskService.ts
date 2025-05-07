import {OpenAIRequest} from "../HelpDesk.types";
// import {WorkflowTriggerType} from "../Workflow.types";
import * as logger from "firebase-functions/logger";
import {promptsLibrary} from "../data/PromptsLibrary";
import {PromptsLibraryType} from "../PromptsLibrary.types";
// import WorkflowTriggerService from "./WorkflowTriggerService";
// import {helpDeskWorkflowId} from "../config";
// import WorkflowService from "./WorkflowService";

/**
 * Creates an OpenAI request formatted for the help desk workflow
 * @param message User's help desk message
 * @returns Configured OpenAI request
 */
async function createOpenAIHelpDeskRequest(message: string): Promise<OpenAIRequest> {
    // System prompt for the Compass agent
    const systemPrompt = promptsLibrary.find(prompt => prompt.id === 'main-system-prompt')?.prompt_text || "You are an AI Agent at The Handsomest Nerd, Inc.";

    logger.log("createOpenAIHelpDeskRequest: Creating OpenAI request for help desk message:", message);
    logger.log("createOpenAIHelpDeskRequest: Creating OpenAI request for help desk message:", message);
    // Create an OpenAI-compatible request
    return {
        model: 'gpt-4', // Default model, can be made configurable
        messages: [
            {
                role: 'system',
                content: systemPrompt
            },
            {
                role: 'user',
                content: message
            }
        ],
        temperature: 0.7,
        max_tokens: 2000
    };
}

/**
 * Creates an OpenAI request formatted for the help desk workflow
 * @param message User's help desk message
 * @returns Configured OpenAI request
 */
async function createHelpDeskRequest(message: string): Promise<{ systemPrompt: string, userPrompt: string}> {
    let systemPrompt:string = "You are Compass, the Multi-Agent Communications & Prompt Routing Specialist. Your job is to man the help desk and answer questions about the agents and their Connections and Abilities in a friendly way.";

    const mainSystemPrompt:PromptsLibraryType | undefined = promptsLibrary.find(prompt => prompt.id === 'main-system-prompt');
    const compassSystemPrompt:PromptsLibraryType | undefined = promptsLibrary.find(prompt => prompt.id === 'compass-system-prompt');
    if(compassSystemPrompt) {
        systemPrompt = mainSystemPrompt?.prompt_text + "\n" +compassSystemPrompt.prompt_text
    }
    // Create an LLM request
    return {
        systemPrompt: systemPrompt,
        userPrompt: message,
    };
}

/**
 * Processes a help desk request and triggers the appropriate workflow
 * @param helpDeskMessage The message from the user
 * @param helpDeskWorkflowId The n8n workflow ID for the help desk
 *
 * @returns The result from the workflow
 */
async function processHelpDeskRequest(helpDeskMessage: string) {
    try {
        // Create the OpenAI psuedo request
        // const openAIRequest = await createHelpDeskRequest(helpDeskMessage);
        // logger.log("processHelpDeskRequest: Creating OpenAI request for help desk message:", helpDeskMessage, helpDeskWorkflowId.value());
        // logger.log("openAIRequest", openAIRequest);
        // // Get the workflow ID from environment variables
        // logger.log("Triggering this workflow", helpDeskWorkflowId.value());
        //
        // if (!helpDeskWorkflowId) {
        //     return new Error('Help desk workflow ID not configured in environment variables');
        // }
        //
        // const workflowTrigger:WorkflowTriggerType = {
        //     active: true,
        //     triggeredBy: 'compass',
        //     n8nId: helpDeskWorkflowId.value(),
        //     workflowId: helpDeskWorkflowId.value(),
        //     createdAt: (new Date()).toISOString(),
        // }
        //
        // // Trigger the workflow with the OpenAI request as input data
        // logger.log('Triggering workflow with ID:', workflowTrigger);
        // return WorkflowService.executeWorkflowTrigger(workflowTrigger).then((executionResp)=>{
        //     console.log('wheres the response? ',executionResp);
        //     return executionResp
        //
        // }).catch((error) => {
        //     logger.error('Error triggering workflow:', error);
        //     throw new Error('Error triggering workflow: ' + error);
        // });
    } catch (error) {
        logger.error('Error processing help desk request:', error);
        throw error;
    }
}

export default {
    processHelpDeskRequest,
    createOpenAIHelpDeskRequest,
    createHelpDeskRequest
};