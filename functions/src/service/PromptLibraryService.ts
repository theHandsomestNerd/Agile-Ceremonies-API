import {logger} from "firebase-functions";
import {PromptsFilterType, PromptsLibraryType} from "../PromptsLibrary.types";
import PromptsLibraryRepository from "../repository/PromptsLibraryRepository";

const queryPrompts = async (prompt?: PromptsLibraryType) => {
    let promptsQuery: PromptsFilterType | undefined = undefined
    if (prompt) {
        promptsQuery = {
            statusFilter: prompt.status,
            domainFilter: prompt.domains && prompt.domains[0],
            descriptionFilter: prompt.description,
            nameFilter: prompt.name,
            agentIdFilter: prompt.agentId,

        }
        logger.log("Prompts query composed", promptsQuery)
    }
    return PromptsLibraryRepository.promptsGetAll(promptsQuery)
}

export default {queryPrompts}