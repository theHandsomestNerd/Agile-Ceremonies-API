/**
 * =========================
 * DATA TYPES & CONSTANTS
 * =========================
 */
export type AgentKey =
    | "josh"
    | "reqqy"
    | "nat"
    | "brian"
    | "lia"
    | "man-man"
    | "twin"
    | "terrell"
    | "james"
    | "antosh"
    | "compass";


export type StatusType = "complete" | "active" | "todo" | "error" | "pending";
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
    description: string;
};