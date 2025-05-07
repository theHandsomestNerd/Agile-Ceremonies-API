// ============== PROMPT CTX (CRUD, ready for Firestore!) ================
import {createContext, useContext, useState} from "react";
import {Prompt} from "../types/PromptLibrary.types";
import PromptLibraryData from "../data/PromptLibraryData";

export interface PromptCtxType {
    prompts: Prompt[];
    addPrompt: (
        p: Omit<
            Prompt,
            | "id"
            | "created_at"
            | "updated_at"
            | "usage_count"
            | "last_used"
            | "prompt_log_refs"
        >
    ) => Promise<void>;
    updatePrompt: (id: string, d: Partial<Prompt>) => Promise<void>;
    deletePrompt: (id: string) => Promise<void>;
    incrementUsage: (id: string) => Promise<void>;
    loading: boolean;
}

export const PromptContext = createContext<PromptCtxType | null>(null);
// --------- MOCK DATA (for local/first use) --------------
const initialPrompts: Prompt[] = Array.from({length: 50}, (_, i) => ({
    id: String(i + 1),
    name: `Prompt #${i + 1}`,
    description: `Test prompt example for domain features #${i + 1}`,
    prompt_text:
        i % 6 === 0
            ? "Summarize the following transcript:\n{transcript}"
            : i % 6 === 1
                ? "Write bug reproduction steps for:\n{bug_report}"
                : i % 6 === 2
                    ? "Draft an email inviting stakeholders to:\n{event}"
                    : i % 6 === 3
                        ? "Generate tests for feature:\n{feature}"
                        : i % 6 === 4
                            ? "Design a hero banner for:\n{theme}"
                            : "Social post for:\n{announcement}",
    domains: (() => {
        const map = [
            ["meeting", "summary"],
            ["bug", "qa", "repro"],
            ["email", "social"],
            ["test", "qa", "bug"],
            ["design", "summary"],
            ["social", "email"],
        ];
        return map[i % map.length];
    })(),
    status: i % 10 === 0 ? "archived" : "active",
    created_at: new Date(Date.now() - i * 6e5).toISOString(),
    updated_at: new Date(Date.now() - i * 3e5).toISOString(),
    last_used:
        i % 7 === 0
            ? new Date(Date.now() - i * 1.9e6).toISOString()
            : undefined,
    authorId: PromptLibraryData.AGENT_LIST[i % PromptLibraryData.AGENT_LIST.length],
    usage_count: Math.floor(Math.random() * 30),
    prompt_log_refs: [],
    agentId: PromptLibraryData.AGENT_LIST[i % PromptLibraryData.AGENT_LIST.length],
}));

export const PromptProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                     children,
                                                                 }) => {
    const [prompts, setPrompts] = useState<Prompt[]>(initialPrompts);
    const [loading, setLoading] = useState(false);

    // ---- Simulate async for CRUD
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const addPrompt: PromptCtxType["addPrompt"] = async (data) => {
        setLoading(true);
        await wait(320);
        const now = new Date().toISOString();
        setPrompts((prev) => [
            ...prev,
            {
                ...data,
                id: Math.random().toString(36).slice(2),
                created_at: now,
                updated_at: now,
                last_used: undefined,
                usage_count: 0,
                prompt_log_refs: [],
            },
        ]);
        setLoading(false);
    };
    const updatePrompt: PromptCtxType["updatePrompt"] = async (id, updates) => {
        setLoading(true);
        await wait(150);
        setPrompts((prev) =>
            prev.map((p:Prompt) =>
                p.id === id
                    ? {...p, ...updates, updated_at: new Date().toISOString()}
                    : p
            )
        );
        setLoading(false);
    };
    const deletePrompt: PromptCtxType["deletePrompt"] = async (id) => {
        setLoading(true);
        await wait(110);
        setPrompts((prev) => prev.filter((p) => p.id !== id));
        setLoading(false);
    };
    const incrementUsage: PromptCtxType["incrementUsage"] = async (id) => {
        setPrompts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? {
                        ...p,
                        usage_count: (p.usage_count ?? 0) + 1,
                        last_used: new Date().toISOString(),
                    }
                    : p
            )
        );
    };
    return (
        <PromptContext.Provider
            value={{
                prompts,
                addPrompt,
                updatePrompt,
                deletePrompt,
                incrementUsage,
                loading,
            }}
        >
            {children}
        </PromptContext.Provider>
    );
};

export function usePrompts() {
    const c = useContext(PromptContext);
    if (!c) throw new Error("PromptProvider not initialized");
    return c;
}