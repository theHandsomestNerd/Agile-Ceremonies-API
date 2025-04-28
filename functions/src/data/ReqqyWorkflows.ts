import {WorkflowType} from "../Workflow.types";

export const ReqqysWorkflows: WorkflowType[] = [
    {
        id: "reqqy_requirements_001",
        name: "Requirements Analysis Workflow for Single-Page React App",
        ownerAgentId: "reqqy",
        description: "Workflow for gathering and structuring requirements for a single-file React application with Firebase backend",
        steps: [
            {
                id: "RQ001-step-1",
                ownerAgentId: "reqqy",
                serviceName: "Initial Requirements Gathering",
                tools: ["Requirements Template", "Meeting Notes Parser"],
                actionToTake: "Collect initial requirements and constraints",
                expectedIO: {
                    input: {
                        inputType: "text",
                        systemPrompt: "You are Reqqy, focusing on single-file React app requirements.",
                        userPrompt: "Extract key requirements from stakeholder inputs and technical constraints."
                    },
                    output: {
                        output: "Raw requirements list",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "RQ001-step-2",
                ownerAgentId: "reqqy",
                serviceName: "Technical Feasibility Analysis",
                tools: ["React Component Analyzer", "Firebase Capability Matrix"],
                actionToTake: "Validate technical requirements against single-file constraint",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Reqqy, analyzing technical feasibility.",
                        userPrompt: "Verify requirements compatibility with single-file React implementation."
                    },
                    output: {
                        output: "Technical feasibility report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["RQ001-step-1"]
            },
            {
                id: "RQ001-step-3",
                ownerAgentId: "reqqy",
                serviceName: "Data Structure Planning",
                tools: ["Firestore Schema Designer", "Data Flow Mapper"],
                actionToTake: "Define data structures and relationships",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Reqqy, planning data structures.",
                        userPrompt: "Create Firestore collection schemas and data relationships."
                    },
                    output: {
                        output: "Data structure specifications",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["RQ001-step-2"]
            },
            {
                id: "RQ001-step-4",
                ownerAgentId: "reqqy",
                serviceName: "Component Requirements",
                tools: ["UI Component Mapper", "Style Requirement Analyzer"],
                actionToTake: "Define React component structure and styling requirements",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Reqqy, defining component requirements.",
                        userPrompt: "Specify React components and inline styling needs."
                    },
                    output: {
                        output: "Component specifications",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["RQ001-step-2"]
            },
            {
                id: "RQ001-step-5",
                ownerAgentId: "reqqy",
                serviceName: "GitHub Issue Creation",
                tools: ["GitHub API", "Issue Template Generator"],
                actionToTake: "Create structured GitHub issues",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Reqqy, creating GitHub issues.",
                        userPrompt: "Transform requirements into detailed GitHub issues."
                    },
                    output: {
                        output: "GitHub issues with labels and milestones",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["RQ001-step-3", "RQ001-step-4"]
            },
            {
                id: "RQ001-step-6",
                ownerAgentId: "reqqy",
                serviceName: "Documentation Preparation",
                tools: ["Markdown Editor", "Requirements Validator"],
                actionToTake: "Create comprehensive requirements documentation",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Reqqy, documenting requirements.",
                        userPrompt: "Generate detailed requirements documentation with acceptance criteria."
                    },
                    output: {
                        output: "Final requirements document with validation checklist",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["RQ001-step-5"]
            },
            {
                id: "RQ001-step-7",
                ownerAgentId: "reqqy",
                serviceName: "Stakeholder Approval",
                tools: ["Review Management System", "Feedback Collector"],
                actionToTake: "Obtain stakeholder approval on requirements",
                expectedIO: {
                    input: {
                        inputType: "markdown",
                        systemPrompt: "You are Reqqy, facilitating requirement approval.",
                        userPrompt: "Collect and incorporate stakeholder feedback and approvals."
                    },
                    output: {
                        output: "Approved requirements with stakeholder sign-offs",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["RQ001-step-6"]
            }
        ]
    }

]