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
import WorkflowService from "./service/WorkflowService";
import HelpDeskService from "./service/HelpDeskService";
import * as logger from "firebase-functions/logger"
import {WorkflowType} from "./Workflow.types";
import {defineString} from "firebase-functions/params";
const functions = require('firebase-functions/v1');

// Define some parameters
const helpDeskWorkflow = defineString('HELP_DESK_WORKFLOW_ID');
// const welcomeMessage = defineString('WELCOME_MESSAGE');

// Initialize admin SDK only once
if (!admin.apps.length) {
    admin.initializeApp();
}


export const handleWorkflowRequest = onRequest(async (req: any, res: any) => {
    try {
        const {method, body, query} = req;

        const {action, data} = body;

        switch (method) {
            case 'POST':

                if (!action) {
                    return res.status(400).send({error: 'Missing action in request body'});
                }

                switch (action) {
                    case 'create':
                        return res.status(200).send(WorkflowService.createWorkflow(body.data as WorkflowType));
                    case 'trigger':
                        if (!data.id) return res.status(400).send({error: "Missing workflow ID."})
                        const triggerWorkflowResp = WorkflowService.triggerWorkflow(body.data).then((response) => {
                            return response
                        }).catch((e) => {
                            return e.message
                        })
                        return res.status(200).send(triggerWorkflowResp);
                    default:
                        return res.status(400).send({error: 'Invalid action specified'});
                }
            case 'GET':
                let workflowId: string = query.id as string
                logger.log("GET Request", workflowId)
                if (!workflowId) return res.status(400).send({error: "Missing workflow ID."})

                await WorkflowService.getWorkflow(workflowId)
                    .then((getWorkflowResponse) => {
                        return res.status(200).send(getWorkflowResponse);
                    }).catch((e: any) => {
                        return res.status(400).send(e);
                    })
                break;
            case 'PUT':
                if (!data.id) return res.status(400).send({error: "Missing workflow ID."})
                return res.status(200).send(WorkflowService.updateWorkflow(data.id, body))
            case 'DELETE':
                if (!data.id) return res.status(400).send({error: "Missing workflow ID."})
                return res.status(200).send(WorkflowService.deleteWorkflow(data.id));
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        console.error('Workflow API error:', err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
});

export const handleHelpDeskRequest = functions.runWith({workflowId: helpDeskWorkflow}).https.onRequest(async (req: any, res: any) => {
    try {
        logger.log("Help Desk Request");
        console.log("", req.body)
        const {method, body} = req;

        switch (method) {
            case 'POST':
                console.log("POST Request", req.body)
                return HelpDeskService.processHelpDeskRequest(body.message, helpDeskWorkflow.value() || "no help disk id?").then((helpDeskResp) => {
                    return res.status(200).send({helpDeskResp})
                }).catch((e) => {
                    return res.status(40).send({error: 'Error processing help desk request', details: e});
                });
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        logger.error("An error occurred", err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
});

