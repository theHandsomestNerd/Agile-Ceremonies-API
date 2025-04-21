/**
 * Represents a workflow
 */
export interface WorkflowType {
    id: string;
    name: string;
    n8nId: string;
    description: string;
    steps: any[];
    createdAt: string;
    updatedAt: string;
    status: string;
    lastRun?: string;
    ownerId: string;
    workflowTriggerEndpoint?: string;
}

/**
 * Represents workflow trigger data
 */
export interface WorkflowTriggerType {
    workflowId: string;
    type: string;
    interval?: number;
    lastTriggeredAt: string;
    triggeredBy: string;
    active: boolean;
    inputData?: any;
}

/**
 * Represents a workflow execution log
 */
export interface WorkflowLogType {
    message: string;
    timestamp: string;
    status: 'success' | 'error' | string;
    inputData: any;
    outputData: any;
    error: any | null;
}
