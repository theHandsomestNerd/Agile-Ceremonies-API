import * as logger from "firebase-functions/logger"
import WorkflowTriggerService from "../service/WorkflowTriggerService";

const handleWorkflowTriggerRequest = async (req: any, res: any) => {
    const {method, body} = req;
    const {action} = body;

    switch (method) {
        case 'POST':
                if (!action) {
                    return res.status(400).send({error: 'Missing action in request body'});
                }

                switch(action){
                    case 'initialize':
                        // Initialize the agent_profiles collection with data from AgentRoster
                        logger.log("Initializing agent queues collection");

                        return WorkflowTriggerService.initialize()
                            .then((initializationResponse:any) => {
                                return res.status(200).send(initializationResponse);
                            }).catch((error:any) => {
                                logger.error("Error initializing agent queues:", error);
                                return res.status(500).send({
                                    success: false,
                                    error: 'Failed to initialize agent queues'
                                });
                            });
                    default:
                        return res.status(400).send({error: 'Invalid action specified'});
                }

        // case 'GET':
        //     const {action} = body;
        //
        //     if (!action) {
        //         return res.status(400).send({error: 'Missing action in request body'});
        //     }
        //
        //     switch (action) {
        //         case 'initialize':
        //             const getAgentId = query.id;
        //
        //             // If an ID is provided, get that specific agent
        //             if (getAgentId) {
        //                 const getAgentResponse = await PromptsLibraryRepository.promptGet(getAgentId);
        //                 return res.status(200).send(getAgentResponse);
        //             }
        //
        //             return AgentProfilesService.agentProfilesGet(query)
        //                 .then((getAllAgentsResponse) => {
        //                     return res.status(200).send(getAllAgentsResponse);
        //                 }).catch((error) => {
        //                     return res.status(400).send({error: 'Error fetching all agents', details: error});
        //                 })
        //         case 'initialize':
        //             const getAgentId = query.id;
        //
        //             // If an ID is provided, get that specific agent
        //             if (getAgentId) {
        //                 const getAgentResponse = await PromptsLibraryRepository.promptGet(getAgentId);
        //                 return res.status(200).send(getAgentResponse);
        //             }
        //
        //             return AgentProfilesService.agentProfilesGet(query)
        //                 .then((getAllAgentsResponse) => {
        //                     return res.status(200).send(getAllAgentsResponse);
        //                 }).catch((error) => {
        //                     return res.status(400).send({error: 'Error fetching all agents', details: error});
        //                 })
        // case 'PUT':
        //     const putAgentId = query.id || (body.data && body.data.id);
        //
        //     if (!putAgentId) {
        //         return res.status(400).send({error: 'Agent ID is required'});
        //     }
        //
        //     if (!body.data) {
        //         return res.status(400).send({error: 'Missing agent data'});
        //     }
        //
        //     await PromptsLibraryRepository.updatePrompt(putAgentId, body.data as PromptsLibraryType)
        //         .then((updatePromptResp:any) => {
        //             return res.status(200).send(updatePromptResp);
        //         }).catch((e: any) => {
        //             return res.status(500).send({
        //                 success: false,
        //                 error: 'Failed to update agent profile'
        //             });
        //         });
        //     break;
        // case 'DELETE':
        //     const agentId = query.id || (body.data && body.data.id);
        //
        //     if (!agentId) {
        //         return res.status(400).send({error: 'Agent ID is required'});
        //     }
        //
        //     return PromptsLibraryRepository.deletePrompt(agentId).then((deleteAgentResp:any) => {
        //         return res.status(200).send(deleteAgentResp);
        //     }).catch((e:any) => {
        //         return res.status(500).send({
        //             success: false,
        //             error: 'Failed to delete agent profile'
        //         });
        //     });
        default:
            return res.status(405).send({error: 'Method Not Allowed'});
    }
}

export default {handleWorkflowTriggerRequest}