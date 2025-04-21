import AgentProfilesRepository from "../repository/AgentProfilesRepository";
import {AgentProfilesFilterType, AgentProfilesType} from "../AgentProfiles.types";

const agentProfilesGet = async (agentProfile:AgentProfilesType) => {
    const agentProfileQuery:AgentProfilesFilterType = {
        statusFilter: agentProfile.status,
        domainFilter: agentProfile.domains[0],
        roleFilter: agentProfile.role,
        capabilityFilter: agentProfile.capabilities[0],
        descriptionFilter: agentProfile.description,
        nameFilter: agentProfile.name
    }

    return  AgentProfilesRepository.agentProfilesGetAll(agentProfileQuery)
}

export default {agentProfilesGet}