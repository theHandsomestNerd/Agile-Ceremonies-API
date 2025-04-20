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

// Initialize admin SDK only once
if (!admin.apps.length) {
    admin.initializeApp();
}

export const handleWorkflowRequest = onRequest(async (req:any, res:any) => {
    try {
        const {method, body, query} = req;
        let workflowId: string  = query.id as string

        if (!workflowId) return res.status(400).send({error: "Missing workflow ID."})

        switch (method) {
            case 'POST':
                const {action} = body;

                if (!action) {
                    return res.status(400).send({error: 'Missing action in request body'});
                }

                switch (action) {
                    case 'create':
                        return res.status(200).send(WorkflowService.createWorkflow(body.data));
                    case 'trigger':
                        return res.status(200).send(WorkflowService.triggerWorkflow(workflowId, body));
                    default:
                        return res.status(400).send({error: 'Invalid action specified'});
                }
            case 'GET':
                return res.status(200).send(WorkflowService.getWorkflow(workflowId));
            case 'PUT':
                return res.status(200).send(WorkflowService.updateWorkflow(workflowId, body))
            case 'DELETE':
                return res.status(200).send(WorkflowService.deleteWorkflow(workflowId));
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        console.error('MCP API error:', err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
});
