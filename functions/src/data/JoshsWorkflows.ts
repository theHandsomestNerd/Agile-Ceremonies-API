import {WorkflowType} from "../Workflow.types";

export const JoshsWorkflows:WorkflowType[] = [
    {
        id: "josh_design_001",
        name: "Single-File React App Design Workflow",
        ownerAgentId: "josh",
        description: "Workflow for creating UI/UX designs for a single-file React application with inline styles",
        steps: [
            {
                id: "JD001-step-1",
                ownerAgentId: "josh",
                serviceName: "Requirements Review",
                tools: ["GitHub Issue Reader", "Design Requirements Parser"],
                actionToTake: "Analyze requirements for UI/UX implications",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Josh, analyzing design requirements.",
                        userPrompt: "Extract UI/UX requirements from GitHub issues and create design checklist."
                    },
                    output: {
                        output: "Design requirements checklist",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "JD001-step-2",
                ownerAgentId: "josh",
                serviceName: "Component Structure Planning",
                tools: ["Figma", "Component Hierarchy Designer"],
                actionToTake: "Plan React component hierarchy and layout",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Josh, planning component structure.",
                        userPrompt: "Create component hierarchy diagram with layout specifications."
                    },
                    output: {
                        output: "Component structure diagram",
                        outputType: "binary"
                    }
                },
                prerequisiteSteps: ["JD001-step-1"]
            },
            {
                id: "JD001-step-3",
                ownerAgentId: "josh",
                serviceName: "Inline Style System Design",
                tools: ["CSS-in-JS Designer", "Style System Generator"],
                actionToTake: "Design inline styling system for components",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Josh, creating inline style system.",
                        userPrompt: "Define reusable styles and themes for inline implementation."
                    },
                    output: {
                        output: "Inline style system documentation",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["JD001-step-2"]
            },
            {
                id: "JD001-step-4",
                ownerAgentId: "josh",
                serviceName: "Interactive Prototype Creation",
                tools: ["Figma", "Prototype Builder"],
                actionToTake: "Create interactive prototypes of components",
                expectedIO: {
                    input: {
                        inputType: "binary",
                        systemPrompt: "You are Josh, building interactive prototypes.",
                        userPrompt: "Develop clickable prototypes with component interactions."
                    },
                    output: {
                        output: "Interactive component prototypes",
                        outputType: "binary"
                    }
                },
                prerequisiteSteps: ["JD001-step-3"]
            },
            {
                id: "JD001-step-5",
                ownerAgentId: "josh",
                serviceName: "Responsive Design Verification",
                tools: ["Responsive Design Tester", "Breakpoint Manager"],
                actionToTake: "Verify responsive behavior of components",
                expectedIO: {
                    input: {
                        inputType: "binary",
                        systemPrompt: "You are Josh, testing responsive designs.",
                        userPrompt: "Test and document component behavior across screen sizes."
                    },
                    output: {
                        output: "Responsive design specifications",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["JD001-step-4"]
            },
            {
                id: "JD001-step-6",
                ownerAgentId: "josh",
                serviceName: "Asset Generation",
                tools: ["Asset Generator", "SVG Optimizer"],
                actionToTake: "Generate and optimize required assets",
                expectedIO: {
                    input: {
                        inputType: "binary",
                        systemPrompt: "You are Josh, preparing visual assets.",
                        userPrompt: "Create and optimize all required visual assets for the application."
                    },
                    output: {
                        output: "Optimized visual assets package",
                        outputType: "binary"
                    }
                },
                prerequisiteSteps: ["JD001-step-4"]
            },
            {
                id: "JD001-step-7",
                ownerAgentId: "josh",
                serviceName: "Design Documentation",
                tools: ["Design System Documenter", "Component Library"],
                actionToTake: "Create comprehensive design documentation",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Josh, documenting design system.",
                        userPrompt: "Document component specifications, styles, and usage guidelines."
                    },
                    output: {
                        output: "Complete design documentation",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["JD001-step-3", "JD001-step-5", "JD001-step-6"]
            },
            {
                id: "JD001-step-8",
                ownerAgentId: "josh",
                serviceName: "Developer Handoff",
                tools: ["Design Handoff Tool", "Style Guide Generator"],
                actionToTake: "Prepare design handoff for development team",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Josh, preparing developer handoff.",
                        userPrompt: "Generate development-ready design specs and style guides."
                    },
                    output: {
                        output: "Development-ready design package",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["JD001-step-7"]
            }
        ]
    }
]