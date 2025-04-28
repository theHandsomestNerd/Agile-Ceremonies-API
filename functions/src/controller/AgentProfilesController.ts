import * as logger from "firebase-functions/logger"
import AgentProfilesRepository from "../repository/AgentProfilesRepository";
import {AgentProfilesType} from "../AgentProfiles.types";
import AgentProfilesService from "../service/AgentProfilesService";

const handleAgentProfiles = async (req: any, res: any) => {
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

                    return AgentProfilesRepository.agentProfilesInitialize()
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

                    return AgentProfilesRepository.agentProfilesCreate(body.data as AgentProfilesType)
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

            // If an ID is provided, get that specific agent
            if (getAgentId) {
                const getAgentResponse = await AgentProfilesRepository.agentProfilesGet(getAgentId);
                return res.status(200).send(getAgentResponse);
            }

            return AgentProfilesService.agentProfilesGet(query)
                .then((getAllAgentsResponse) => {
                    return res.status(200).send(getAllAgentsResponse);
                }).catch((error) => {
                    return res.status(400).send({error: 'Error fetching all agents', details: error});
                })
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
}

export default {handleAgentProfiles}