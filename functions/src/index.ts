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
import WorkflowsController from "./controller/WorkflowsController";
import HelpDeskController from "./controller/HelpDeskController";
import AgentProfilesController from "./controller/AgentProfilesController";
import PromptsLibraryController from "./controller/PromptLibraryController";
import WorkflowTriggerController from "./controller/WorkflowTriggerController";
import './config'

const cors = require('cors')({
    origin: [
        "https://us-central1-youtube-and-other-connections.cloudfunctions.net",
        "http://localhost:5678"
        // "https://static.parastorage.com",
        // 'https://editor.wix.com',
        // 'https://www.wix.com'

    ],
    credentials: true,
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
});

// Initialize admin SDK only once
if (!admin.apps.length) {

    admin.initializeApp();
}


export const handleWorkflowsRequest = onRequest((request, response) => {
    return cors(request, response, async () => WorkflowsController.handleWorkflowsRequest(request, response));
});

export const handleWorkflowTriggerRequest = onRequest((request, response) => {
    return cors(request, response, async () => WorkflowTriggerController.handleWorkflowTriggerRequest(request, response))
})

export const handleHelpDeskRequest = onRequest((req, res) => {
    return cors(req, res, async () => HelpDeskController.handleHelpDeskRequest(req, res))
});

export const handleAgentProfilesRequest = onRequest((req, res) => {
    return cors(req, res, async () => AgentProfilesController.handleAgentProfiles(req, res))
});

export const handlePromptLibraryRequest = onRequest(async (request, response) => {
    return cors(request, response, async () => PromptsLibraryController.handlePromptLibrary(request, response))
});
