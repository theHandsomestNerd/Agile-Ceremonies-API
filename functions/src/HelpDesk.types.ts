
// Interface for OpenAI request format
export interface OpenAIRequest {
    model: string;
    messages: {
        role: 'system' | 'user' | 'assistant';
        content: string;
    }[];
    temperature?: number;
    max_tokens?: number;
}
