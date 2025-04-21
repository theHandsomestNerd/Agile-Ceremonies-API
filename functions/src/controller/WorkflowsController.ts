import WorkflowService from "../service/WorkflowService";
import {WorkflowType} from "../Workflow.types";
import * as logger from "firebase-functions/logger"

const handleWorkflowsRequest = async (req: any, res: any) => {
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
};

export default {handleWorkflowsRequest};