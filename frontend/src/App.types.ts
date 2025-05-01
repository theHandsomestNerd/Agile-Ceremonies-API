/**
 * =========================
 * DATA TYPES & CONSTANTS
 * =========================
 */
export type AgentKey =
    | "Josh"
    | "Reqqy"
    | "Nat"
    | "Lia"
    | "Man-Man"
    | "Twin"
    | "Antosh";
export type StatusType = "complete" | "active" | "todo" | "error";
export type Step = {
    id: number;
    name: string;
    status: StatusType;
    assigned: AgentKey;
    devNotes: string;
    description: string;
    n8nJson: object;
};
export type Agent = {
    key: AgentKey;
    name: string;
    short: string;
    role: string;
    color: string;
    accent: string;
    avatarBg: string;
};