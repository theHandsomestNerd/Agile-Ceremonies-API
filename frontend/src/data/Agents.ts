import {Agent, AgentKey} from "../types/App.types";


export const Agents: Record<AgentKey, Agent> = {
    josh: {
        key: "josh",
        name: "Josh",
        short: "J",
        role: "Graphic Design Agent",
        color: "var(--color-josh-primary)",
        accent: "var(--color-josh-secondary)",
        avatarBg: "var(--color-josh-gradient)",
        description: 'Creates mockups, handles branding, produces visual assets and UI components'
    },
    reqqy: {
        key: "reqqy",
        name: "Reqqy",
        short: "R",
        role: "Requirements Agent",
        color: "var(--color-reqqy-primary)",
        accent: "var(--color-reqqy-secondary)",
        avatarBg: "var(--color-reqqy-gradient)",
        description: 'Gathers requirements, creates structured issues, manages GitHub integration'
    },
    nat: {
        key: "nat",
        name: "Nat",
        short: "N",
        role: "CEO/AI PM",
        color: "var(--color-nat-primary)",
        accent: "var(--color-nat-secondary)",
        avatarBg: "var(--color-nat-gradient)",
        description: 'Overall project management, access to all system components, final decision authority'
    },
    brian: {
        key: "brian",
        name: "Brian",
        short: "B",
        role: "Product Manager",
        color: "var(--color-brian-primary)",
        accent: "var(--color-brian-secondary)",
        avatarBg: "var(--color-brian-gradient)",
        description: 'Manages the Pair Programming Widget specifically, coordinates feature development'
    },
    lia: {
        key: "lia",
        name: "Lia",
        short: "L",
        role: "Email & Social Media Agent",
        color: "var(--color-lia-primary)",
        accent: "var(--color-lia-secondary)",
        avatarBg: "var(--color-lia-gradient)",
        description: 'Manages social media presence, email marketing, lead generation'
    },
    "man-man": {
        key: "man-man",
        name: "Man-Man",
        short: "M",
        role: "Maintenance Agent",
        color: "var(--color-manman-primary)",
        accent: "var(--color-manman-secondary)",
        avatarBg: "var(--color-manman-gradient)",
        description: 'Handles DevOps, maintains deployed applications, manages infrastructure'
    },
    twin: {
        key: "twin",
        name: "James & Terrell",
        short: "JT",
        role: "Twin Developer Agents",
        color: "var(--color-twin-primary)",
        accent: "var(--color-twin-secondary)",
        avatarBg: "var(--color-twin-gradient)",
        description: 'Collaborate via pair programming, implement features, write code'
    },
    antosh: {
        key: "antosh",
        name: "Antosh",
        short: "A",
        role: "Testing & Analytics Agent",
        color: "var(--color-antosh-primary)",
        accent: "var(--color-antosh-secondary)",
        avatarBg: "var(--color-antosh-gradient)",
        description: 'Writes and runs tests, implements TDD methodology, tracks performance metrics'
    },
    terrell: {
        key: "terrell",
        name: "Terrell",
        short: "T",
        role: "Frontend Developer",
        color: "var(--color-terrell-primary)",
        accent: "var(--color-terrell-secondary)",
        avatarBg: "var(--color-terrell-gradient)",
        description: 'Performs code reviews, provides feedback, works with James in pair programming'
    },
    james: {
        key: "james",
        name: "James",
        short: "J",
        role: "Backend Developer",
        color: "var(--color-james-primary)",
        accent: "var(--color-james-secondary)",
        avatarBg: "var(--color-james-gradient)",
        description: 'Implements features, writes and fixes code, works with Terrell in pair programming'
    },
    compass: {
        key: "compass",
        name: "Compass",
        short: "C",
        role: "HR/Routing and Messaging Agent",
        color: "var(--color-compass-primary)",
        accent: "var(--color-compass-secondary)",
        avatarBg: "var(--color-compass-gradient)",
        description: 'Routes messages, maps workflows, maintains agent roster and capabilities'
    }
};