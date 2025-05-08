// Agile Pair Programming with TDD Workflow data
export const agilePairTDDWorkflow = {
    id: "agile_pair_tdd_003",
    name: "Agile Pair Programming with TDD Workflow",
    ownerAgentId: "compass",
    description: "A workflow for implementing features using Pair Programming and Test-Driven Development practices",
    steps: [
        {
            id: "APT001-step-1",
            ownerAgentId: "nat",
            serviceName: "Project Initialization",
            tools: ["Firebase", "Project Manager"],
            actionToTake: "Create a project in the projects collection with project details.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Nat, the CEO and Project Manager.",
                    userPrompt: "Create a project document in the collection containing all project details."
                },
                output: {
                    output: "Project document with project ID",
                    outputType: "json"
                }
            },
            prerequisiteSteps: []
        },
        {
            id: "APT001-step-2",
            ownerAgentId: "reqqy",
            serviceName: "Requirements Collection",
            tools: ["GitHub", "Requirements Parser"],
            actionToTake: "Collect and structure project requirements",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Reqqy, the requirements specialist.",
                    userPrompt: "Gather and structure the requirements based on the project details from the collection."
                },
                output: {
                    output: "Structured requirements stored in a collection for reference",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-1"]
        },
        {
            id: "APT001-step-3",
            ownerAgentId: "brian",
            serviceName: "Design Document Creation",
            tools: ["Document Editor", "Design Tools"],
            actionToTake: "Create and store a design document in the collection using project ID.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Brian, the Product Manager.",
                    userPrompt: "Write a design document based on requirements and store it in a collection referenced by project ID."
                },
                output: {
                    output: "Design document stored in collection",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-2"]
        },
        {
            id: "APT001-step-4",
            ownerAgentId: "josh",
            serviceName: "UI/UX Mockup Design",
            tools: ["Design Tools", "Asset Manager"],
            actionToTake: "Create visual designs and mockups based on requirements and previous mockups.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Josh, the UI/UX designer.",
                    userPrompt: "Create mockups with inspiration from stored requirements and mockups based on project ID."
                },
                output: {
                    output: "Mockup designs as PNG file",
                    outputType: "binary"
                }
            },
            prerequisiteSteps: ["APT001-step-2"]
        },
        {
            id: "APT001-step-5",
            ownerAgentId: "james_terrell",
            serviceName: "Pair Programming Session 1",
            tools: ["Code Editor", "Version Control"],
            actionToTake: "Implement features and leave comments for code review",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are James and Terrell, the development pair.",
                    userPrompt: "Implement features based on requirements and leave comments for code review."
                },
                output: {
                    output: "Feature implementation code with comments",
                    outputType: "code"
                }
            },
            prerequisiteSteps: ["APT001-step-3", "APT001-step-4"]
        },
        {
            id: "APT001-step-6",
            ownerAgentId: "antosh",
            serviceName: "Quality Assurance",
            tools: ["Testing Suite", "Analytics Tools"],
            actionToTake: "Run tests against the features implemented.",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are Antosh, the testing specialist.",
                    userPrompt: "Execute test suite against the implemented features."
                },
                output: {
                    output: "Test reports and performance insights",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-5"]
        },
        {
            id: "APT001-step-7",
            ownerAgentId: "terrell",
            serviceName: "Code Review",
            tools: ["Code Review Tools", "Version Control"],
            actionToTake: "Review code written by James.",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are Terrell, conducting code reviews.",
                    userPrompt: "Review and provide feedback on James' implementation."
                },
                output: {
                    output: "Code review feedback and checklist updates",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-6"]
        },
        {
            id: "APT001-step-8",
            ownerAgentId: "james",
            serviceName: "Code Fixes",
            tools: ["Code Editor", "Version Control"],
            actionToTake: "Fix issues raised during code review.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are James, fixing code based on review.",
                    userPrompt: "Address the issues from code review and ensure all requirements are updated."
                },
                output: {
                    output: "Updated implementation and checklist",
                    outputType: "code"
                }
            },
            prerequisiteSteps: ["APT001-step-7"]
        },
        {
            id: "APT001-step-9",
            ownerAgentId: "brian",
            serviceName: "Final Code Review",
            tools: ["Code Review Tools", "Version Control"],
            actionToTake: "Conduct a final code review on the completed features.",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are Brian, conducting final reviews.",
                    userPrompt: "Ensure all requirements and specifications are addressed in the final code."
                },
                output: {
                    output: "Final code review summary and actionable items",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-8"]
        },
        {
            id: "APT001-step-10",
            ownerAgentId: "nat",
            serviceName: "Final Review",
            tools: ["Review Tools"],
            actionToTake: "Conduct a final review of the application based on user intent.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Nat, performing the final product review.",
                    userPrompt: "Review the final application against initial user intent."
                },
                output: {
                    output: "Final review notes and any adjustments needed",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-9"]
        },
        {
            id: "APT001-step-11",
            ownerAgentId: "brian",
            serviceName: "Standup Meetings",
            tools: ["Logger"],
            actionToTake: "Conduct standup meetings every 10 minutes.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Brian, responsible for standups.",
                    userPrompt: "Log the workflow progress of each agent every 10 minutes."
                },
                output: {
                    output: "Standup logs with documented progress",
                    outputType: "json"
                }
            },
            prerequisiteSteps: []
        }
    ]
};

// Help Desk Workflow data
export const helpDeskWorkflow = {
    id: "help_desk_001",
    name: "Help Desk Workflow",
    ownerAgentId: "compass",
    description: "Answer questions about Handsomest Nerd, its agents, and system capabilities; troubleshoot user technical issues.",
    steps: [
        {
            id: "help_desk_step_1",
            ownerAgentId: "compass",
            serviceName: "Parse Request",
            tools: ["Webhook Parser"],
            actionToTake: "Parse incoming message for help desk request category and keywords.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "{master-system-prompt+\n+compass-system-prompt}",
                    userPrompt: "Parse incoming help desk request."
                },
                output: {
                    outputType: "json",
                    output: "question_category"
                }
            },
            prerequisiteSteps: []
        },
        {
            id: "help_desk_step_2",
            ownerAgentId: "compass",
            serviceName: "Knowledge Lookup",
            tools: ["Internal Docs Search", "OpenAI API"],
            actionToTake: "Search docs and/or ask OpenAI for concise, relevant answers.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "{master-system-prompt+\n+compass-system-prompt}",
                    userPrompt: "Find or generate help desk response."
                },
                output: {
                    outputType: "text",
                    output: "AI/Docs-generated answer"
                }
            },
            prerequisiteSteps: ["help_desk_step_1"]
        },
        {
            id: "help_desk_step_3",
            ownerAgentId: "compass",
            serviceName: "Respond",
            tools: ["Webhook Response"],
            actionToTake: "Format and return response to caller in markdown.",
            expectedIO: {
                input: {
                    inputType: "text",
                    userPrompt: "Format answer.",
                    systemPrompt: "{master-system-prompt+\n+compass-system-prompt}",
                },
                output: {
                    outputType: "json",
                    output: "Formatted markdown response"
                }
            },
            prerequisiteSteps: ["help_desk_step_2"]
        }
    ]
};