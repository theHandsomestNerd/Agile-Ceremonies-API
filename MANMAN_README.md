# Agent Man-Man – Multi-Agent Network Help Desk Profile

Help Desk Response for Firestore Collection Management
Hi there! 👋 I'm Compass, your Multi-Agent Routing & Workflow Specialist. You're asking about managing Firestore collections (Create, Modify, Delete)—let's match you with the best agent and show you how this works at The Handsomest Nerd Inc.

## Agent Skills & Role

| Agent | Role | Key Skills | Description |
|-------|------|------------|-------------|
| Man-Man | Maintenance Agent | DevOps, Firebase/Firestore/Cloud Storage Management, Direct Database Operations, App/Infra Support | Man-Man is your go-to specialist for DevOps and backend data operations, including management of Firestore collections and documents. |

## Company Info

The Handsomest Nerd Inc. runs a Multi-Agent Network with specialized AI agents for every Agile/DevOps company need.

## Agent Tool Availability

| Function | Tools Man-Man Can Use |
|----------|------------------------|
| Database Management | Firestore Admin APIs (Create, update, and delete collections/documents) |
| Infrastructure | App/infrastructure health checks and rollback support |
| Backend | Backend access to Cloud Functions, security rules, and more |

## Recommended Workflow

### WorkflowType

```json
{
  "output": {
    "agent_skills": [
      {
        "Agent": "Man-Man",
        "Role": "Maintenance Agent",
        "Key Skills": [
          "DevOps & App Maintenance",
          "Firestore DB Management (CRUD operations)",
          "Cloud Infrastructure Operations"
        ],
        "Description": "Man-Man manages backend Firebase services, including Firestore collection and document operations. Ideal for application data design, admin support, and infrastructure changes."
      }
    ],
    "company_info": "The Handsomest Nerd Inc. runs a Multi-Agent Network with specialized AI agents for every Agile/DevOps company need.",
    "agent_tool_availability": {
      "Man-Man": [
        "Manage Firestore collections (create, modify, delete)",
        "Access to Cloud Functions and backend admin APIs",
        "Comprehensive DevOps support"
      ]
    },
    "workflow_recommendation": {
      "work_flow_id": "firestore_collection_management_001",
      "workflow_name": "Firestore Collection Management",
      "required_tools": [
        "Firestore Admin SDK",
        "Infrastructure Change Logging"
      ],
      "description": "This workflow enables creation, modification, or deletion of Firestore collections/documents according to user input. Man-Man ensures secure, reliable handling, including logging and backup if required.",
      "steps": [
        {
          "agentName": "Man-Man",
          "serviceName": "Firestore Collection Management",
          "actionToTake": "Execute requested operation: Create, Modify, or Delete Firestore collection/document as specified.",
          "inputs": {
            "inputData": {
              "other_data": {
                "operation": "create | modify | delete", // <== specify desired operation
                "collection_path": "<collection_or_document_path>", // EG: "users", "chatrooms/messages"
                "payload": { "data": "for_create_or_modify_only" } // Optional: only for create/modify
              },
              "systemPrompt": "You are the DevOps/Maintenance Agent with secure backend access to Firebase Firestore and related infrastructure.",
              "userPrompt": "Perform the specified Firestore operation (create, modify, delete) on the given collection or document path. Validate and log the change."
            }
          }
        }
      ]
    },
    "help_desk_message": "**How this fits your workflow:**\n- Man-Man is the one-stop agent for all Firestore and backend cloud operations.\n- Simply specify the operation (create, modify, delete), the Firestore collection/document path, and (if applicable) the data payload to apply.\n- Man-Man will ensure changes are performed securely, logged, and compliant with best DevOps practices.\n\nWould you like an example input format, or to connect directly to Man-Man for this job?\n\nNeed a rollback or backup option? Just mention it—I can expand the workflow!"
  }
}
```

### Step-by-Step Workflow Walkthrough

1. User provides the requested Firestore operation (Create, Modify, or Delete), the collection (and optionally document) path, and—for create/modify—an optional data payload.
2. Compass confirms request and prepares the job for Man-Man, the Multi-Agent DevOps & Firestore specialist.
3. Man-Man executes the Firestore operation, ensuring data integrity, access control, and logs/rollbacks if required.
4. Results are communicated back, confirming success or surfacing any errors for further action.

## How this fits into your workflow

- One interaction: You define the operation, path, and data.
- Zero hassle: Man-Man ensures compliance, stability, and logs everything for your audit trail.
- Growth-ready: Expand to bulk operations, backup, restoration, or analytics—all through the same agent.

Would you like to get started, see example input, or explore advanced workflows (like batch updates or transaction safety)?
