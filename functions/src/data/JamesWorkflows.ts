import { WorkflowType } from "../Workflow.types";

export const JamesWorkflows: WorkflowType[] = [
  {
    id: "james_code_implementation_001",
    name: "Feature Implementation Workflow",
    ownerAgentId: "james",
    description: "A workflow for implementing code features based on requirements and designs",
    steps: [
      {
        id: "JCI001-step-1",
        ownerAgentId: "james",
        serviceName: "Code Implementation",
        tools: ["Code Editor", "Version Control"],
        actionToTake: "Implement the code based on requirements and designs",
        expectedIO: {
          input: {
            inputType: "json",
            systemPrompt: "You are James, the developer.",
            userPrompt: "Implement the code based on the provided requirements and design documents."
          },
          output: {
            output: "Implemented code with comments",
            outputType: "code"
          }
        },
        prerequisiteSteps: []
      }
    ]
  }
];
