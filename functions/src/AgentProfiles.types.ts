export interface AgentProfilesType {
    id: string;
    name: string,
    role: string,
    capabilities: string[],
    description: string,
    domains: string[],
    status: string
}

export interface AgentProfilesFilterType {
    statusFilter?: string,
    domainFilter?: string,
    roleFilter?: string,
    capabilityFilter?: string
    descriptionFilter?: string,
    nameFilter?: string,
}
