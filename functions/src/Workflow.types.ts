export interface WorkflowType {
    "id": string,
    "name": string,
    "n8nId": string,
    "description": string,
    "steps": string [],
    "status": "active" | "inactive",
    "lastRun": string | null,
    "createdAt": string,
    "updatedAt": string | null,
    "ownerId": string
}

export interface WorkflowTriggerType {
    "workflowId": string,
    "type": "interval" | "one-time-only",
    "interval": number,
    "lastTriggeredAt": string,
    "active": boolean
}

export interface WorkflowLogType {
    "triggeredBy": string,
    "message": string,
    "status": "success" | "error" |"in-progress",
    "inputData": WorkflowTriggerType,
    "outputData": { "output": any },
    "error": null,
    "timestamp": string
}