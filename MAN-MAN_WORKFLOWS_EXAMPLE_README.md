## 🤖 Example Agent: Man-Man (Maintenance Agent)

- **Role**: DevOps, infrastructure, Firebase/Firestore, Cloud Storage management
- **Unique Skill**: Can transcribe audio from files stored in Cloud Storage
- **When to Call**: App health, backend/data tasks, or audio-to-text needs

## 💡 Example Workflow

### Audio File Transcription from Cloud Storage

1. **Step 1**: Request Man-Man to transcribe a specified audio file from GCS
    - **Tools Needed**: Cloud Storage access, transcription service
    - **Output**: Clean text transcript for documentation, requirements, or analytics

# Example Workflow JSON

```json
{
  "work_flow_id": "audio_transcription_cloud_001",
  "workflow_name": "Audio File Transcription (Cloud Storage)",
  "required_tools": ["Cloud Storage Access", "Transcription Service/Tool"],
  "description": "This workflow enables transcription of audio files stored in Google Cloud Storage, handled by Man-Man.",
  "steps": [
    {
      "agentName": "Man-Man",
      "serviceName": "Audio File Transcription",
      "actionToTake": "Transcribe audio file from the provided Cloud Storage location.",
      "inputs": {
        "inputData": {
          "other_data": { "filename": "name.mp3" },
          "systemPrompt": "You are the DevOps & Maintenance Agent with access to Cloud Storage and transcription services.",
          "userPrompt": "Transcribe the audio file located at the specified Cloud Storage path."
        }
      }
    }
  ]
}
```