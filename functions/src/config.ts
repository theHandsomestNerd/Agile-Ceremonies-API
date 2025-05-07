// Define some parameters
import {defineString} from "firebase-functions/params";

export const helpDeskWorkflowId = defineString('HELP_DESK_WORKFLOW_ID');
export const n8nWorkflowId = defineString('HELP_DESK_WORKFLOW_N8N_ID');
// const agentInitializationEndpoint = defineString('AGENT_INITIALIZATION_API_ENDPOINT');
export const helDeskWebhookEndpoint = defineString('HELP_DESK_WORKFLOW_N8N_WEBHOOK_URL');
export const workflowsInitializationEndpoint = defineString('WORKFLOWS_INITIALIZATION_API_ENDPOINT');
// const workflowTriggerEndpoint = defineString('WORKFLOW_TRIGGER_INITIALIZATION_API_ENDPOINT');
// const mainPromptEndpoint = defineString('MAIN_PROMPT_INITIALIZATION_API_ENDPOINT');

// const welcomeMessage = defineString('WELCOME_MESSAGE');
