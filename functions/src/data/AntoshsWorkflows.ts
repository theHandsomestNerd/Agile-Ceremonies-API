import {WorkflowType} from "../Workflow.types";

export const AntoshsWorkflows:WorkflowType[] = [
    {
        id: "quality_assurance_001",
        name: "Quality Assurance Testing Workflow",
        ownerAgentId: "antosh",
        description: "Comprehensive QA workflow for testing React single-file application with Firebase backend",
        steps: [
            {
                id: "QA001-step-1",
                ownerAgentId: "antosh",
                serviceName: "Test Environment Verification",
                tools: ["Firebase Emulator", "Jest", "React Testing Library"],
                actionToTake: "Verify test environment setup and configuration",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, verifying the test environment.",
                        userPrompt: "Validate all testing tools and environments are properly configured."
                    },
                    output: {
                        output: "Environment verification report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "QA001-step-2",
                ownerAgentId: "antosh",
                serviceName: "Unit Test Execution",
                tools: ["Jest", "React Testing Library"],
                actionToTake: "Execute and analyze unit tests",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, running unit tests.",
                        userPrompt: "Run all unit tests and analyze results for both frontend and backend."
                    },
                    output: {
                        output: "Unit test results and analysis",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-1"]
            },
            {
                id: "QA001-step-3",
                ownerAgentId: "antosh",
                serviceName: "Integration Testing",
                tools: ["Supertest", "Firebase Test SDK"],
                actionToTake: "Execute integration tests",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, running integration tests.",
                        userPrompt: "Execute all integration tests between React and Firebase components."
                    },
                    output: {
                        output: "Integration test results",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-2"]
            },
            {
                id: "QA001-step-4",
                ownerAgentId: "antosh",
                serviceName: "Performance Testing",
                tools: ["Lighthouse", "React Profiler", "Chrome DevTools"],
                actionToTake: "Conduct performance analysis",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, analyzing performance.",
                        userPrompt: "Measure and analyze application performance metrics."
                    },
                    output: {
                        output: "Performance analysis report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-3"]
            },
            {
                id: "QA001-step-5",
                ownerAgentId: "antosh",
                serviceName: "Security Testing",
                tools: ["OWASP ZAP", "Firebase Security Rules Tester"],
                actionToTake: "Perform security assessment",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, conducting security testing.",
                        userPrompt: "Evaluate application security and Firebase rules."
                    },
                    output: {
                        output: "Security assessment report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-3"]
            },
            {
                id: "QA001-step-6",
                ownerAgentId: "antosh",
                serviceName: "Cross-browser Testing",
                tools: ["BrowserStack", "Selenium"],
                actionToTake: "Test across different browsers",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, running cross-browser tests.",
                        userPrompt: "Verify application functionality across major browsers."
                    },
                    output: {
                        output: "Cross-browser compatibility report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-2"]
            },
            {
                id: "QA001-step-7",
                ownerAgentId: "antosh",
                serviceName: "Error Handling Verification",
                tools: ["Error Monitoring Tools", "Firebase Debug Tools"],
                actionToTake: "Test error handling mechanisms",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, testing error handling.",
                        userPrompt: "Verify all error handling mechanisms and recovery procedures."
                    },
                    output: {
                        output: "Error handling test results",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-2", "QA001-step-3"]
            },
            {
                id: "QA001-step-8",
                ownerAgentId: "antosh",
                serviceName: "Code Coverage Analysis",
                tools: ["Jest Coverage", "Istanbul"],
                actionToTake: "Analyze code coverage metrics",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: "You are Antosh, analyzing code coverage.",
                        userPrompt: "Generate and analyze code coverage reports."
                    },
                    output: {
                        output: "Code coverage analysis report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-2", "QA001-step-3"]
            },
            {
                id: "QA001-step-9",
                ownerAgentId: "antosh",
                serviceName: "QA Documentation",
                tools: ["Markdown Editor", "Test Management System"],
                actionToTake: "Generate QA documentation",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Antosh, creating QA documentation.",
                        userPrompt: "Document all test results, issues, and recommendations."
                    },
                    output: {
                        output: "Comprehensive QA report",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["QA001-step-4", "QA001-step-5", "QA001-step-6", "QA001-step-7", "QA001-step-8"]
            },
            {
                id: "QA001-step-10",
                ownerAgentId: "antosh",
                serviceName: "Issue Tracking and Reporting",
                tools: ["GitHub Issues", "JIRA"],
                actionToTake: "Track and report identified issues",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: "You are Antosh, managing issue tracking.",
                        userPrompt: "Create and prioritize issues for identified problems."
                    },
                    output: {
                        output: "Issue tracking report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["QA001-step-9"]
            }
        ]
    }
]