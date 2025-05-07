/**
 * =========================
 * DATA TYPES & CONSTANTS
 * =========================
 */
export type AgentKey =
    | "Josh"
    | "Reqqy"
    | "Nat"
    | "Brian"
    | "Lia"
    | "Man-Man"
    | "Twin"
    | "Terrell"
    | "James"
    | "Antosh";
export type StatusType = "complete" | "active" | "todo" | "error";
export type Step = {
    id: number;
    name: string;
    status: StatusType;
    assigned: AgentKey;
    devNotes: string;
    description: string;
    priority?: "low" | "medium" | "high";
    styleProps?: {
        cardBg?: string;
        accentColor?: string;
        textColor?: string; 
        iconBg?: string;
        borderColor?: string;
    };
    visualProps?: {
        icon?: string;
        order?: number;
        dependencies?: number[];
    };
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