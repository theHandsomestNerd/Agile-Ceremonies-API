import * as logger from "firebase-functions/logger"
import PromptsLibraryRepository from "../repository/PromptsLibraryRepository";
import {PromptsLibraryType} from "../PromptsLibrary.types";

const handlePromptLibrary = async (req: any, res: any) => {
    const {method, body, query} = req;

    switch (method) {
        case 'POST':
            const {action} = body;

            if (!action) {
                return res.status(400).send({error: 'Missing action in request body'});
            }

            switch (action) {
                case 'initialize':
                    // Initialize the main prompt collection with data from AgentRoster
                    logger.log("Initializing prompts library collection");

                    return PromptsLibraryRepository.promptsLibraryInitialize()
                        .then((initializationResponse:any) => {
                            return res.status(200).send(initializationResponse);
                        }).catch((error:any) => {
                            logger.error("Error initializing prompts:", error);
                            return res.status(500).send({
                                success: false,
                                error: 'Failed to initialize agent profiles'
                            });
                        });
                case 'create':
                    if (!body.data) {
                        return res.status(400).send({error: 'Missing prompt data'});
                    }
                    if (!body.data.id) {
                        return res.status(400).send({error: 'Missing prompt id'});
                    }

                    return PromptsLibraryRepository.createPrompt(body.data as PromptsLibraryType)
                        .then((createPromptResp:any) => {
                            return res.status(201).send(createPromptResp);
                        })
                        .catch((error:any) => {
                            return res.status(500).send(error);
                        });

                default:
                    return res.status(400).send({error: 'Invalid action specified'});
            }

        case 'GET':
            const getPromptId = query.id;

            // If an ID is provided, get that specific agent
            if (getPromptId) {
                const getPromptResponse = await PromptsLibraryRepository.getPromptById(getPromptId);
                return res.status(200).send(getPromptResponse);
            }

            return PromptsLibraryRepository.promptsGetAll(query)
                .then((getAllPromptsResponse) => {
                    return res.status(200).send(getAllPromptsResponse);
                }).catch((error) => {
                    return res.status(400).send({error: 'Error fetching all prompts', details: error});
                })
        case 'PUT':
            const putPromptId = query.id || (body.data && body.data.id);

            if (!putPromptId) {
                return res.status(400).send({error: 'Prompt ID is required'});
            }

            if (!body.data) {
                return res.status(400).send({error: 'Missing prompt data'});
            }

            await PromptsLibraryRepository.updatePromptLibrary(putPromptId, body.data as PromptsLibraryType)
                .then((updatePromptResp:any) => {
                    return res.status(200).send(updatePromptResp);
                }).catch((e: any) => {
                    return res.status(500).send({
                        success: false,
                        error: 'Failed to update agent profile: ' + e.message
                    });
                });
            break;
        case 'DELETE':
            const agentId = query.id || (body.data && body.data.id);

            if (!agentId) {
                return res.status(400).send({error: 'Agent ID is required'});
            }

            return PromptsLibraryRepository.deletePrompt(agentId).then((deleteAgentResp:any) => {
                return res.status(200).send(deleteAgentResp);
            }).catch((e:any) => {
                return res.status(500).send({
                    success: false,
                    error: 'Failed to delete agent profile: '+ e.message
                });
            });
        default:
            return res.status(405).send({error: 'Method Not Allowed'});
    }
}

export default {handlePromptLibrary}