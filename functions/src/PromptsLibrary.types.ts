export interface PromptsLibraryType {
    id: string,
    name: string, // Human-readable label
    description: string, // What the prompt does/when to use it
    prompt_text: string, // The core system or agent prompt template
    agentId: string, // Related agent, if any
    domains: string[], // Use-case or topic tags
    status: "active" | "deprecated", // "active", "deprecated", etc.
    created_at: string,
    updated_at: string,
    authorId: string,
    usage_count: number,
    last_used: string,
    prompt_log_refs: string[] // Array of log docIds for tracking usages/runs
}

export interface PromptsFilterType {
    nameFilter?: string,
    descriptionFilter?: string,
    promptTextFilter?: string,
    agentIdFilter?: string,
    domainFilter?: string,
    statusFilter?: string,
    roleFilter?: string,
    capabilityFilter?: string,
}

export interface PromptsLibraryLogType {
    "id": string,
    prompt: string,
    timestamp: string,
    sender: string,
    detectedAgent: string,
    confidence: number,
    status: "routed" | "processing" | "completed" | "error",
    "source": "agent" | "user" | "system",
}