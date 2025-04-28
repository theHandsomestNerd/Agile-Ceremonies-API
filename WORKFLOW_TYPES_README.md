# Workflow Type Schemas

```typescript
// Sample input/output for a workflow step
const sampleWorkflowIO: WorkflowIOType = {
    inputData: {
        systemPrompt: "Generate a report",
        userPrompt: "Please generate a weekly report for the sales team.",
        requiredInputs: ["systemPrompt", "userPrompt"],
    },
    outputData: {
        output: null, // This will be populated after the step execution
        outputType: "json", // The output is expected to be in JSON format
    },
};

// Definition of a sample workflow step
const sampleStep: WorkflowStepType = {
    id: "step1",
    ownerAgentId: "agent007", // Represents the responsible agent's ID
    serviceName: "ReportGeneratorService",
    tools: ["reportGeneratorTool", "dataFormatter"],
    actionToTake: "generateWeeklyReport",
    expectedIO: sampleWorkflowIO,
    prerequisiteSteps: [], // No prerequisite steps for the initial step
};

// Definition of a sample workflow
const sampleWorkflow: WorkflowType = {
    id: "workflow123",
    name: "Weekly Sales Report Workflow",
    description: "A workflow to generate weekly sales reports automatically",
    steps: [sampleStep],
    ownerAgentId: "agent007", // This could be an admin agent responsible for coordinating the workflow
    n8n: {
        id: "n8nWorkflow123",
        workflowTriggerEndpoint: "/triggerReportGeneration",
    },
    lastRun: undefined,
    isDisabled: false,
    createdAt: "2023-10-01T10:00:00Z",
    updatedAt: "2023-10-01T10:00:00Z",
};

// Sample workflow trigger definition, tracking the execution state
const sampleWorkflowTrigger: WorkflowTriggerType = {
    workflowId: sampleWorkflow.id,
    created: "2023-10-01T10:30:00Z",
    lastTriggeredAt: undefined,
    triggeredBy: "user123",
    active: true,
    workflowStatus: {
        step1: {
            status: "waiting",
            io: sampleWorkflowIO,
        },
    },
};

// Sample log for workflow execution
const sampleWorkflowLog: WorkflowLogType = {
    message: "Step 1 started execution.",
    timestamp: "2023-10-01T10:31:00Z",
    status: "execute",
    io: sampleWorkflowIO,
    error: null,
};

// Updating the triggered workflow log on success
sampleWorkflowLog.status = "success";
sampleWorkflowLog.message = "Step 1 completed successfully.";
sampleWorkflowLog.io.outputData.output = {report: "Weekly Sales Data"}; // Assume this is the generated report

// Updating the trigger's workflow status to success after execution
sampleWorkflowTrigger.workflowStatus["step1"].status = "success";
sampleWorkflowTrigger.workflowStatus["step1"].io!.outputData.output = {
    report: "Weekly Sales Data",
};
```

### In this example:

* WorkflowIOType is used to detail the inputs and expected outputs for a step within a workflow.
* WorkflowStepType specifies how the step is set up and executed, linking it to appropriate tools and actions.
* WorkflowType represents the complete series of steps forming a workflow, storing necessary metadata.
* WorkflowTriggerType is used to track the execution status and progression of the workflow.
* WorkflowLogType stores logs of the workflow's execution phases, helping trace successful and failure states.
  import {WorkflowType} from "../Workflow.types";
*

### Workflow Recommendation Example
```typescript
export const CompassWorkflows: WorkflowType[] = [
    {
        id: "P3Eqc3M8Je9Halh4",
        workflowServiceName: "help_desk_001",
        n8nId: "#P3Eqc3M8Je9Halh4",
        ownerAgentId: "compass",
        description: "This is the workflow that will simply return an Open AI response to a prompt",
        steps: [
            {
                agent: "compass",
                serviceName: "Parse OpenAI Request",
                tools: ["Webhook Parser"],
                actionToTake: "Parse OpenAI Request from Webhook message",
                io: {
                    inputData: {
                        inputType: "json",
                        systemPrompt: "You are Compass, the help desk assistant at the Handsomest.",
                        userPrompt: "Parse the incoming webhook request to extract the user's query."
                    },
                    outputData: {
                        output: "Response to the User",
                        outputType: "text"
                    }
                }
            },
            {
                agent: "compass",
                serviceName: "OpenAI Integration",
                tools: ["OpenAI API"],
                actionToTake: "Call Open AI with the request",
                io: {
                    inputData: {
                        inputType: "text",
                        systemPrompt: "You are Compass, the help desk assistant.",
                        userPrompt: "Process this query using OpenAI to generate a helpful response."
                    },
                    outputData: {
                        output: "AI-generated response to the user query",
                        outputType: "text"
                    }
                }
            },
            {
                agent: "compass",
                serviceName: "Response Handler",
                tools: ["Webhook Response"],
                actionToTake: "Return Response to Webhook",
                io: {
                    inputData: {
                        inputType: "text",
                        systemPrompt: "You are Compass, the help desk assistant.",
                        userPrompt: "Format and return this response to the original webhook caller."
                    },
                    outputData: {
                        output: "Formatted response sent back to webhook caller",
                        outputType: "json"
                    }
                }
            }
        ],
        workflowTriggerEndpoint: "http://localhost:5678/webhook-test/14da411d-b978-454e-95e4-d4deec0cccdf"
    },
]
```
