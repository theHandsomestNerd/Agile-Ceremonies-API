/**
 * Represents a workflow Input/Output type. Defines the necessary inputs and expected outputs for a step.
 */
export interface WorkflowIOType {
    input?: {
        inputType: 'text' | 'json' | 'file' | 'code' | 'markdown' | 'binary' | 'none' , // Type of input data
        systemPrompt: string,
        userPrompt: string,
        [data:string]:any,
        requiredInputs?: string[] // Specifies which inputs are required for step execution
        intent?: string, // The intent of the input
    },
    output?: {
        output?: any, // Output data from the step
        outputType: 'text' | 'json' | 'file' | 'code' | 'markdown' | 'binary' | 'none' | 'best' // Determines how the next step interprets the output
        intent?: string, // The intent of the output
        status?: 'success' | 'error' | 'waiting' | 'execute',
        [data:string]:any,
    }
}

/**
 * Describes a workflow step with necessary details for execution.
 */
export interface WorkflowStepType {
    id: string,
    ownerAgentId: string, // Identifier for the responsible agent
    serviceName: string,  // Step's associated service
    tools: string[], // Tools utilized by this step
    actionToTake: string, // Describes the action performed
    expectedIO: WorkflowIOType,
    prerequisiteSteps: string[] // Steps that this step depends on
}

/**
 * Represents an entire workflow, including all its associated steps.
 */
export interface WorkflowType {
    id: string,
    name: string,
    description: string,
    steps: WorkflowStepType[],
    ownerAgentId: string,
    isDisabled?: boolean,    // Indicates if the workflow is currently active
    createdAt?: string,
    updatedAt?: string,
}

/**
 * Represents data for triggering a workflow, with updates during execution.
 */
export interface WorkflowTriggerType {
    n8nId: string,
    workflowEndpoint: string,
    workflowId: string,
    stepId: string,
    ownerAgentId: string,
    triggeredBy: string,
    active: boolean,
    createdAt: string,
}

/**
 * Represents logs generated during workflow execution.
 */
export interface WorkflowLogType {
    message: string,
    workflowId: string,
    triggeredBy: string,
    timestamp: string,
    workflowStatus: {
        [stepId: string]: WorkflowIOType
    },
}
