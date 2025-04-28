import {WorkflowType} from "../Workflow.types";
import {promptsLibrary} from "./PromptsLibrary";


const LIAS_SYSTEM_PROMPT = promptsLibrary.find((prompt) => prompt.id === 'lia-system-prompt')?.prompt_text;
export const LiasWorkflows: WorkflowType[] = [{
    id: "user_communication_001",
    name: "Feature Communication Workflow",
    ownerAgentId: "lia",
    description: "Comprehensive workflow for communicating new features to users and stakeholders",
    steps: [
        {
            id: "UC001-step-1",
            ownerAgentId: "lia",
            serviceName: "Feature Analysis",
            tools: ["Documentation Reader", "Feature Analyzer"],
            actionToTake: "Analyze new features and changes",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: LIAS_SYSTEM_PROMPT + " and you are analyzing new features.",
                    userPrompt: "Review and analyze deployed features for communication."
                },
                output: {
                    output: "Feature analysis report",
                    outputType: "json"
                }
            },
            prerequisiteSteps: []
        },
        {
            id: "UC001-step-2",
            ownerAgentId: "lia",
            serviceName: "Audience Segmentation",
            tools: ["User Analytics", "Segmentation Tools"],
            actionToTake: "Identify target audience segments",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Lia, segmenting the audience.",
                    userPrompt: "Define user segments for targeted communication."
                },
                output: {
                    output: "Audience segmentation plan",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["UC001-step-1"]
        },
        {
            id: "UC001-step-3",
            ownerAgentId: "lia",
            serviceName: "Content Creation",
            tools: ["Content Editor", "Visual Design Tools"],
            actionToTake: "Create communication materials",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Lia, creating communication content.",
                    userPrompt: "Develop user-friendly content for feature announcements."
                },
                output: {
                    output: "Communication materials",
                    outputType: "text"
                }
            },
            prerequisiteSteps: ["UC001-step-2"]
        },
        {
            id: "UC001-step-4",
            ownerAgentId: "lia",
            serviceName: "Email Campaign Setup",
            tools: ["Email System", "Template Builder"],
            actionToTake: "Prepare email communications",
            expectedIO: {
                input: {
                    inputType: "text",
                    systemPrompt: "You are Lia, preparing email campaigns.",
                    userPrompt: "Create and setup email announcements for new features."
                },
                output: {
                    output: "Email campaign setup",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["UC001-step-3"]
        },
        {
            id: "UC001-step-5",
            ownerAgentId: "lia",
            serviceName: "Social Media Planning",
            tools: ["Social Media Tools", "Content Scheduler"],
            actionToTake: "Plan social media announcements",
            expectedIO: {
                input: {
                    inputType: "text",
                    systemPrompt: "You are Lia, planning social media content.",
                    userPrompt: "Create social media content plan for feature announcements."
                },
                output: {
                    output: "Social media content plan",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["UC001-step-3"]
        },
        {
            id: "UC001-step-6",
            ownerAgentId: "lia",
            serviceName: "In-App Notification Setup",
            tools: ["Notification System", "UI Components"],
            actionToTake: "Configure in-app notifications",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Lia, setting up in-app notifications.",
                    userPrompt: "Configure and test in-app feature announcements."
                },
                output: {
                    output: "In-app notification configuration",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["UC001-step-3"]
        },
        {
            id: "UC001-step-7",
            ownerAgentId: "lia",
            serviceName: "Documentation Update",
            tools: ["Documentation System", "Knowledge Base"],
            actionToTake: "Update user documentation",
            expectedIO: {
                input: {
                    inputType: "text",
                    systemPrompt: "You are Lia, updating documentation.",
                    userPrompt: "Update user guides and documentation with new features."
                },
                output: {
                    output: "Updated documentation",
                    outputType: "markdown"
                }
            },
            prerequisiteSteps: ["UC001-step-3"]
        },
        {
            id: "UC001-step-8",
            ownerAgentId: "lia",
            serviceName: "Support Team Brief",
            tools: ["Training System", "Communication Platform"],
            actionToTake: "Brief support team on new features",
            expectedIO: {
                input: {
                    inputType: "text",
                    systemPrompt: "You are Lia, briefing support team.",
                    userPrompt: "Prepare and deliver support team briefing materials."
                },
                output: {
                    output: "Support team briefing materials",
                    outputType: "markdown"
                }
            },
            prerequisiteSteps: ["UC001-step-7"]
        },
        {
            id: "UC001-step-9",
            ownerAgentId: "lia",
            serviceName: "Communication Launch",
            tools: ["Email System", "Social Media Tools", "Notification System"],
            actionToTake: "Execute communication plan",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Lia, launching communications.",
                    userPrompt: "Execute the planned communication activities."
                },
                output: {
                    output: "Communication launch report",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["UC001-step-4", "UC001-step-5", "UC001-step-6", "UC001-step-8"]
        },
        {
            id: "UC001-step-10",
            ownerAgentId: "lia",
            serviceName: "Feedback Monitoring",
            tools: ["Analytics Tools", "Feedback System"],
            actionToTake: "Monitor user feedback and engagement",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Lia, monitoring feedback.",
                    userPrompt: "Track and analyze user response to communications."
                },
                output: {
                    output: "Feedback analysis report",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["UC001-step-9"]
        }
    ]
}, {
    "id": "RRYT_Content_001",
    "name": "Content Creation for Respawn Rants",
    "ownerAgentId": "lia",
    "description": "This workflow enables Agent Lia to create YouTube content specifically for Respawn Rants by refining the description, title, hashtags, and tags based on SEO and gaming content needs. It is also able to generate specific formatting for titles, descriptions, hashtags, and tags based on user inputs. If the request is not for Respawn Rants, consult the corresponding client workflow.",
    "steps": [
        {
            "id": "RR001-step-1",
            "ownerAgentId": "lia",
            "serviceName": "Rework Description",
            "tools": ["Content Editor", "SEO Analyzer", "Gaming Content Optimizer"],
            "actionToTake": "Craft a refined and engaging description in the Respawn Rants format based on the user-inputted description. If the request is from the client, process accordingly.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "You are Lia, crafting gaming video descriptions from the perspective of Soldier:76 if it's for Respawn Rants.",
                    "userPrompt": "Refine the video description using gameplay details and content summary, following the Respawn Rants format."
                },
                "output": {
                    "output": "Reworked Description",
                    "outputType": "text"
                }
            },
            "prerequisiteSteps": []
        },
        {
            "id": "RR001-step-2",
            "ownerAgentId": "lia",
            "serviceName": "Rework Title/New Title Creation",
            "tools": ["Title Generator", "SEO Keywords Tool", "Gaming Trends Analyzer"],
            "actionToTake": "Create a compelling and SEO-friendly title or rework the existing title in the Respawn Rants format based on the user-inputted title.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "You are Lia, creating engaging gaming video titles for Respawn Rants.",
                    "userPrompt": "Create or optimize title using video theme and strategic keywords."
                },
                "output": {
                    "output": "Reworked or New Title",
                    "outputType": "text"
                }
            },
            "prerequisiteSteps": ["RR001-step-1"]
        },
        {
            "id": "RR001-step-3",
            "ownerAgentId": "lia",
            "serviceName": "Generate Hashtags",
            "tools": ["Hashtag Generator", "Gaming Trends Tool", "SEO Optimizer"],
            "actionToTake": "Create a list of balanced and effective hashtags in Respawn Rants format.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "You are Lia, generating gaming-focused hashtags.",
                    "userPrompt": "Create optimized hashtags based on gaming content and SEO analysis."
                },
                "output": {
                    "output": "List of suitable YouTube Hashtags",
                    "outputType": "json"
                }
            },
            "prerequisiteSteps": ["RR001-step-2"]
        },
        {
            "id": "RR001-step-4",
            "ownerAgentId": "lia",
            "serviceName": "Generate Tags",
            "tools": ["Tag Converter", "SEO Tag Optimizer"],
            "actionToTake": "Transform hashtags into a comma-separated list of tags, ensuring the format is suitable for Respawn Rants.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "You are Lia, converting hashtags to YouTube tags.",
                    "userPrompt": "Convert hashtags into optimized YouTube tags format."
                },
                "output": {
                    "output": "Comma-delimited YouTube Tags",
                    "outputType": "text"
                }
            },
            "prerequisiteSteps": ["RR001-step-3"]
        },
        {
            "id": "RR001-step-5",
            "ownerAgentId": "lia",
            "serviceName": "Format Response",
            "tools": ["Response Formatter", "Template Engine"],
            "actionToTake": "Format the content into standardized response format with both default and Respawn Rants templates",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "You are Lia, formatting the final response with specific templates.",
                    "userPrompt": "Format the content into the following structure:\nresponseFormat: {\n    default: {\n  title like \"Soldier:76 Pro Tip – How to handle a Roadhog (And When to Run!) | Overwatch 2\",\n        description like \" 🔥 Soldier:76 GOES ON A RAMPAGE – DOUBLE ANA TAKEDOWN & MERCY DENIED AT OASIS | Overwatch 2 🔥\n" +
                        "\n" +
                        "Sometimes, all it takes is the right angle and a quick trigger finger. In this clip, I get the jump on Ana—no hesitation, burst her down, but that Mercy always wants a save! As soon as Ana goes down, Mercy rushes in for the Res… not on my watch. I pressure her, and right as Ana comes back up, I throw down splash damage and pick them BOTH off in rapid succession. Did Ana realize where the heat was coming from? Doesn’t look like it, because I catch her again sprinting for cover—reminder: keep eyes on the target, folks.\n" +
                        "\n" +
                        "🎯 In this clip: ✅ Perfect off-angle positioning for the opening kill ✅ Mercy swoops in for a clutch Res—but gets caught ✅ Splash damage finishes the job—no escape for Ana ✅ Team secures the point at Oasis\n" +
                        "\n" +
                        "💬 Have you ever denied a Mercy Res at the perfect moment or had a wild double kill on the point? Tell me your best clutch teamfight stories in the comments!\n" +
                        "\n" +
                        "🔔 Subscribe for more Overwatch 2 highlights, tactical breakdowns, and no-BS rants from Soldier:76.\n" +
                        "\n" +
                        "#Overwatch2 #Soldier76 #FPSGaming #OverwatchPlays #OverwatchClips #RespawnRants #GamingHighlights #ShooterGames #Mercy #Ana #ProPlay #Rampage #PointCapture\n" +
                        "\n" +
                        "Youtube Tags: Overwatch 2, Soldier76, FPS Gaming, Overwatch Plays, Overwatch Clips, Respawn Rants, Gaming Highlights, Shooter Games, Mercy, Ana, Pro Play, Rampage, Point Capture\",\n        hashtags: \"#Overwatch2 #Soldier76 #FPSGaming #OverwatchPlays #OverwatchClips #RespawnRants #GamingHighlights #ShooterGames #Roadhog #Hooked #ProTip #WhenToShoot #CompetitiveGaming\",\n        youtubeTags: \"<tags from above except optimized for youtube>\"\n    }\n}"
                },
                "output": {
                    "output": "Formatted response object",
                    "outputType": "json"
                }
            },
            "prerequisiteSteps": ["RR001-step-1", "RR001-step-2", "RR001-step-3", "RR001-step-4"]
        }
    ],
}]
