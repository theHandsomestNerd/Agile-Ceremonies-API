/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as admin from 'firebase-admin';
import {defineString} from "firebase-functions/params";
import WorkflowsController from "./controller/WorkflowsController";
import HelpDeskController from "./controller/HelpDeskController";
import AgentProfilesController from "./controller/AgentProfilesController";

const functions = require('firebase-functions/v1');

// Define some parameters
const helpDeskWorkflow = defineString('HELP_DESK_WORKFLOW_ID');
// const welcomeMessage = defineString('WELCOME_MESSAGE');

// Initialize admin SDK only once
if (!admin.apps.length) {
    admin.initializeApp();
}

export const handleWorkflowsRequest = onRequest(WorkflowsController.handleWorkflowsRequest)

export const handleHelpDeskRequest = functions.runWith({workflowId: helpDeskWorkflow}).https.onRequest((req: Request, res: Response) => HelpDeskController.handleHelpDeskRequest(req, res, helpDeskWorkflow.value()));

export const handleAgentProfilesRequest = onRequest(AgentProfilesController.handleAgentProfiles);
