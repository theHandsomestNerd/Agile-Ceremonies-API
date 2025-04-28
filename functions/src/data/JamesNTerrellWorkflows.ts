import {WorkflowType} from "../Workflow.types";

export const JamesNTerrellWorkflows:WorkflowType[] = [
    {
        id: "test_development_001",
        name: "TDD Test Suite Development Workflow",
        ownerAgentId: "james_terrell",
        description: "Workflow for creating comprehensive test suites for single-file React app and Firebase backend",
        steps: [
            {
                id: "TD001-step-1",
                ownerAgentId: "james_terrell",
                serviceName: "Test Environment Setup",
                tools: ["Jest", "ts-jest", "React Testing Library"],
                actionToTake: "Configure testing environment and dependencies",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are the development pair, setting up test infrastructure.",
                        userPrompt: "Set up Jest with TypeScript and React Testing Library configuration."
                    },
                    output: {
                        output: "Test configuration files",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "TD001-step-2",
                ownerAgentId: "james_terrell",
                serviceName: "Firebase Test Setup",
                tools: ["Firebase Emulator", "firebase-functions-test"],
                actionToTake: "Configure Firebase testing environment",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are the development pair, setting up Firebase testing.",
                        userPrompt: "Initialize Firebase emulator and test utilities."
                    },
                    output: {
                        output: "Firebase test configuration",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["TD001-step-1"]
            },
            {
                id: "TD001-step-3",
                ownerAgentId: "james_terrell",
                serviceName: "API Test Suite Development",
                tools: ["Jest", "Supertest", "TypeScript"],
                actionToTake: "Create API endpoint test cases",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are the development pair, writing API tests.",
                        userPrompt: "Develop test cases for Firebase backend endpoints."
                    },
                    output: {
                        output: "API test suite code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["TD001-step-2"]
            },
            {
                id: "TD001-step-4",
                ownerAgentId: "james_terrell",
                serviceName: "React Component Test Development",
                tools: ["React Testing Library", "Jest", "user-event"],
                actionToTake: "Write React component test cases",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are the development pair, creating React component tests.",
                        userPrompt: "Create test cases for React components with proper isolation."
                    },
                    output: {
                        output: "Component test suite code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["TD001-step-1"]
            },
            {
                id: "TD001-step-5",
                ownerAgentId: "james_terrell",
                serviceName: "Integration Test Development",
                tools: ["Jest", "React Testing Library", "Firebase Emulator"],
                actionToTake: "Create integration test cases",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, writing integration tests.",
                        userPrompt: "Develop tests for React-Firebase integration scenarios."
                    },
                    output: {
                        output: "Integration test suite code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["TD001-step-3", "TD001-step-4"]
            },
            {
                id: "TD001-step-6",
                ownerAgentId: "james_terrell",
                serviceName: "Test Data Generation",
                tools: ["Faker.js", "Test Data Generator"],
                actionToTake: "Create test data fixtures",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are the development pair, creating test data.",
                        userPrompt: "Generate comprehensive test data fixtures."
                    },
                    output: {
                        output: "Test data fixtures",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["TD001-step-3"]
            },
            {
                id: "TD001-step-7",
                ownerAgentId: "james_terrell",
                serviceName: "Test Coverage Analysis",
                tools: ["Jest Coverage", "Coverage Reporter"],
                actionToTake: "Verify test coverage metrics",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, analyzing test coverage.",
                        userPrompt: "Analyze and report test coverage for all components."
                    },
                    output: {
                        output: "Coverage report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["TD001-step-3", "TD001-step-4", "TD001-step-5"]
            },
            {
                id: "TD001-step-8",
                ownerAgentId: "james_terrell",
                serviceName: "Test Documentation",
                tools: ["JSDoc", "Markdown Editor"],
                actionToTake: "Document test suites and procedures",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, documenting tests.",
                        userPrompt: "Create comprehensive test documentation with examples."
                    },
                    output: {
                        output: "Test documentation",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["TD001-step-7"]
            }
        ]
    },
    {
        id: "feature_implementation_001",
        name: "Feature Implementation Workflow",
        ownerAgentId: "james_terrell",
        description: "Workflow for implementing features in a single-file React app with Firebase backend using TDD approach",
        steps: [
            {
                id: "FI001-step-1",
                ownerAgentId: "james_terrell",
                serviceName: "Backend API Implementation",
                tools: ["TypeScript", "Firebase Admin SDK", "ESLint"],
                actionToTake: "Implement Firebase backend functions",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are James, implementing backend features.",
                        userPrompt: "Implement Firebase functions to pass API tests."
                    },
                    output: {
                        output: "Backend implementation code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "FI001-step-2",
                ownerAgentId: "james_terrell",
                serviceName: "React Component Implementation",
                tools: ["React", "TypeScript", "ESLint"],
                actionToTake: "Implement React components",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Terrell, implementing React components.",
                        userPrompt: "Create React components to pass component tests."
                    },
                    output: {
                        output: "React component code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["FI001-step-1"]
            },
            {
                id: "FI001-step-3",
                ownerAgentId: "james_terrell",
                serviceName: "State Management Implementation",
                tools: ["React", "Context API", "TypeScript"],
                actionToTake: "Implement state management logic",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, implementing state management.",
                        userPrompt: "Create state management solution to pass integration tests."
                    },
                    output: {
                        output: "State management code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["FI001-step-2"]
            },
            {
                id: "FI001-step-4",
                ownerAgentId: "james_terrell",
                serviceName: "Firebase Integration",
                tools: ["Firebase SDK", "React", "TypeScript"],
                actionToTake: "Implement Firebase service integration",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, implementing Firebase integration.",
                        userPrompt: "Create Firebase service integrations to pass integration tests."
                    },
                    output: {
                        output: "Firebase integration code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["FI001-step-1", "FI001-step-2"]
            },
            {
                id: "FI001-step-5",
                ownerAgentId: "james_terrell",
                serviceName: "Error Handling Implementation",
                tools: ["TypeScript", "React Error Boundary"],
                actionToTake: "Implement error handling",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, implementing error handling.",
                        userPrompt: "Create error handling mechanisms to pass error scenario tests."
                    },
                    output: {
                        output: "Error handling code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["FI001-step-3", "FI001-step-4"]
            },
            {
                id: "FI001-step-6",
                ownerAgentId: "james_terrell",
                serviceName: "Performance Optimization",
                tools: ["React DevTools", "Lighthouse", "Chrome DevTools"],
                actionToTake: "Implement performance optimizations",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, optimizing performance.",
                        userPrompt: "Implement performance improvements to pass performance tests."
                    },
                    output: {
                        output: "Optimized implementation code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["FI001-step-5"]
            },
            {
                id: "FI001-step-7",
                ownerAgentId: "james_terrell",
                serviceName: "Code Review and Refactoring",
                tools: ["ESLint", "TypeScript", "Git"],
                actionToTake: "Review and refactor implementation",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, reviewing code.",
                        userPrompt: "Review and refactor code to meet quality standards."
                    },
                    output: {
                        output: "Refactored code",
                        outputType: "code"
                    }
                },
                prerequisiteSteps: ["FI001-step-6"]
            },
            {
                id: "FI001-step-8",
                ownerAgentId: "james_terrell",
                serviceName: "Documentation Update",
                tools: ["JSDoc", "Markdown", "TypeDoc"],
                actionToTake: "Update code documentation",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are the development pair, updating documentation.",
                        userPrompt: "Create and update code documentation for implemented features."
                    },
                    output: {
                        output: "Updated documentation",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["FI001-step-7"]
            }
        ]
    }
]