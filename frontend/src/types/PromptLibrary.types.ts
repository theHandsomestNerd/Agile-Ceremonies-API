// ================== DATA MODEL/TYPES ===================
export type Prompt = {
    id: string;
    name: string;
    description: string;
    prompt_text: string;
    domains: string[];
    status: "active" | "archived";
    created_at: string;
    updated_at: string;
    last_used?: string;
    authorId: string;
    usage_count: number;
    prompt_log_refs: string[];
    agentId: string;
};