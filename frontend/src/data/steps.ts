// Business-invariant canonical step array
import {Step} from "../types/App.types";

export const Steps: Step[] = [
    {
        id: 1,
        name: "Collect requirements",
        status: "complete",
        assigned: "reqqy",
        devNotes: "JSON requirements synced.",
        description: "All required info for v3.9.5 captured and validated.",
        priority: "high",
        styleProps: {
          cardBg: "var(--color-reqqy-surface)",
          accentColor: "var(--color-reqqy-primary)",
          textColor: "var(--color-text-dark)",
          iconBg: "var(--color-reqqy-gradient)",
          borderColor: "var(--color-reqqy-secondary)",
        },
        visualProps: {
          icon: "📋", // Requirements icon
          order: 1,
          dependencies: [],
        },
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
        assigned: "josh",
        devNotes: "Check SVG contrast, keep animation, docs must be thorough.",
        description:
            "Visual polish for accessibility. No redesign. Only bugfixes & documentation allowed.",
        priority: "high",
        styleProps: {
          cardBg: "var(--color-josh-surface)",
          accentColor: "var(--color-josh-primary)",
          textColor: "var(--color-text-dark)",
          iconBg: "var(--color-josh-gradient)",
          borderColor: "var(--color-josh-secondary)",
        },
        visualProps: {
          icon: "🎨", // Design icon
          order: 2,
          dependencies: [1],
        },
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
        assigned: "twin",
        devNotes: "Preserve v3.9 features. Maintain ARIA/test cover.",
        description:
            "Implement Features per Reqqy's requirements with no regressions.",
        priority: "medium",
        styleProps: {
          cardBg: "var(--color-twin-surface)",
          accentColor: "var(--color-twin-primary)",
          textColor: "var(--color-text-dark)",
          iconBg: "var(--color-twin-gradient)",
          borderColor: "var(--color-twin-secondary)",
        },
        visualProps: {
          icon: "💻", // Development icon
          order: 3,
          dependencies: [1, 2],
        },
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
        assigned: "antosh",
        devNotes: "WCAG fails on contrast for one button.",
        description: "AXE/NVDA audit failed. Triage and fix before release.",
        priority: "high",
        styleProps: {
          cardBg: "var(--color-antosh-surface)",
          accentColor: "var(--color-antosh-primary)",
          textColor: "var(--color-text-dark)",
          iconBg: "var(--color-antosh-gradient)",
          borderColor: "var(--color-antosh-secondary)",
        },
        visualProps: {
          icon: "🧪", // Testing icon
          order: 4,
          dependencies: [3],
        },
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
        assigned: "man-man",
        devNotes: "Released to demo env.",
        description: "Versioned deployment, with audit logs.",
        priority: "medium",
        styleProps: {
          cardBg: "var(--color-manman-surface)",
          accentColor: "var(--color-manman-primary)",
          textColor: "var(--color-text-dark)",
          iconBg: "var(--color-manman-gradient)",
          borderColor: "var(--color-manman-secondary)",
        },
        visualProps: {
          icon: "🚀", // Deployment icon
          order: 5,
          dependencies: [4],
        },
        n8nJson: {
            id: 5,
            type: "deploy",
            agent: "Man-Man",
            status: "complete",
            notes: "All services live.",
        },
    },
];