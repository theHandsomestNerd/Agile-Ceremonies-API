export interface AgentProfilesType {
    id: string;
    name: string,
    role: 'Product Manager' | 'Developer' | 'Graphic Designer' | 'Marketing' | 'Team Member' | 'CEO' | 'Testing' | 'Requirements' | 'Frontend Developer' | 'Backend Developer' | 'Dev Ops' | 'Social Media'| 'Communications' | 'Full-Stack Development Pair' ,
    capabilities: string[],
    description: string,
    domains: string[],
    status: string,
    workflowEndpoint?: string,
}

export interface AgentProfilesFilterType {
    statusFilter?: string,
    domainFilter?: string,
    roleFilter?: string,
    capabilityFilter?: string
    descriptionFilter?: string,
    nameFilter?: string,
}
