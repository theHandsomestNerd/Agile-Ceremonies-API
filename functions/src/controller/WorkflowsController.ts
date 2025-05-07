import WorkflowService from "../service/WorkflowService";
import {WorkflowTriggerType, WorkflowType} from "../Workflow.types";
import * as logger from "firebase-functions/logger"
import WorkflowTriggerService from "../service/WorkflowTriggerService";
import {n8nWorkflowId} from "../config";

const handleWorkflowsRequest = async (req: any, res: any) => {
    try {
        const {method, body, query} = req;
        logger.log("Workflows Request",method, body, query);

        const {action, data} = body;
        logger.log("action data", action, data);

        let parsedData:any = data;

        if(typeof parsedData === 'string') {
            parsedData = JSON.parse(data);
        }

        switch (method) {
            case 'POST':
                if (!action) {
                    return res.status(400).send({error: 'Missing action in request body'});
                }

                switch (action) {
                    case 'create':
                        return WorkflowService.createWorkflow(parsedData as WorkflowType)
                            .then((createWorkflowResp)=>{
                                return res.status(200).send(createWorkflowResp);
                            })
                            .catch((e)=>{
                                return res.status(400).send({error: e});
                            })
                    case 'initialize':
                        // Initialize the main prompt collection with data from AgentRoster
                        logger.log("Initializing workflows collection");

                        return WorkflowService.initializeWorkflows()
                            .then((initializationResponse:any) => {
                                return res.status(200).send(initializationResponse);
                            }).catch((error:any) => {
                                logger.error("Error initializing workflows:", error);
                                return res.status(500).send({
                                    success: false,
                                    error: 'Failed to initialize agent workflows'
                                });
                            });
                    case 'trigger':
                        if (!parsedData.workflowId) return res.status(400).send({error: "Missing workflow ID."})

                        const workFlowTrigger:WorkflowTriggerType = {
                            workflowId: parsedData.workflowId,
                            ownerAgentId: 'compass',
                            triggeredBy: 'compass',
                            active: true,
                            n8nId: n8nWorkflowId.value(),
                            createdAt: (new Date()).toISOString(),
                        }

                        const triggerWorkflowResp = WorkflowTriggerService.executeWorkflowTrigger(workFlowTrigger).then((response) => {
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
                if (!parsedData.id) return res.status(400).send({error: "Missing workflow ID."})
                return res.status(200).send(WorkflowService.updateWorkflow(parsedData.id, body))
            case 'DELETE':
                if (!parsedData.id) return res.status(400).send({error: "Missing workflow ID."})
                return res.status(200).send(WorkflowService.deleteWorkflow(parsedData.id));
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        console.error('Workflow API error:', err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
};

export default {handleWorkflowsRequest};