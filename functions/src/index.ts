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

// Initialize admin SDK only once
if (!admin.apps.length) {
    admin.initializeApp();
}

export const handleWorkflowRequest = onRequest(async (req: any, res: any) => {
    try {
        const {method, body, query} = req;
        let workflowId: string = query.id as string

        switch (method) {
            case 'POST':
                const {action} = body;

                if (!action) {
                    return res.status(400).send({error: 'Missing action in request body'});
                }

                switch (action) {
                    case 'create':
                        logger.log("POST Request data", body.data)
                        return res.status(200).send(WorkflowService.createWorkflow(body.data as WorkflowType));
                    case 'trigger':
                        if (!workflowId) return res.status(400).send({error: "Missing workflow ID."})

                        return res.status(200).send(WorkflowService.triggerWorkflow(workflowId, body));
                    default:
                        return res.status(400).send({error: 'Invalid action specified'});
                }
            case 'GET':
                logger.log("GET Request", workflowId)
                if (!workflowId) return res.status(400).send({error: "Missing workflow ID."})

                const getWorkflowResponse = WorkflowService.getWorkflow(workflowId).catch((e: any) => {
                    return e.message
                })

                return res.status(200).send(getWorkflowResponse);
            case 'PUT':
                if (!workflowId) return res.status(400).send({error: "Missing workflow ID."})
                return res.status(200).send(WorkflowService.updateWorkflow(workflowId, body))
            case 'DELETE':
                if (!workflowId) return res.status(400).send({error: "Missing workflow ID."})
                return res.status(200).send(WorkflowService.deleteWorkflow(workflowId));
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        console.error('Workflow API error:', err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
});

export const handleHelpDeskRequest = onRequest(async (req: any, res: any) => {
    try {
        logger.log("Help Desk Request");
        console.log("", req.body)
        const {method, body} = req;

        switch (method) {
            case 'POST':
                console.log("POST Request", req.body)
                return res.status(200).send(HelpDeskService.processHelpDeskRequest(body.message));
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        logger.error("An error occurred",err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
});
