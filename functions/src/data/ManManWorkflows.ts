import {WorkflowType} from "../Workflow.types";
import {promptsLibrary} from "./PromptsLibrary";

const GOOGLE_CLOUD_STORAGE_API_BUCKET = "https://storage.googleapis.com/upload/storage/v1/b/YOUR_BUCKET_NAME/o?uploadType=media&name=";

const MANMAN_SYSTEM_PROMPT = promptsLibrary.find(prompt => prompt?.id === 'man-man')?.prompt_text

export const ManManWorkflows: WorkflowType[] = [
    {
        id: "audio_transcription_cloud_001",
        name: "Audio File Transcription (Cloud Storage)",
        ownerAgentId: "man-man",
        description: "This workflow enables transcription of audio files stored in Google Cloud Storage, handled by Man-Man.",
        steps: [
            {
                id:"audio_transcription_cloud_001-step-1",
                prerequisiteSteps:[],
                ownerAgentId: "man-man",
                serviceName: "Audio File Transcription",
                tools: ["Google Cloud Storage", "Transcription Service"],
                actionToTake: "Transcribe audio file from the provided Cloud Storage location.",
                expectedIO: {
                    input: {
                        systemPrompt: MANMAN_SYSTEM_PROMPT+ " You are AI Agent Man-Man with access to Cloud Storage and transcription services.",
                        userPrompt: "Transcribe the audio file located at the specified Cloud Storage path. This is your input from the user: ",
                        inputType: "file",
                        filename: "",
                        requiredInputs:["filename"],
                    },
                    output: {
                        output: "Transcription + Transcript Summarization of the audio file.",
                        outputType: "text"
                    }
                }
            }
        ]
    },
    {
        id: "cloud_storage_retrieval_001",
        name: "Cloud Storage File Retrieval",
        ownerAgentId: "man-man",
        description: "This workflow enables retrieving files from Google Cloud Storage, handled by Man-Man.",
        steps: [
            {
                id: "cloud_storage_retrieval_001-step-1",
                prerequisiteSteps: [],
                ownerAgentId: "man-man",
                serviceName: "Cloud Storage Retrieval",
                tools: ["Google Cloud Storage", "File Management"],
                actionToTake: "Retrieve a file from the specified Cloud Storage location and prepare it for download or processing.",
                expectedIO: {
                    input: {
                        inputType: "file",
                        filename: "**required**",
                        bucketName: `${GOOGLE_CLOUD_STORAGE_API_BUCKET}`,
                        systemPrompt: MANMAN_SYSTEM_PROMPT + "You are AI Agent Man-Man with access to Cloud Storage services.",
                        userPrompt: "Retrieve the file from the specified Cloud Storage path and prepare it for access."
                    },
                    output: {
                        output: "File retrieval information including download URL and file content.",
                        outputType: "binary"
                    }
                }
            }
        ]
    },
    {
        id: "cloud_storage_upload_001",
        name: "Cloud Storage File Upload",
        ownerAgentId: "man-man",
        description: "This workflow enables storing files in Google Cloud Storage, handled by Man-Man.",
        steps: [
            {
                id: "cloud_storage_upload_001-step-1",
                prerequisiteSteps: [],
                ownerAgentId: "man-man",
                serviceName: "Cloud Storage Upload",
                tools: ["Google Cloud Storage", "File Management"],
                actionToTake: "Upload a file to the specified Google Cloud Storage location.",
                expectedIO: {
                    input: {
                        inputType: "file",
                        filename: "",
                        ownerAgentId: "",
                        bucketName: `${GOOGLE_CLOUD_STORAGE_API_BUCKET}`,
                        requiredInputs: ["filename", "ownerAgentId"],
                        systemPrompt: MANMAN_SYSTEM_PROMPT+"You are Man-Man the DevOps & Maintenance Agent with access to Cloud Storage services.",
                        userPrompt: "Upload the provided file to the specified Cloud Storage path with appropriate permissions."
                    },
                    output: {
                        output: "File storage information including storage path and public URL if applicable.",
                        outputType: "text"
                    }
                }
            }
        ]
    },
    {
        id: "firestore_collection_management_001",
        name: "Firestore Collection Management",
        ownerAgentId: "man-man",
        description: "This workflow enables creation, modification, or deletion of Firestore collections/documents according to user input. Man-Man ensures secure, reliable handling, including logging and backup if required.",
        steps: [
            {
                id: "firestore_collection_management_001-step-1",
                prerequisiteSteps: [],
                tools: [
                    "Firestore Admin SDK",
                    "Infrastructure Change Logging"
                ],
                ownerAgentId: "man-man",
                serviceName: "Firestore Collection Management",
                actionToTake: "Execute requested operation: Create, Modify, or Delete Firestore collection/document as specified.",
                expectedIO: {
                    input:{
                        inputType:"json",
                        operation: "create | modify | delete",
                        requiredInputs:[],
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man with secure backend access to Firebase Firestore and related infrastructure.",
                        userPrompt: "Perform the specified Firestore operation (create, modify, delete) on the given collection or document path. Validate and log the change.",
                        collection: "<collection_or_document_path>", // EG: "users", "chatrooms/messages"
                        data: "for_create_or_modify_only", // Optional: only for create/modify
                    },
                    output:{
                            output:"<operation result>",
                            outputType:"json"
                    }
                }
            }
        ]
    },
    {
        id: "deployment_workflow_001",
        name: "DevOps Deployment Workflow",
        ownerAgentId: "man_man",
        description: "Comprehensive deployment workflow for React single-file application with Firebase backend",
        steps: [
            {
                id: "DW001-step-1",
                ownerAgentId: "man_man",
                serviceName: "Pre-deployment Verification",
                tools: ["GitHub Actions", "Firebase CLI"],
                actionToTake: "Verify build artifacts and configurations",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, verifying deployment prerequisites.",
                        userPrompt: "Validate all build artifacts and configuration files."
                    },
                    output: {
                        output: "Pre-deployment verification report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: []
            },
            {
                id: "DW001-step-2",
                ownerAgentId: "man_man",
                serviceName: "Environment Configuration",
                tools: ["Firebase Console", "Environment Manager"],
                actionToTake: "Set up deployment environment variables",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: MANMAN_SYSTEM_PROMPT+ " You are AI Agent Man-Man, configuring deployment environment.",
                        userPrompt: "Configure environment variables and secrets for deployment."
                    },
                    output: {
                        output: "Environment configuration status",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-1"]
            },
            {
                id: "DW001-step-3",
                ownerAgentId: "man_man",
                serviceName: "Database Migration",
                tools: ["Firebase Admin SDK", "Migration Scripts"],
                actionToTake: "Execute database migrations",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are Man-Man, managing database migrations.",
                        userPrompt: "Run and verify database migration scripts."
                    },
                    output: {
                        output: "Migration execution report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-2"]
            },
            {
                id: "DW001-step-4",
                ownerAgentId: "man_man",
                serviceName: "Backend Deployment",
                tools: ["Firebase CLI", "Cloud Functions"],
                actionToTake: "Deploy Firebase backend functions",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, deploying backend services.",
                        userPrompt: "Deploy and verify Firebase Cloud Functions."
                    },
                    output: {
                        output: "Backend deployment status",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-3"]
            },
            {
                id: "DW001-step-5",
                ownerAgentId: "man_man",
                serviceName: "Frontend Deployment",
                tools: ["Firebase Hosting", "CDN Configuration"],
                actionToTake: "Deploy React application",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, deploying frontend application.",
                        userPrompt: "Deploy React app to Firebase Hosting and configure CDN."
                    },
                    output: {
                        output: "Frontend deployment status",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-4"]
            },
            {
                id: "DW001-step-6",
                ownerAgentId: "man_man",
                serviceName: "Security Rules Deployment",
                tools: ["Firebase Security Rules", "Rule Testing Tools"],
                actionToTake: "Deploy security rules",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, deploying security rules.",
                        userPrompt: "Deploy and verify Firebase security rules."
                    },
                    output: {
                        output: "Security rules deployment status",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-4"]
            },
            {
                id: "DW001-step-7",
                ownerAgentId: "man_man",
                serviceName: "Smoke Testing",
                tools: ["Postman", "Cypress"],
                actionToTake: "Perform post-deployment smoke tests",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, conducting smoke tests.",
                        userPrompt: "Execute smoke tests on deployed application."
                    },
                    output: {
                        output: "Smoke test results",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-5", "DW001-step-6"]
            },
            {
                id: "DW001-step-8",
                ownerAgentId: "man_man",
                serviceName: "Monitoring Setup",
                tools: ["Firebase Performance", "Google Analytics"],
                actionToTake: "Configure monitoring and alerts",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, setting up monitoring.",
                        userPrompt: "Set up performance monitoring and alert systems."
                    },
                    output: {
                        output: "Monitoring configuration status",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-7"]
            },
            {
                id: "DW001-step-9",
                ownerAgentId: "man_man",
                serviceName: "Performance Verification",
                tools: ["Lighthouse", "Firebase Performance"],
                actionToTake: "Verify production performance",
                expectedIO: {
                    input: {
                        inputType: "code",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, verifying production performance.",
                        userPrompt: "Analyze and verify production environment performance."
                    },
                    output: {
                        output: "Performance verification report",
                        outputType: "json"
                    }
                },
                prerequisiteSteps: ["DW001-step-8"]
            },
            {
                id: "DW001-step-10",
                ownerAgentId: "man_man",
                serviceName: "Deployment Documentation",
                tools: ["Markdown Editor", "Documentation System"],
                actionToTake: "Document deployment process and status",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, documenting deployment.",
                        userPrompt: "Create comprehensive deployment documentation."
                    },
                    output: {
                        output: "Deployment documentation",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["DW001-step-9"]
            },
            {
                id: "DW001-step-11",
                ownerAgentId: "man_man",
                serviceName: "Rollback Planning",
                tools: ["Version Control", "Firebase CLI"],
                actionToTake: "Prepare rollback procedures",
                expectedIO: {
                    input: {
                        inputType: "json",
                        systemPrompt: MANMAN_SYSTEM_PROMPT + " You are AI Agent Man-Man, planning rollback procedures.",
                        userPrompt: "Document rollback procedures and verification steps."
                    },
                    output: {
                        output: "Rollback procedure documentation",
                        outputType: "markdown"
                    }
                },
                prerequisiteSteps: ["DW001-step-10"]
            }
        ]
    }
]