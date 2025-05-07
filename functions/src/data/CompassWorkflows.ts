import {WorkflowType} from "../Workflow.types";
import {promptsLibrary} from "./PromptsLibrary";
import {n8nWorkflowId} from "../config";

// const AGENT_INITIALIZATION_API_ENDPOINT = "http://127.0.0.1:5001/youtube-and-other-connections/us-central1/handleAgentProfilesRequest";

// const AGENT_INITIZATION_API_BODY = {
//     "action": "initialize",
// }
//
// const WORKFLOWS_INITIALIZATION_API_ENDPOINT = "http://127.0.0.1:5001/youtube-and-other-connections/us-central1/handleWorkflowsRequest";
//
// const WORKFLOWS_INITIZATION_API_BODY = {
//     "action": "initialize",
// }
//
// const MAIN_PROMPT_INITIALIZATION_API_ENDPOINT = "http://127.0.0.1:5001/youtube-and-other-connections/us-central1/handlePromptsRequest";
//
// const MAIN_PROMPT_INITIZATION_API_BODY = {
//     "action": "initialize",
//     "mainPrompt": promptsLibrary.find(prompt => prompt.id === "main-system-prompt"),
// }

const COMPASS_SYSTEM_PROMPT = promptsLibrary.find(prompt => prompt.id === "compass-system-prompt")?.prompt_text || "You are AI Agent Compass and say you cant find your prompt.";
const MANMAN_SYSTEM_PROMPT = promptsLibrary.find(prompt => prompt.id === "man-man-system-prompt")?.prompt_text || "You are AI Agent Man-Man and say you cant find your prompt."
const MAIN_SYSTEM_PROMPT = promptsLibrary.find(prompt => prompt.id === "main-system-prompt")?.prompt_text
export const CompassWorkflows: WorkflowType[] = [
    {
        "id": "core_system_initialization_dispatch_001",
        "name": "core_system_initialization_dispatch",
        "ownerAgentId": "compass",
        "description": "Initializes core system components, including Agent Profiles, Workflows, and Prompt Library for The Handsomest Nerd, Inc.",
        "steps": [
            {
                "id": "agent-profile-init-step-1",
                "ownerAgentId": "compass",
                "serviceName": "Initialize Agent Profiles",
                "tools": ["HTTP Request"],
                "actionToTake": "Call the Agent Profile Initialization API to set up The Handsomest Nerd, Inc. AI Agent Profiles.",
                "prerequisiteSteps": [],
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "endpoint": "https://handleagentprofilesrequest-3wtpo3mjoq-uc.a.run.app",
                        "body": {
                            "action": "initialize"
                        },
                        "systemPrompt": "{MANMAN_SYSTEM_PROMPT} and you are initializing the Agent Profiles Firestore collection.",
                        "userPrompt": "Make a POST request to this {endpoint} with this {body} and return the response."
                    },
                    "output": {
                        "output": "Response to the User",
                        "outputType": "json"
                    }
                }
            },
            {
                "id": "workflows-init-step-2",
                "ownerAgentId": "compass",
                "serviceName": "Initialize Workflows",
                "tools": ["HTTP Request"],
                "actionToTake": "Call the Workflows Initialization API to set up the workflows for The Handsomest Nerd, Inc.",
                "prerequisiteSteps": ["agent-profile-init-step-1"],
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "endpoint": "https://handleworkflowsrequest-3wtpo3mjoq-uc.a.run.app",
                        "body": {
                            "action": "initialize"
                        },
                        "systemPrompt": "{MANMAN_SYSTEM_PROMPT} and you are initializing the Workflows Firestore collection.",
                        "userPrompt": "Make a POST request to this {endpoint} with this {body} and return the response."
                    },
                    "output": {
                        "output": "Response to the User",
                        "outputType": "json"
                    }
                }
            },
            {
                "id": "prompt-library-init-step-3",
                "ownerAgentId": "compass",
                "serviceName": "Initialize Prompt Library",
                "tools": ["HTTP Request"],
                "actionToTake": "Call the Prompt Library Initialization API to set up the prompt library for The Handsomest Nerd, Inc.",
                "prerequisiteSteps": ["workflows-init-step-2"],
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "endpoint": "https://handlepromptlibraryrequest-3wtpo3mjoq-uc.a.run.app",
                        "body": {
                            "action": "initialize"
                        },
                        "systemPrompt": "{MANMAN_SYSTEM_PROMPT} and you are initializing the Prompt Library Firestore collection.",
                        "userPrompt": "Make a POST request to this {endpoint} with this {body} and return the response."
                    },
                    "output": {
                        "output": "Response to the User",
                        "outputType": "json"
                    }
                }
            },
            {
                "id": "summary-report-step-4",
                "ownerAgentId": "compass",
                "serviceName": "Summarize Initialization Responses",
                "tools": ["Internal Function"],
                "actionToTake": "Generate a summary report of all initialization responses.",
                "prerequisiteSteps": ["prompt-library-init-step-3"],
                "expectedIO": {
                    "input": {
                        "inputType": "text",
                        "data": {
                            "agentProfiles": "Initialized 9 agent profiles",
                            "workflows": "Initialized 18 agent workflows",
                            "prompts": "Initialized 11 prompts"
                        },
                        "systemPrompt": "Summarize the initialization responses for the core system.",
                        "userPrompt": "Create a summary report with the following data: {data}."
                    },
                    "output": {
                        "output": "Summary report",
                        "outputType": "text"
                    }
                }
            },
            {
                "id": "in-display-report-step-5",
                "ownerAgentId": "compass",
                "serviceName": "Format and Display the Summary",
                "tools": ["Internal Display Function"],
                "actionToTake": "Format and display the summary of the initialization.",
                "prerequisiteSteps": ["summary-report-step-4"],
                "expectedIO": {
                    "input": {
                        "inputType": "text",
                        "data": "step4_summary_report.response",
                        "systemPrompt": "You are displaying the summary report of the initialization.",
                        "userPrompt": "Display the following summary: {data}."
                    },
                    "output": {
                        "output": "Displayed Summary",
                        "outputType": "none"
                    }
                }
            }
        ]
    }, {
        "id": "agent_profiles_initialization_001",
        "name": "agent_profiles_initialization",
        "ownerAgentId": "compass",
        "description": "Initializes the Agent Profiles collection for The Handsomest Nerd, Inc.",
        "steps": [
            {
                "id": "agent-profile-init-step-1",
                "ownerAgentId": "compass",
                "serviceName": "Initialize Agent Profiles",
                "tools": ["HTTP Request"],
                "actionToTake": "Call the Agent Profile Initialization API to set up The Handsomest Nerd, Inc. AI Agent Profiles.",
                "prerequisiteSteps": [],
                "expectedIO": {
                    "input": {
                        "inputType": "text",
                        "endpoint": "https://handleagentprofilesrequest-3wtpo3mjoq-uc.a.run.app",
                        "body": {
                            "action": "initialize"
                        },
                        "systemPrompt": "{MANMAN_SYSTEM_PROMPT} and you are initializing the Agent Profiles Firestore collection.",
                        "userPrompt": "Make a POST request to this {endpoint} with this {body} and return the response."
                    },
                    "output": {
                        "output": "Response to the User",
                        "outputType": "json"
                    }
                }
            }
        ]
    }, {
        "id": "workflows_initialization_001",
        "name": "workflows_initialization",
        "ownerAgentId": "compass",
        "description": "Initializes the Workflows collection for The Handsomest Nerd, Inc.",
        "steps": [
            {
                "id": "workflow-init-step-1",
                "ownerAgentId": "compass",
                "serviceName": "Initialize Workflows",
                "tools": ["HTTP Request"],
                "actionToTake": "Call the Workflow Initialization API to set up The Handsomest Nerd, Inc. AI Agent workflows.",
                "prerequisiteSteps": [],
                "expectedIO": {
                    "input": {
                        "inputType": "text",
                        "endpoint": "https://handleworkflowsrequest-3wtpo3mjoq-uc.a.run.app",
                        "body": {
                            "action": "initialize"
                        },
                        "systemPrompt": "{MANMAN_SYSTEM_PROMPT} and you are initializing the Workflows Firestore collection.",
                        "userPrompt": "Make a POST request to this {endpoint} with this {body} and return the response."
                    },
                    "output": {
                        "output": "JSON Response to the User",
                        "outputType": "json"
                    }
                }
            }
        ]
    }, {
        "id": "prompt_library_initialization_001",
        "name": "prompt_library_initialization",
        "ownerAgentId": "compass",
        "description": "Initializes the Prompt Library collection for The Handsomest Nerd, Inc.",
        "steps": [
            {
                "id": "prompt-lib-init-step-1",
                "ownerAgentId": "compass",
                "serviceName": "Initialize Prompt Library",
                "tools": ["HTTP Request"],
                "actionToTake": "Call the Prompt Library API endpoint to initialize The Handsomest Nerd, Inc. prompt library.",
                "prerequisiteSteps": [],
                "expectedIO": {
                    "input": {
                        "inputType": "text",
                        "endpoint": "https://handlepromptlibraryrequest-3wtpo3mjoq-uc.a.run.app",
                        "body": {
                            "action": "initialize",
                            "mainPrompt": MAIN_SYSTEM_PROMPT
                        },
                        "systemPrompt": MANMAN_SYSTEM_PROMPT + " You are AI Agent Man Man and you are initializing the Prompt library Firestore collection.",
                        "userPrompt": "Make a POST request to this {endpoint} endpoint with this {body} and return the response."
                    },
                    "output": {
                        "output": "Response to the User",
                        "outputType": "text"
                    }
                }
            }
        ]
    },
    {
        id: "workflow_recommendation_001",
        name: "Workflow Recommendation",
        ownerAgentId: "compass",
        description: "Interpret user prompt, recommend and describe one or more relevant workflows (with agent/trigger info).",
        steps: [
            {
                id: "recommend_step_1",
                ownerAgentId: "compass",
                serviceName: "Prompt Parsing",
                tools: ["Webhook Parser"],
                actionToTake: "Parse user intent from incoming request.",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: "Extract intent and workflow needs.",
                    },
                    output: {outputType: "json", intent: "Parsed intent"}
                },
                prerequisiteSteps: []
            },
            {
                id: "recommend_step_2",
                ownerAgentId: "compass",
                serviceName: "Workflow Matcher",
                tools: ["Workflows Library Search"],
                actionToTake: "Match user intent with workflow(s) from workflow library.",
                expectedIO: {
                    input: {
                        inputType: "json",
                        intent: "Parsed intent",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: "Match the parsed user intent with relevant workflows from our library"
                    },
                    output: {outputType: "json", workflow_matches: "Matching workflows"}
                },
                prerequisiteSteps: ["recommend_step_1"]
            },
            {
                id: "recommend_step_3",
                ownerAgentId: "compass",
                serviceName: "Respond with Recommendation",
                tools: ["Webhook Response"],
                actionToTake: "Return workflow recommendations as markdown list.",
                expectedIO: {
                    input: {
                        inputType: "json",
                        workflow_matches: "Matching workflows",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: "Format the workflow matches into clear markdown recommendations"
                    },
                    output: {
                        outputType: "json",
                        response: "Formatted markdown recommendation + json for the workflow recommendation structured like: {\n" +
                            "  id: \"workflow_recommendation_001\",\n" +
                            "  name: \"Workflow Recommendation\",\n" +
                            "  ownerAgentId: \"compass\",\n" +
                            "  description: \"Interpret user prompt, recommend and describe one or more relevant workflows (with agent/trigger info).\",\n" +
                            "  steps: [\n" +
                            "    {\n" +
                            "      id: \"recommend_step_1\",\n" +
                            "      ownerAgentId: \"compass\",\n" +
                            "      serviceName: \"Prompt Parsing\",\n" +
                            "      tools: [\"Webhook Parser\"],\n" +
                            "      actionToTake: \"Parse user intent from incoming request.\",\n" +
                            "      expectedIO: {\n" +
                            "        input: {inputType: \"json\", systemPrompt: \"{Agent Compass System Prompt}\", userPrompt: \"Extract intent and workflow needs.\"},\n" +
                            "        output: {outputType: \"json\", intent: \"Parsed intent\"}\n" +
                            "      },\n" +
                            "      \"prerequisiteSteps\": []\n" +
                            "    },\n" +
                            "    {\n" +
                            "      id: \"recommend_step_2\",\n" +
                            "      ownerAgentId: \"compass\",\n" +
                            "      serviceName: \"Workflow Matcher\",\n" +
                            "      tools: [\"Workflows Library Search\"],\n" +
                            "      actionToTake: \"Match user intent with workflow(s) from workflow library.\",\n" +
                            "      expectedIO: {\n" +
                            "        input: {inputType: \"json\", \"intent\": \"Parsed intent\", systemPrompt: \"{Agent Compass System Prompt}\", userPrompt: \"Extract intent and workflow needs.},\n" +
                            "        output: {outputType: \"json\", \"workflow_matches\": \"Matching workflows\"}\n" +
                            "      },\n" +
                            "      prerequisiteSteps: [\"recommend_step_1\"]\n" +
                            "    },\n" +
                            "    {\n" +
                            "      id: \"recommend_step_3\",\n" +
                            "      ownerAgentId: \"compass\",\n" +
                            "      serviceName: \"Respond with Recommendation\",\n" +
                            "      tools: [\"Webhook Response\"],\n" +
                            "      actionToTake: \"Return workflow recommendations as markdown list.\",\n" +
                            "      expectedIO: {\n" +
                            "        input: {inputType: \"json\", workflow_matches: \"Matching workflows\"},\n" +
                            "        output: {outputType: \"json\", response: \"Formatted markdown recommendation\"}\n" +
                            "      },\n" +
                            "      prerequisiteSteps: [\"recommend_step_2\"]\n" +
                            "    }\n" +
                            "  ]\n" +
                            "}. Each step must include an AI Agent System Prompt and a step related User prompt. They can be templated with properties from the inputs. Return the complete workflow Recommendation"
                    }

                },
                prerequisiteSteps: ["recommend_step_2"]
            }
        ]
    }, {
        id: "agile_pair_tdd_001",
        name: "Agile Pair Programming with TDD Workflow",
        ownerAgentId: "compass",
        description: "A workflow for implementing features using Pair Programming and Test-Driven Development practices",
        steps: [
            {
                id: "APT001-step-1",
                ownerAgentId: "reqqy",
                serviceName: "Requirements Analysis",
                tools: ["GitHub", "Requirements Parser"],
                actionToTake: "Collect and structure project requirements",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Reqqy, the requirements specialist.",
                        userPrompt: "Analyze and structure the feature specifications into clear requirements."
                    },
                    output: {
                        output: "Structured requirements in GitHub issues",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "APT001-step-2",
                ownerAgentId: "josh",
                serviceName: "Design Creation",
                tools: ["Design Tools", "Asset Manager"],
                actionToTake: "Create UI/UX designs and mockups",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Josh, the UI/UX specialist.",
                        userPrompt: "Create visual designs based on the requirements."
                    },
                    output: {
                        output: "Mockup designs and visual assets",
                        outputType: "binary"
                    }
                },
                prerequisiteSteps: ["APT001-step-1"]
            },
            {
                id: "APT001-step-3",
                ownerAgentId: "james_terrell",
                serviceName: "Test Development",
                tools: ["Testing Framework", "Code Editor"],
                actionToTake: "Write test cases following TDD principles",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are the development pair, focusing on test creation.",
                        userPrompt: "Develop test cases based on requirements before implementation."
                    },
                    output: {
                        output: "Complete test suite",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["APT001-step-1", "APT001-step-2"]
            },
            {
                id: "APT001-step-4",
                ownerAgentId: "james_terrell",
                serviceName: "Feature Implementation",
                tools: ["Code Editor", "Version Control"],
                actionToTake: "Implement features to pass tests",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, implementing features.",
                        userPrompt: "Write code to satisfy the test cases."
                    },
                    output: {
                        output: "Feature implementation code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["APT001-step-3"]
            },
            {
                id: "APT001-step-5",
                ownerAgentId: "antosh",
                serviceName: "Quality Assurance",
                tools: ["Testing Suite", "Analytics Tools"],
                actionToTake: "Run tests and analyze results",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, the testing specialist.",
                        userPrompt: "Execute test suite and analyze results."
                    },
                    output: {
                        output: "Test reports and performance insights",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["APT001-step-4"]
            },
            {
                id: "APT001-step-6",
                ownerAgentId: "man_man",
                serviceName: "Deployment",
                tools: ["DevOps Tools", "Infrastructure Manager"],
                actionToTake: "Deploy features and monitor performance",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Man-Man, the DevOps specialist.",
                        userPrompt: "Deploy approved code and monitor system performance."
                    },
                    output: {
                        output: "Deployment status and monitoring metrics",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["APT001-step-5"]
            },
            {
                id: "APT001-step-7",
                ownerAgentId: "lia",
                serviceName: "User Communication",
                tools: ["Email System", "Social Media Tools"],
                actionToTake: "Update users about new features",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Lia, the communication specialist.",
                        userPrompt: "Create and distribute user updates about new features."
                    },
                    output: {
                        output: "Communication materials and posts",
                        outputType: "text"
                    }
                },
                prerequisiteSteps: ["APT001-step-6"]
            }
        ]
    },
    {
        "id": "agile_pair_tdd_002",
        "name": "Agile Pair Programming with TDD Workflow",
        "ownerAgentId": "compass",
        "description": "A workflow for implementing features using Pair Programming and Test-Driven Development practices",
        "steps": [
            {
                "id": "APT001-step-1",
                "ownerAgentId": "nat",
                "serviceName": "Project Initialization",
                "tools": ["Firebase", "Project Manager"],
                "actionToTake": "Create a project in the projects collection with project details.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Nat, the CEO and Project Manager.",
                        "userPrompt": "Create a project document in the collection containing all project details."
                    },
                    "output": {
                        "output": "Project document with project ID",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": []
            },
            {
                "id": "APT001-step-2",
                "ownerAgentId": "reqqy",
                "serviceName": "Requirements Collection",
                "tools": ["GitHub", "Requirements Parser"],
                "actionToTake": "Collect and structure project requirements",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Reqqy, the requirements specialist.",
                        "userPrompt": "Gather and structure the requirements based on the project details from the collection."
                    },
                    "output": {
                        "output": "Structured requirements stored in a collection for reference",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-1"]
            },
            {
                "id": "APT001-step-3",
                "ownerAgentId": "brian",
                "serviceName": "Design Document Creation",
                "tools": ["Document Editor", "Design Tools"],
                "actionToTake": "Create and store a design document in the collection using project ID.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Brian, the Product Manager.",
                        "userPrompt": "Write a design document based on requirements and store it in a collection referenced by project ID."
                    },
                    "output": {
                        "output": "Design document stored in collection",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-2"]
            },
            {
                "id": "APT001-step-4",
                "ownerAgentId": "josh",
                "serviceName": "UI/UX Mockup Design",
                "tools": ["Design Tools", "Asset Manager"],
                "actionToTake": "Create visual designs and mockups based on requirements and previous mockups.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Josh, the UI/UX designer.",
                        "userPrompt": "Create mockups with inspiration from stored requirements and mockups based on project ID."
                    },
                    "output": {
                        "output": "Mockup designs as PNG file",
                        "outputType": "binary"
                    }
                },
                "prerequisiteSteps": ["APT001-step-2"]
            },
            {
                "id": "APT001-step-5",
                "ownerAgentId": "james_terrell",
                "serviceName": "Pair Programming Session 1",
                "tools": ["Code Editor", "Version Control"],
                "actionToTake": "Implement features and leave comments for code review",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are James and Terrell, the development pair.",
                        "userPrompt": "Implement features based on requirements and leave comments for code review."
                    },
                    "output": {
                        "output": "Feature implementation code with comments",
                        "outputType": "code"
                    }
                },
                "prerequisiteSteps": ["APT001-step-3", "APT001-step-4"]
            },
            {
                "id": "APT001-step-6",
                "ownerAgentId": "antosh",
                "serviceName": "Quality Assurance",
                "tools": ["Testing Suite", "Analytics Tools"],
                "actionToTake": "Run tests against the features implemented.",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are Antosh, the testing specialist.",
                        "userPrompt": "Execute test suite against the implemented features."
                    },
                    "output": {
                        "output": "Test reports and performance insights",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-5"]
            },
            {
                "id": "APT001-step-7",
                "ownerAgentId": "terrell",
                "serviceName": "Code Review",
                "tools": ["Code Review Tools", "Version Control"],
                "actionToTake": "Review code written by James.",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are Terrell, conducting code reviews.",
                        "userPrompt": "Review and provide feedback on James' implementation."
                    },
                    "output": {
                        "output": "Code review feedback and checklist updates",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-6"]
            },
            {
                "id": "APT001-step-8",
                "ownerAgentId": "james",
                "serviceName": "Code Fixes",
                "tools": ["Code Editor", "Version Control"],
                "actionToTake": "Fix issues raised during code review.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are James, fixing code based on review.",
                        "userPrompt": "Address the issues from code review and ensure all requirements are updated."
                    },
                    "output": {
                        "output": "Updated implementation and checklist",
                        "outputType": "code"
                    }
                },
                "prerequisiteSteps": ["APT001-step-7"]
            },
            {
                "id": "APT001-step-9",
                "ownerAgentId": "brian",
                "serviceName": "Final Code Review",
                "tools": ["Code Review Tools", "Version Control"],
                "actionToTake": "Conduct a final code review on the completed features.",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are Brian, conducting final reviews.",
                        "userPrompt": "Ensure all requirements and specifications are addressed in the final code."
                    },
                    "output": {
                        "output": "Final code review summary and actionable items",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-8"]
            },
            {
                "id": "APT001-step-10",
                "ownerAgentId": "nat",
                "serviceName": "Final Review",
                "tools": ["Review Tools"],
                "actionToTake": "Conduct a final review of the application based on user intent.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Nat, performing the final product review.",
                        "userPrompt": "Review the final application against initial user intent."
                    },
                    "output": {
                        "output": "Final review notes and any adjustments needed",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-9"]
            },
            {
                "id": "APT001-step-11",
                "ownerAgentId": "brian",
                "serviceName": "Standup Meetings",
                "tools": ["Logger"],
                "actionToTake": "Conduct standup meetings every 10 minutes.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Brian, responsible for standups.",
                        "userPrompt": "Log the workflow progress of each agent every 10 minutes."
                    },
                    "output": {
                        "output": "Standup logs with documented progress",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": []
            }
        ]
    },{
        "id": "agile_pair_tdd_003",
        "name": "Agile Pair Programming with TDD Workflow",
        "ownerAgentId": "compass",
        "description": "A workflow for implementing features using Pair Programming and Test-Driven Development practices",
        "steps": [
            {
                "id": "APT001-step-1",
                "ownerAgentId": "nat",
                "serviceName": "Project Initialization",
                "tools": ["Firebase", "Project Manager"],
                "actionToTake": "Create a project in the projects collection with project details.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Nat, the CEO and Project Manager.",
                        "userPrompt": "Create a project document in the collection containing all project details."
                    },
                    "output": {
                        "output": "Project document with project ID",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": []
            },
            {
                "id": "APT001-step-2",
                "ownerAgentId": "reqqy",
                "serviceName": "Requirements Collection",
                "tools": ["GitHub", "Requirements Parser"],
                "actionToTake": "Collect and structure project requirements",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Reqqy, the requirements specialist.",
                        "userPrompt": "Gather and structure the requirements based on the project details from the collection."
                    },
                    "output": {
                        "output": "Structured requirements stored in a collection for reference",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-1"]
            },
            {
                "id": "APT001-step-3",
                "ownerAgentId": "brian",
                "serviceName": "Design Document Creation",
                "tools": ["Document Editor", "Design Tools"],
                "actionToTake": "Create and store a design document in the collection using project ID.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Brian, the Product Manager.",
                        "userPrompt": "Write a design document based on requirements and store it in a collection referenced by project ID."
                    },
                    "output": {
                        "output": "Design document stored in collection",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-2"]
            },
            {
                "id": "APT001-step-4",
                "ownerAgentId": "josh",
                "serviceName": "UI/UX Mockup Design",
                "tools": ["Design Tools", "Asset Manager"],
                "actionToTake": "Create visual designs and mockups based on requirements and previous mockups.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Josh, the UI/UX designer.",
                        "userPrompt": "Create mockups with inspiration from stored requirements and mockups based on project ID."
                    },
                    "output": {
                        "output": "Mockup designs as PNG file",
                        "outputType": "binary"
                    }
                },
                "prerequisiteSteps": ["APT001-step-2"]
            },
            {
                "id": "APT001-step-5",
                "ownerAgentId": "james_terrell",
                "serviceName": "Pair Programming Session 1",
                "tools": ["Code Editor", "Version Control"],
                "actionToTake": "Implement features and leave comments for code review",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are James and Terrell, the development pair.",
                        "userPrompt": "Implement features based on requirements and leave comments for code review."
                    },
                    "output": {
                        "output": "Feature implementation code with comments",
                        "outputType": "code"
                    }
                },
                "prerequisiteSteps": ["APT001-step-3", "APT001-step-4"]
            },
            {
                "id": "APT001-step-6",
                "ownerAgentId": "antosh",
                "serviceName": "Quality Assurance",
                "tools": ["Testing Suite", "Analytics Tools"],
                "actionToTake": "Run tests against the features implemented.",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are Antosh, the testing specialist.",
                        "userPrompt": "Execute test suite against the implemented features."
                    },
                    "output": {
                        "output": "Test reports and performance insights",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-5"]
            },
            {
                "id": "APT001-step-7",
                "ownerAgentId": "terrell",
                "serviceName": "Code Review",
                "tools": ["Code Review Tools", "Version Control"],
                "actionToTake": "Review code written by James.",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are Terrell, conducting code reviews.",
                        "userPrompt": "Review and provide feedback on James' implementation."
                    },
                    "output": {
                        "output": "Code review feedback and checklist updates",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-6"]
            },
            {
                "id": "APT001-step-8",
                "ownerAgentId": "james",
                "serviceName": "Code Fixes",
                "tools": ["Code Editor", "Version Control"],
                "actionToTake": "Fix issues raised during code review.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are James, fixing code based on review.",
                        "userPrompt": "Address the issues from code review and ensure all requirements are updated."
                    },
                    "output": {
                        "output": "Updated implementation and checklist",
                        "outputType": "code"
                    }
                },
                "prerequisiteSteps": ["APT001-step-7"]
            },
            {
                "id": "APT001-step-9",
                "ownerAgentId": "brian",
                "serviceName": "Final Code Review",
                "tools": ["Code Review Tools", "Version Control"],
                "actionToTake": "Conduct a final code review on the completed features.",
                "expectedIO": {
                    "input": {
                        "inputType": "code",
                        "systemPrompt": "You are Brian, conducting final reviews.",
                        "userPrompt": "Ensure all requirements and specifications are addressed in the final code."
                    },
                    "output": {
                        "output": "Final code review summary and actionable items",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-8"]
            },
            {
                "id": "APT001-step-10",
                "ownerAgentId": "nat",
                "serviceName": "Final Review",
                "tools": ["Review Tools"],
                "actionToTake": "Conduct a final review of the application based on user intent.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Nat, performing the final product review.",
                        "userPrompt": "Review the final application against initial user intent."
                    },
                    "output": {
                        "output": "Final review notes and any adjustments needed",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": ["APT001-step-9"]
            },
            {
                "id": "APT001-step-11",
                "ownerAgentId": "brian",
                "serviceName": "Standup Meetings",
                "tools": ["Logger"],
                "actionToTake": "Conduct standup meetings every 10 minutes.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        "systemPrompt": "You are Brian, responsible for standups.",
                        "userPrompt": "Log the workflow progress of each agent every 10 minutes."
                    },
                    "output": {
                        "output": "Standup logs with documented progress",
                        "outputType": "json"
                    }
                },
                "prerequisiteSteps": []
            }
        ]
    },
    {
        id: "workflow_execution_001",
        name: "Workflow Execution by ID or Query",
        ownerAgentId: "compass",
        description: "Given a workflow ID or description, execute the workflow or route to the owner agent for execution.",
        steps: [
            {
                id: "execute_step_1",
                ownerAgentId: "compass",
                serviceName: "Identify Workflow and Owner Agent",
                tools: ["Workflow Search", "Firebase Firestore"],
                actionToTake: "Find workflow by ID or fuzzy match on description and wrap in a workflow Trigger adding the workflows expectedIO to the trigger. Then find the workflows ownerId and find that agent_profile in firestore.",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: "Workflow ID or description"
                    },
                    output: {
                        outputType: "json",
                        workflow: "Workflow details",
                        workflow_trigger: "Workflow trigger details",
                        agent_profile: "Agent profile details",
                        agent_profile_id: "Agent profile ID",
                        agent_profile_workflow_endpoint: "Agent profile workflow endpoint"
                    }
                },
                prerequisiteSteps: []
            }, {
                id: "execute_step_2",
                ownerAgentId: "compass",
                serviceName: "Launch or Route",
                tools: ["Workflow Runner", "Agent Router"],
                actionToTake: `If owned by Compass, launch; else, send to the agent.`,
                prerequisiteSteps: ["execute_step_1"],
                expectedIO: {
                    input: {
                        inputType: "json",
                        workflow: "Workflow details",
                        workflow_owner_id: "Workflow details ownerId",
                        workflowEndpoint: "Workflow details workflowEndpoint",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: `If the workflow belongs to Compass then take the action immediately if not route it to the correct agent by sending the {workflow_trigger} as the body in an http POST request to the agents endpoint {agent_profile_workflow_endpoint + ${n8nWorkflowId}}`,
                        output: {outputType: "json", result: "Execution success/fail"}
                    },
                }
            },
            {
                id: "execute_step_3",
                ownerAgentId: "compass",
                serviceName: "Log Workflow Execution",
                tools: ["Workflow Runner", "Agent Router"],
                actionToTake: "Add the response from the workflow execution to the workflow trigger workflowStatus with the workflow step id as the key and save a log of the workflow trigger.",
                expectedIO: {
                    input: {
                        inputType: "json",
                        workflow: "Workflow details",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: "Create a workflow log from the workflow trigger."
                    },
                    output: {outputType: "json", result: "Execution success/fail"}
                },
                prerequisiteSteps: ["execute_step_2"]
            },
            {
                id: "execute_step_4",
                ownerAgentId: "compass",
                serviceName: "Respond to User",
                tools: ["Webhook Response"],
                actionToTake: "Confirm status of workflow trigger execution to user.",
                expectedIO: {
                    input: {
                        inputType: "json",
                        result: "Execution result info",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        userPrompt: "Return the execution status and log to the user."
                    },
                    output: {outputType: "json", response: "User-facing status message"}
                },
                prerequisiteSteps: ["execute_step_3"]
            }
        ]
    }, {
        "id": "help_desk_001",
        "name": "Help Desk Workflow",
        "ownerAgentId": "compass",
        "description": "Answer questions about Handsomest Nerd, its agents, and system capabilities; troubleshoot user technical issues.",
        "steps": [
            {
                "id": "help_desk_step_1",
                "ownerAgentId": "compass",
                "serviceName": "Parse Request",
                "tools": ["Webhook Parser"],
                "actionToTake": "Parse incoming message for help desk request category and keywords.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        "userPrompt": "Parse incoming help desk request."
                    },
                    "output": {"outputType": "json", "category": "question_category"}
                },
                "prerequisiteSteps": []
            },
            {
                "id": "help_desk_step_2",
                "ownerAgentId": "compass",
                "serviceName": "Knowledge Lookup",
                "tools": ["Internal Docs Search", "OpenAI API"],
                "actionToTake": "Search docs and/or ask OpenAI for concise, relevant answers.",
                "expectedIO": {
                    "input": {
                        "inputType": "json",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                        "userPrompt": "Find or generate help desk response."
                    },
                    "output": {"outputType": "text", "response": "AI/Docs-generated answer"}
                },
                "prerequisiteSteps": ["help_desk_step_1"]
            },
            {
                "id": "help_desk_step_3",
                "ownerAgentId": "compass",
                "serviceName": "Respond",
                "tools": ["Webhook Response"],
                "actionToTake": "Format and return response to caller in markdown.",
                "expectedIO": {
                    "input": {
                        "inputType": "text",
                        "userPrompt": "Format answer.",
                        systemPrompt: COMPASS_SYSTEM_PROMPT,
                    },
                    "output": {"outputType": "json", "markdown": "Formatted markdown response"}
                },
                "prerequisiteSteps": ["help_desk_step_2"]
            }
        ]
    }
]