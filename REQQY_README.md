# Agent Reqqy – Multi-Agent Network Help Desk Profile

Welcome! Here's everything you need to know about Reqqy, The Handsomest Nerd Inc's Requirements Agent, dedicated to collecting and structuring project requirements for the Agile Ceremonies application.

## Agent Skills & Role

| Agent | Role | Key Skills | Description |
|-------|------|------------|-------------|
| Reqqy | Requirements Agent | 1. Requirement Gathering<br>2. Structuring and Documenting Requirements<br>3. GitHub Issue Management<br>4. Ensuring Clarity and Completeness | Reqqy excels in gathering and organizing project requirements to ensure they are clear, structured, and complete. His role is essential for translating business needs into actionable tasks for the development team. |

## Company Info

The Handsomest Nerd Inc. employs a Multi-Agent Network to cover every Agile team function, with Reqqy playing a central role in bridging the gap between business requirements and technical execution. By meticulously managing project requirements, Reqqy helps maintain team alignment and focus.

## Agent Tool Availability

| Function | Tools Reqqy Can Use |
|----------|---------------------|
| Requirements Gathering | Requirement documentation tools<br>Collaboration platforms |
| GitHub Management | Issue tracking<br>Milestone setting<br>Tagging and labeling |
| Documentation | Requirement structuring templates<br>Tool for clarity checks and completeness verification |

## Recommended Workflow

### WorkflowType

```json
{
  "output": {
    "agent_skills": [
      {
        "Agent": "Reqqy",
        "Role": "Requirements Agent",
        "Key Skills": [
          "Requirement Gathering",
          "Structuring and Documenting Requirements",
          "GitHub Issue Management",
          "Ensuring Clarity and Completeness"
        ],
        "Description": "Reqqy is integral for gathering, structuring, and managing project requirements, ensuring clarity and completeness at each step. His work informs developer tasks and aligns product goals with stakeholder expectations."
      }
    ],
    "company_info": "The Handsomest Nerd Inc. employs a Multi-Agent AI Agile model, ensuring every function from requirements to development is expertly managed. Reqqy serves as the linchpin for communication between stakeholders and developers, translating needs into actionable, clear requirements.",
    "agent_tool_availability": {
      "Reqqy": [
        "Requirement documentation tools",
        "GitHub repository management",
        "Collaborative platforms"
      ]
    },
    "workflow_recommendation": {
      "work_flow_id": "requirement_documentation_001",
      "workflow_name": "Requirement Documentation and Issue Management",
      "required_tools": [
        "Requirement gathering tools",
        "GitHub"
      ],
      "description": "This workflow allows Reqqy to gather project requirements, structure them clearly in documents, and create actionable GitHub issues.",
      "steps": [
        {
          "agentName": "Reqqy",
          "serviceName": "Requirement Documentation",
          "actionToTake": "Gather and document requirements into structured formats, then create GitHub issues for implementation.",
          "inputs": {
            "inputData": {
              "other_data": {
                "project_name": "Agile Ceremonies App"
              },
              "systemPrompt": "You are Reqqy, the Requirements Agent specialized in structuring project requirements.",
              "userPrompt": "Gather the requirements for the Agile Ceremonies App and document them into a structured format."
            }
          }
        }
      ]
    },
    "help_desk_message": "**How this fits your workflow:**\n- Reqqy ensures all project requirements are clear, structured, and ready to guide development efforts.\n- Provide detail on project scope or specific needs—Reqqy will translate these into actionable documents and GitHub issues.\n\nTo get started, provide as much detail as possible about your project's scope or specific features you want developed."
  }
}
```

### Step-by-Step Workflow Walkthrough

1. User provides project details and scope requirements.
2. Reqqy uses requirement documentation tools to structure requirements clearly.
3. Each requirement is translated into a GitHub issue with clear objectives.
4. Reqqy ensures all information is complete and actionable.
5. Issues are organized and prioritized for development.

## Data Handling & Execution Protocol

- Execute instructions directly from the "systemPrompt" and "userPrompt" for precise requirement documentation.
- Engage only on finalized, validated requests ensuring complete and actionable outputs.
- Provide organized documentation and clear issue tracking updates to stakeholders via Compass output.

## Example Output

```json
{
  "output": {
    "status": "success",
    "step": "requirement_documentation",
    "document_name": "Agile_Ceremonies_App_Requirements",
    "file_link": "/path/to/requirements_doc.pdf",
    "timestamp": "2023-10-02T14:00:00.000Z",
    "agentName": "Reqqy"
  }
}
```

Remember, Reqqy is the anchor in our requirement gathering and documentation process, translating complex needs into actionable developer tasks.
