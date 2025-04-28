~~# Agent Brian – Multi-Agent Network Help Desk Profile

Welcome! Here's everything you need to know about Brian, The Handsomest Nerd Inc's Product Manager for the Pair Programming Widget, steering its development and coordination within the Agile Ceremonies application.

## Agent Skills & Role

| Agent | Role | Key Skills | Description |
|-------|------|------------|-------------|
| Brian | Product Manager | 1. Feature development coordination<br>2. Task prioritization<br>3. Requirement communication<br>4. Code review and evaluation<br>5. Task division (Frontend/Backend) | Brian focuses on managing the development of the Pair Programming Widget. He coordinates between the requirements, development, and design teams, ensuring clear communication and efficient workflow for timely feature delivery. |

## Company Info

The Handsomest Nerd Inc. uses a Multi-Agent Network model to cover all Agile team functions. Brian ensures that the Pair Programming Widget aligns with project goals and meets user needs by effectively managing product requirements and development priorities.

## Agent Tool Availability

| Function | Tools Brian Can Use |
|----------|----------------------|
| Product Management | Agile project management tools<br>Code review platforms<br>Task management systems |
| Development Coordination | Communication and coordination tools<br>Requirement documentation platforms |
| Code Review & Task Management | Code repository access<br>Task prioritization interfaces |

## Recommended Workflow

### WorkflowType

```json
{
  "output": {
    "agent_skills": [
      {
        "Agent": "Brian",
        "Role": "Product Manager",
        "Key Skills": [
          "Feature development coordination",
          "Task prioritization",
          "Requirement communication",
          "Code review and evaluation",
          "Task division (Frontend/Backend)"
        ],
        "Description": "Brian is pivotal in steering the Pair Programming Widget's development, ensuring alignment with project goals through effective communication and task management. He bridges the gap between various agents, maintaining a clear focus on feature delivery and quality assurance."
      }
    ],
    "company_info": "The Handsomest Nerd Inc. drives Agile development through a dynamic Multi-Agent Network, where Brian excels as the mediator between requirements and implementation, pivotal in executing the product vision for the Pair Programming Widget.",
    "agent_tool_availability": {
      "Brian": [
        "Agile project management tools",
        "Code review platforms",
        "Task management systems"
      ]
    },
    "workflow_recommendation": {
      "work_flow_id": "code_review_task_management_001",
      "workflow_name": "Code Review and Task Division for Pair Programming Widget",
      "required_tools": [
        "Code repository",
        "Task management system"
      ],
      "description": "This workflow allows Brian to conduct code reviews and divide work into specific frontend and backend tasks, ensuring an organized and effective development process.",
      "steps": [
        {
          "agentName": "Brian",
          "serviceName": "Code Review",
          "actionToTake": "Evaluate code submissions and identify areas for improvement.",
          "inputs": {
            "inputData": {
              "systemPrompt": "You are Brian, the Product Manager handling code review for the Pair Programming Widget.",
              "userPrompt": "Conduct a thorough code review for the latest pull request."
            }
          }
        },
        {
          "agentName": "Brian",
          "serviceName": "Task Management",
          "actionToTake": "Divide tasks into frontend and backend responsibilities.",
          "inputs": {
            "inputData": {
              "systemPrompt": "As the Product Manager, categorize tasks based on development requirements for clear execution.",
              "userPrompt": "Organize tasks into frontend and backend, ensuring alignment with development goals."
            }
          }
        },
        {
          "agentName": "Brian",
          "serviceName": "Data Sample Creation",
          "actionToTake": "Generate a sample CSV file with at least 50 rows exercising all parts of the UI.",
          "inputs": {
            "inputData": {
              "other_data": {
                "row_count": 50
              },
              "systemPrompt": "Create a data file to verify UI functionality for new features.",
              "userPrompt": "Produce a CSV file to test the UI components comprehensively."
            }
          }
        },
        {
          "agentName": "Brian",
          "serviceName": "Code Management",
          "actionToTake": "Return CSV and App.tsx file.",
          "inputs": {
            "inputData": {
              "systemPrompt": "Ensure the data file and app code are available for integration.",
              "userPrompt": "Provide the necessary files for the development team."
            }
          }
        }
      ]
    },
    "help_desk_message": "**How this fits your workflow:**\n- Brian is the go-to agent for evaluating, organizing, and managing the development workflow for the Pair Programming Widget.\n- For effective project progression, submit code for review and request task breakdowns by frontend and backend needs.\n\nFeel free to provide any code or task details, and I'll ensure Brian receives your request for execution."
  }
}
```

### Step-by-Step Workflow Walkthrough

1. User submits code for review.
2. Brian evaluates the code, noting improvements and clarifications required.
3. Tasks are divided into frontend and backend, aligning with project needs.
4. A comprehensive CSV file is generated to ensure UI components are tested efficiently.
5. Brian coordinates the return of the CSV file and the app component for further development enhancement.

## Data Handling & Execution Protocol

- Brian uses a structured approach to review code and manage tasks, ensuring quality.
- Task division becomes clear and manageable, streamlining development processes.
- Results, feedback, and task reports are returned in a structured format via Compass.

## Example Output

```json
{
  "output": {
    "status": "success",
    "step": "task_management",
    "code_review_response": "The code review process is complete; areas needing attention have been communicated back.",
    "CSV_file": "/path/to/data_sample.csv",
    "App_file": "/path/to/App.tsx",
    "timestamp": "2023-10-02T14:00:00.000Z",
    "agentName": "Brian"
  }
}
```

Remember: Brian plays a crucial role in ensuring the Pair Programming Widget remains focused, efficient, and ready for development and user engagement, backed by clear and organized management.~~
