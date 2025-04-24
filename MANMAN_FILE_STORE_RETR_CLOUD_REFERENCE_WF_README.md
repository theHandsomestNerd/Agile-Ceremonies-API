# File Storage and Retrieval with Cloud Reference Workflow

## Overview

This workflow addresses the issue of token limitations by storing files in Google Cloud Storage. Agents can generate assets, store them, and utilize a reference link to reduce prompt size and rate limit concerns.

## Agent Skills & Role

| Agent | Role | Key Skills | Description |
|-------|------|------------|-------------|
| Man-Man | Maintenance Agent | Cloud Storage Management, React App Deployment, CRUD Operations, Firebase Integration | Man-Man manages cloud infrastructure for storing and retrieving files, deploying React applications, and handling database operations through Firebase. |

## Agent Tool Availability

| Function | Tools Man-Man Can Use |
|----------|------------------------|
| Cloud Storage | Google Cloud Storage API, Firebase Storage Integration |
| Application Deployment | React App Generation and Deployment Services |
| Database Operations | Firebase Functions, n8n HTTP Request handlers, Firestore Integration |

## Recommended Workflow

### WorkflowType

```json
{
  "output": {
    "workflow_recommendation": {
      "work_flow_id": "file_storage_retrieval_001",
      "workflow_name": "File Storage and Retrieval with Cloud Reference",
      "required_tools": [
        "Google Cloud Storage",
        "React App Deployment Service",
        "Firebase Functions via n8n HTTP Request"
      ],
      "description": "This workflow streamlines file operations by using cloud storage and references to manage complex file assets like SVGs.",
      "steps": [
        {
          "agentName": "Josh",
          "serviceName": "Create Asset",
          "actionToTake": "Generate and save SVG or relevant file asset locally.",
          "inputs": {
            "inputData": {
              "systemPrompt": "Generate a detailed SVG.",
              "userPrompt": "Create the required SVG for the project component."
            }
          },
          "output": "Local file path ready for cloud upload."
        },
        {
          "agentName": "Man-Man",
          "serviceName": "Google Cloud Storage",
          "actionToTake": "Upload file to storage bucket.",
          "inputs": {
            "inputData": {
              "other_data": {
                "filePath": "path/to/svg/file.svg",
                "bucketName": "agent_storage_bucket"
              },
              "systemPrompt": "You can manage files in Google Cloud Storage.",
              "userPrompt": "Store the SVG file in the specified bucket."
            }
          },
          "output": "URL for the uploaded file in cloud storage."
        },
        {
          "agentName": "Man-Man",
          "serviceName": "React App Deployment",
          "actionToTake": "Generate and deploy a simple React app to display file content.",
          "inputs": {
            "inputData": {
              "other_data": {
                "cloudFileUrl": "https://storage.googleapis.com/agent_storage_bucket/file.svg"
              },
              "systemPrompt": "Deploy a React app displaying the file.",
              "userPrompt": "Create an app to render the stored file."
            }
          },
          "output": "URL of the deployed React app."
        },
        {
          "agentName": "Man-Man",
          "serviceName": "CRUD Operations",
          "actionToTake": "Insert metadata to Firestore using Firebase Functions.",
          "inputs": {
            "inputData": {
              "other_data": {
                "workflowId": "file_storage_retrieval_001",
                "cloudFileUrl": "https://storage.googleapis.com/agent_storage_bucket/file.svg",
                "reactAppUrl": "https://react-app-hosting-service.com/app"
              },
              "systemPrompt": "Update Firestore with workflow data.",
              "userPrompt": "Log workflow details for future reference."
            }
          }
        }
      ]
    }
  }
}
```

### Step-by-Step Workflow Walkthrough

1. **Josh: Create Asset**
   - Josh generates the desired SVG or file asset
   - The asset is saved locally with metadata for upload
   - Output: Local file path ready for cloud storage

2. **Man-Man: Store File**
   - Man-Man uploads the file to a designated Google Cloud Storage bucket
   - Inputs: File path from Josh, bucket name for storage
   - Output: Cloud storage URL for the uploaded file

3. **Man-Man: Generate and Deploy React App**
   - Man-Man creates a React application that displays the file contents
   - The app is deployed to a specified hosting service
   - Inputs: Cloud storage URL for the file
   - Output: URL of the deployed React application

4. **Man-Man: CRUD Operations**
   - Man-Man inserts or updates workflow metadata in Firestore
   - This is done via Firebase Functions using n8n HTTP Request
   - Inputs: Workflow ID, storage URL, React app link
   - Output: Confirmation of successful database update

## How this fits into your workflow

- **Efficient Resource Management**: Minimizes token usage by storing files externally instead of embedding them in prompts.
- **Scalable Solution**: Leveraging cloud storage enhances scalability for handling large files and complex assets.
- **Reduced Processing Overhead**: Direct communication through service endpoints reduces processing overhead.
- **Integration-Ready**: The workflow can easily connect with existing systems through standard cloud APIs.
- **Future-Proof**: The approach allows for easy updates and maintenance of file assets without disrupting other workflows.

This workflow is particularly useful when dealing with larger files like SVGs, images, or other assets that would otherwise consume significant tokens in prompts or require frequent regeneration.
