// Business-invariant canonical step array
import {Step} from "../App.types";

export const Steps: Step[] = [
    {
        id: 1,
        name: "Collect requirements",
        status: "complete",
        assigned: "Reqqy",
        devNotes: "JSON requirements synced.",
        description: "All required info for v3.9.5 captured and validated.",
        n8nJson: {
            id: 1,
            type: "requirements",
            agent: "Reqqy",
            status: "complete",
            notes: "Imported from docs.",
        },
    },
    {
        id: 2,
        name: "Design visuals",
        status: "active",
        assigned: "Josh",
        devNotes: "Check SVG contrast, keep animation, docs must be thorough.",
        description:
            "Visual polish for accessibility. No redesign. Only bugfixes & documentation allowed.",
        n8nJson: {
            id: 2,
            type: "design",
            agent: "Josh",
            status: "active",
            notes: "Check SVG contrast.",
        },
    },
    {
        id: 3,
        name: "Develop logic",
        status: "active",
        assigned: "Twin",
        devNotes: "Preserve v3.9 features. Maintain ARIA/test cover.",
        description:
            "Implement Features per Reqqy's requirements with no regressions.",
        n8nJson: {
            id: 3,
            type: "develop",
            agent: "Twin",
            status: "active",
            notes: "Feature parity focus.",
        },
    },
    {
        id: 4,
        name: "Test features",
        status: "error",
        assigned: "Antosh",
        devNotes: "WCAG fails on contrast for one button.",
        description: "AXE/NVDA audit failed. Triage and fix before release.",
        n8nJson: {
            id: 4,
            type: "test",
            agent: "Antosh",
            status: "error",
            notes: "Fix button contrast.",
        },
    },
    {
        id: 5,
        name: "Deploy workflow",
        status: "complete",
        assigned: "Man-Man",
        devNotes: "Released to demo env.",
        description: "Versioned deployment, with audit logs.",
        n8nJson: {
            id: 5,
            type: "deploy",
            agent: "Man-Man",
            status: "complete",
            notes: "All services live.",
        },
    },
];