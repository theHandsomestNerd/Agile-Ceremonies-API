export interface WorkflowType {
    "id": string,
    "name": string,
    "n8nId": string,
    "description": string,
    "steps": string [],
    "status": "active" | "inactive",
    "lastRun": string,
    "created_at": string,
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
    "status": "success" | "error" |"in-progress",
    "inputData": WorkflowTriggerType,
    "outputData": { "output": any },
    "error": null,
    "timestamp": string
}