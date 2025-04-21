export interface AgentProfilesType {
    id: string;
    name: string,
    role: 'PM' | 'Developer' | 'Graphic Designer' | 'Marketing' | 'Team Member' | 'CEO',
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
