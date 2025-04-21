import AgentProfilesRepository from "../repository/AgentProfilesRepository";
import {AgentProfilesFilterType, AgentProfilesType} from "../AgentProfiles.types";
import {logger} from "firebase-functions";

const agentProfilesGet = async (agentProfile?: AgentProfilesType) => {
    let agentProfileQuery: AgentProfilesFilterType | undefined = undefined
    if (agentProfile) {
        agentProfileQuery = {
            statusFilter: agentProfile.status,
            domainFilter: agentProfile.domains && agentProfile.domains[0],
            roleFilter: agentProfile.role,
            capabilityFilter: agentProfile.capabilities && agentProfile.capabilities[0],
            descriptionFilter: agentProfile.description,
            nameFilter: agentProfile.name
        }
        logger.log("Agent profile query composed", agentProfileQuery)
    }
    return AgentProfilesRepository.agentProfilesGetAll(agentProfileQuery)
}

export default {agentProfilesGet}