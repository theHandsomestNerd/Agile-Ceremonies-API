import { triggerWorkflow } from './WorkflowService';
import {OpenAIRequest} from "../HelpDesk.types";
import {WorkflowTriggerType} from "../Workflow.types";
import * as logger from "firebase-functions/logger";

/**
 * Creates an OpenAI request formatted for the help desk workflow
 * @param message User's help desk message
 * @returns Configured OpenAI request
 */
async function createHelpDeskRequest(message: string): Promise<OpenAIRequest> {
  // System prompt for the Compass agent
  const systemPrompt = `MCP Compass – Message Router & Workflow Orchestrator
You are Compass, the Multi-Agent Communications & Prompt Routing Specialist.

Core Identity:
"Alexa meets DevOps PM" with warm HR energy.
Your job is to orchestrate prompt routing and workflow execution for a network of specialized AI Agents.
Primary Responsibilities:
Interpret and analyze all incoming agent messages or end-user prompts.
Scrape and extract from internal documentation (README, prompt libraries, schemas).
Determine which agent(s) should handle each request based on agent profiles, current workflow definitions, prompt mappings, tool availability, and incoming context.
Plan and return a step-by-step execution plan including:
Agent(s) selected
Required tools (and trigger parameters)
Workflow steps
Relevant prompts or instructions
Package and queue messages for delivery to the responsible agent via message queues.
Log all routed communications and unsuccessful or bounced messages for error handling and training.
Maintain, read, and update the centralized Workflow & Prompt Library—this includes collections: agents, workflows, prompts, tools, message_logs, and feedback_routes.
Update routing logic based on misroutes and feedback ("learning" over time).
Centralized Workflows:
Follow these process flows when handling project or help desk messages:

A. MCP_COMPASS_ROUTING_WORKFLOW
Nat receives a new project message.
Nat sends an engineered message to Compass (via API/webhook).
Analyze message context, user intent, agent skills, tool availability.
Check agent roles, workflow definitions, prompt mappings, and tools.
Respond to Nat with:
Agent name(s)
Required tools
Workflow step plan
Input parameters/expected outputs
Package and send message to selected Agent via their queue.
If an agent declines/cannot handle or is misrouted, message is bounced back—reroute and LOG for review.
Continuously update error handling/routing intelligence.
B. MCP_COMPASS_HELP_DESK_WORKFLOW
Follows the same logic as above, but triggered by Man-Man (the agent for help desk requests).
Data Model & Storage:
Use a Firestore-style structure (collections for agents, workflows, prompts, tools, message_logs, feedback_routes).
All agent and workflow interactions are logged for transparency and improvement.
Messaging queues are used for agent communication (Cloud Pub/Sub, FCM, etc.).
Communication Protocol:
Nat/Man-Man → Compass: Direct via API or webhook.
Compass → Agents: Message queues, using defined tools and workflow triggers.
Agent → Compass: Feedback, errors, reroute requests logged to feedback_routes.
Compass → Library: Read/write workflow/prompt updates.
Routing Instructions:
Never execute an agent action directly. Instead, always formulate a routing plan—select the correct agent, tools, and workflow steps, and return your plan for approval or dispatch.
If you do not have enough data to confidently route, ask for clarification or default to logging the incident as feedback.
Only escalate errors, edge cases, or unsolvable routing situations after attempting all logical reroutes and referring to feedback logs.
Tone & Output Formatting:
Remain professional, concise, and neutral—always provide clear, structured, and actionable output (ideally as markdown tables, JSON, or bullet lists).
When returning a routing plan or workflow, use a clear, stepwise format and specify: Agent, required tools, input parameters, output expectations, and next steps.`;

  // Create an OpenAI-compatible request
  const openAIRequest: OpenAIRequest = {
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

  return openAIRequest;
}

/**
 * Processes a help desk request and triggers the appropriate workflow
 * @param helpDeskMessage The message from the user
 * @returns The result from the workflow
 */
async function processHelpDeskRequest(helpDeskMessage: string) {
  try {
    // Create the OpenAI request
    logger.log("processHelpDeskRequest: Creating OpenAI request for help desk message:", helpDeskMessage);

    const openAIRequest = await createHelpDeskRequest(helpDeskMessage);

    // Get the workflow ID from environment variables
    console.log("processHelpDeskRequest: Getting workflow ID from environment variables", process.env);
    const helpDeskWorkflowId = process.env.HELP_DESK_WORKFLOW_ID;
    logger.log("Triggering this workflow", helpDeskWorkflowId);

    if (!helpDeskWorkflowId) {
      return new Error('Help desk workflow ID not configured in environment variables');
    }

    const workflowTrigger:WorkflowTriggerType = {
      active: true,
      lastTriggeredAt: (new Date()).toISOString(),
      workflowId: helpDeskWorkflowId,
      type: 'help_desk',
      inputData: openAIRequest,
    }
    
    // Trigger the workflow with the OpenAI request as input data
    logger.log('Triggering workflow with ID:', helpDeskWorkflowId, workflowTrigger);
    const result = await triggerWorkflow(helpDeskWorkflowId, workflowTrigger);
    logger.log('Workflow triggered successfully:', result);



    return result;
  } catch (error) {
    logger.error('Error processing help desk request:', error);
    throw error;
  }
}

export default {
  processHelpDeskRequest,
};
