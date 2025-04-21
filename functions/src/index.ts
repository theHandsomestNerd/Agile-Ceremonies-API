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
import {AgentProfilesType} from "./AgentProfiles.types";
import agentProfilesRepository from "./repository/AgentProfilesRepository";
import AgentProfilesRepository from "./repository/AgentProfilesRepository";
import AgentProfilesService from "./service/AgentProfilesService";

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

export const handleAgentProfilesRequest = onRequest(async (req: any, res: any) => {
    const {method, body, query} = req;

    switch (method) {
        case 'POST':
            const {action} = body;

            if (!action) {
                return res.status(400).send({error: 'Missing action in request body'});
            }

            switch (action) {
                case 'initialize':
                    // Initialize the agent_profiles collection with data from AgentRoster
                    logger.log("Initializing agent profiles collection");

                    return agentProfilesRepository.agentProfilesInitialize()
                        .then((initializationResponse) => {
                            return res.status(200).send(initializationResponse);
                        }).catch((error) => {
                            logger.error("Error initializing agent profiles:", error);
                            return res.status(500).send({
                                success: false,
                                error: 'Failed to initialize agent profiles'
                            });
                        });
                case 'create':
                    if (!body.data) {
                        return res.status(400).send({error: 'Missing agent data'});
                    }
                    if (!body.data.id) {
                        return res.status(400).send({error: 'Missing agent id'});
                    }

                    return agentProfilesRepository.agentProfilesCreate(body.data as AgentProfilesType)
                        .then((createAgentResp) => {
                            return res.status(201).send(createAgentResp);
                        })
                        .catch((error) => {
                            return res.status(500).send(error);
                        });

                default:
                    return res.status(400).send({error: 'Invalid action specified'});
            }

        case 'GET':
            const getAgentId = query.id;

            try {

                // If an ID is provided, get that specific agent
                if (getAgentId) {
                    const getAgentResponse = await agentProfilesRepository.agentProfilesGet(getAgentId);
                    return res.status(200).send(getAgentResponse);
                }

                await AgentProfilesService.agentProfilesGet(query as AgentProfilesType)
                    .then((getAllAgentsResponse) => {
                        return res.status(200).send(getAllAgentsResponse);
                    }).catch((error) => {
                        return res.status(400).send({error: 'Error fetching all agents', details: error});
                    })


            } catch (error) {
                logger.error("Error fetching agent profile:", error);
                return res.status(500).send({
                    success: false,
                    error: 'Failed to fetch agent profiles'
                });
            }
            break;
        case 'PUT':
            const putAgentId = query.id || (body.data && body.data.id);

            if (!putAgentId) {
                return res.status(400).send({error: 'Agent ID is required'});
            }

            if (!body.data) {
                return res.status(400).send({error: 'Missing agent data'});
            }

            await AgentProfilesRepository.updateAgentProfile(putAgentId, body.data as AgentProfilesType)
                .then((updateAgentResp) => {
                    return res.status(200).send(updateAgentResp);
                }).catch((e: any) => {
                    return res.status(500).send({
                        success: false,
                        error: 'Failed to update agent profile'
                    });
                });
            break;
        case 'DELETE':
            const agentId = query.id || (body.data && body.data.id);

            if (!agentId) {
                return res.status(400).send({error: 'Agent ID is required'});
            }

            return AgentProfilesRepository.deleteAgentProfile(agentId).then((deleteAgentResp) => {
                return res.status(200).send(deleteAgentResp);
            }).catch((e) => {
                return res.status(500).send({
                    success: false,
                    error: 'Failed to delete agent profile'
                });
            });
        default:
            return res.status(405).send({error: 'Method Not Allowed'});
        }
});
