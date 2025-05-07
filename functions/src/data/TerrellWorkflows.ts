import { WorkflowType } from "../Workflow.types";

export const TerrellWorkflows: WorkflowType[] = [
  {
    id: "terrell_code_review_001",
    name: "Code Review Workflow",
    ownerAgentId: "terrell",
    description: "A workflow for reviewing code implementations and providing feedback",
    steps: [
      {
        id: "TCR001-step-1",
        ownerAgentId: "terrell",
        serviceName: "Code Review",
        tools: ["Code Review Tools", "Version Control"],
        actionToTake: "Review the implemented code and provide feedback",
        expectedIO: {
          input: {
            inputType: "code",
            systemPrompt: "You are Terrell, the code reviewer.",
            userPrompt: "Review the implemented code and provide detailed feedback for improvements."
          },
          output: {
            output: "Code review feedback and improvement suggestions",
            outputType: "json"
          }
        },
        prerequisiteSteps: []
      }
    ]
  }
];
