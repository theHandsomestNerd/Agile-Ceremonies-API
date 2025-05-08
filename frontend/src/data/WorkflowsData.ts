// Agile Pair Programming with TDD Workflow data
export const agilePairTDDWorkflow = {
    id: "agile_pair_tdd_003",
    name: "Agile Pair Programming with TDD Workflow",
    ownerAgentId: "compass",
    description: "A workflow for implementing features using Pair Programming and Test-Driven Development practices",
    steps: [
        {
            id: "APT001-step-1",
            ownerAgentId: "nat",
            serviceName: "Project Initialization",
            tools: ["Firebase", "Project Manager"],
            actionToTake: "Create a project in the projects collection with project details.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Nat, the CEO and Project Manager.",
                    userPrompt: "Create a project document in the collection containing all project details."
                },
                output: {
                    output: "Project document with project ID",
                    outputType: "json"
                }
            },
            prerequisiteSteps: []
        },
        {
            id: "APT001-step-2",
            ownerAgentId: "reqqy",
            serviceName: "Requirements Collection",
            tools: ["GitHub", "Requirements Parser"],
            actionToTake: "Collect and structure project requirements",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Reqqy, the requirements specialist.",
                    userPrompt: "Gather and structure the requirements based on the project details from the collection."
                },
                output: {
                    output: "Structured requirements stored in a collection for reference",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-1"]
        },
        {
            id: "APT001-step-3",
            ownerAgentId: "brian",
            serviceName: "Design Document Creation",
            tools: ["Document Editor", "Design Tools"],
            actionToTake: "Create and store a design document in the collection using project ID.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Brian, the Product Manager.",
                    userPrompt: "Write a design document based on requirements and store it in a collection referenced by project ID."
                },
                output: {
                    output: "Design document stored in collection",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-2"]
        },
        {
            id: "APT001-step-4",
            ownerAgentId: "josh",
            serviceName: "UI/UX Mockup Design",
            tools: ["Design Tools", "Asset Manager"],
            actionToTake: "Create visual designs and mockups based on requirements and previous mockups.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Josh, the UI/UX designer.",
                    userPrompt: "Create mockups with inspiration from stored requirements and mockups based on project ID."
                },
                output: {
                    output: "Mockup designs as PNG file",
                    outputType: "binary"
                }
            },
            prerequisiteSteps: ["APT001-step-2"]
        },
        {
            id: "APT001-step-5",
            ownerAgentId: "james_terrell",
            serviceName: "Pair Programming Session 1",
            tools: ["Code Editor", "Version Control"],
            actionToTake: "Implement features and leave comments for code review",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are James and Terrell, the development pair.",
                    userPrompt: "Implement features based on requirements and leave comments for code review."
                },
                output: {
                    output: "Feature implementation code with comments",
                    outputType: "code"
                }
            },
            prerequisiteSteps: ["APT001-step-3", "APT001-step-4"]
        },
        {
            id: "APT001-step-6",
            ownerAgentId: "antosh",
            serviceName: "Quality Assurance",
            tools: ["Testing Suite", "Analytics Tools"],
            actionToTake: "Run tests against the features implemented.",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are Antosh, the testing specialist.",
                    userPrompt: "Execute test suite against the implemented features."
                },
                output: {
                    output: "Test reports and performance insights",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-5"]
        },
        {
            id: "APT001-step-7",
            ownerAgentId: "terrell",
            serviceName: "Code Review",
            tools: ["Code Review Tools", "Version Control"],
            actionToTake: "Review code written by James.",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are Terrell, conducting code reviews.",
                    userPrompt: "Review and provide feedback on James' implementation."
                },
                output: {
                    output: "Code review feedback and checklist updates",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-6"]
        },
        {
            id: "APT001-step-8",
            ownerAgentId: "james",
            serviceName: "Code Fixes",
            tools: ["Code Editor", "Version Control"],
            actionToTake: "Fix issues raised during code review.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are James, fixing code based on review.",
                    userPrompt: "Address the issues from code review and ensure all requirements are updated."
                },
                output: {
                    output: "Updated implementation and checklist",
                    outputType: "code"
                }
            },
            prerequisiteSteps: ["APT001-step-7"]
        },
        {
            id: "APT001-step-9",
            ownerAgentId: "brian",
            serviceName: "Final Code Review",
            tools: ["Code Review Tools", "Version Control"],
            actionToTake: "Conduct a final code review on the completed features.",
            expectedIO: {
                input: {
                    inputType: "code",
                    systemPrompt: "You are Brian, conducting final reviews.",
                    userPrompt: "Ensure all requirements and specifications are addressed in the final code."
                },
                output: {
                    output: "Final code review summary and actionable items",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-8"]
        },
        {
            id: "APT001-step-10",
            ownerAgentId: "nat",
            serviceName: "Final Review",
            tools: ["Review Tools"],
            actionToTake: "Conduct a final review of the application based on user intent.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Nat, performing the final product review.",
                    userPrompt: "Review the final application against initial user intent."
                },
                output: {
                    output: "Final review notes and any adjustments needed",
                    outputType: "json"
                }
            },
            prerequisiteSteps: ["APT001-step-9"]
        },
        {
            id: "APT001-step-11",
            ownerAgentId: "brian",
            serviceName: "Standup Meetings",
            tools: ["Logger"],
            actionToTake: "Conduct standup meetings every 10 minutes.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "You are Brian, responsible for standups.",
                    userPrompt: "Log the workflow progress of each agent every 10 minutes."
                },
                output: {
                    output: "Standup logs with documented progress",
                    outputType: "json"
                }
            },
            prerequisiteSteps: []
        }
    ]
};

// Help Desk Workflow data
export const helpDeskWorkflow = {
    id: "help_desk_001",
    name: "Help Desk Workflow",
    ownerAgentId: "compass",
    description: "Answer questions about Handsomest Nerd, its agents, and system capabilities; troubleshoot user technical issues.",
    steps: [
        {
            id: "help_desk_step_1",
            ownerAgentId: "compass",
            serviceName: "Parse Request",
            tools: ["Webhook Parser"],
            actionToTake: "Parse incoming message for help desk request category and keywords.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "{master-system-prompt+\n+compass-system-prompt}",
                    userPrompt: "Parse incoming help desk request."
                },
                output: {
                    outputType: "json",
                    output: "question_category"
                }
            },
            prerequisiteSteps: []
        },
        {
            id: "help_desk_step_2",
            ownerAgentId: "compass",
            serviceName: "Knowledge Lookup",
            tools: ["Internal Docs Search", "OpenAI API"],
            actionToTake: "Search docs and/or ask OpenAI for concise, relevant answers.",
            expectedIO: {
                input: {
                    inputType: "json",
                    systemPrompt: "{master-system-prompt+\n+compass-system-prompt}",
                    userPrompt: "Find or generate help desk response."
                },
                output: {
                    outputType: "text",
                    output: "AI/Docs-generated answer"
                }
            },
            prerequisiteSteps: ["help_desk_step_1"]
        },
        {
            id: "help_desk_step_3",
            ownerAgentId: "compass",
            serviceName: "Respond",
            tools: ["Webhook Response"],
            actionToTake: "Format and return response to caller in markdown.",
            expectedIO: {
                input: {
                    inputType: "text",
                    userPrompt: "Format answer.",
                    systemPrompt: "{master-system-prompt+\n+compass-system-prompt}",
                },
                output: {
                    outputType: "json",
                    output: "Formatted markdown response"
                }
            },
            prerequisiteSteps: ["help_desk_step_2"]
        }
    ]
};

export const respawnRantsWorkflow = {
    "id": "RRYT_Content_001",
    "name": "Content Creation for Respawn Rants",
    "ownerAgentId": "lia",
    "description": "This workflow enables Agent Lia to create YouTube content specifically for Respawn Rants by refining the description, title, hashtags, and tags based on SEO and gaming content needs. It is also able to generate specific formatting for titles, descriptions, hashtags, and tags based on user inputs. If the request is not for Respawn Rants, consult the corresponding client workflow.",
    "steps": [
        {
            "id": "RR001-step-1",
            "ownerAgentId": "lia",
            "serviceName": "Rework Description",
            "tools": ["OpenAI"],
            "actionToTake": "Craft a refined and engaging description in the Respawn Rants format based on the user-inputted description. If the request is from the client, process accordingly.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "{master-system-prompt} + {lia-system-prompt} \n You are AI Agent Lia crafting gaming video descriptions from the perspective of Soldier:76 if it's for Respawn Rants.",
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
            "tools": ["OpenAI"],
            "actionToTake": "Create a compelling and SEO-friendly title or rework the existing title in the Respawn Rants format based on the user-inputted title.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "{master-system-prompt} + {lia-system-prompt} \n You are AI Agent Lia creating engaging gaming video titles for Respawn Rants.",
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
            "tools": ["OpenAI"],
            "actionToTake": "Create a list of balanced and effective hashtags in Respawn Rants format.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "{master-system-prompt} + {lia-system-prompt}\n You are AI Agent Lia generating gaming-focused hashtags.",
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
            "tools": ["OpenAI"],
            "actionToTake": "Transform hashtags into a comma-separated list of tags, ensuring the format is suitable for Respawn Rants.",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "{master-system-prompt} + {lia-system-prompt}\nYou are AI Agent Lia converting hashtags to YouTube tags.",
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
            "tools": ["Response Formatter", "Template Engine", "OpenAI"],
            "actionToTake": "Format the content into standardized response format with both default template",
            "expectedIO": {
                "input": {
                    "inputType": "json",
                    "systemPrompt": "{master-system-prompt} + {lia-system-prompt}\nYou are AI Agent Lia formatting the final response with specific templates.",
                    "userPrompt": `Format the content into the following structure:
                                   responseFormat: {
                                       default: {
                                        title: Soldier:76 Pro Tip – How to handle a Roadhog (And When to Run!) | Overwatch 2,
                                        description: 🔥 Soldier:76 GOES ON A RAMPAGE – DOUBLE ANA TAKEDOWN & MERCY DENIED AT OASIS | Overwatch 2 🔥
                                        Sometimes, all it takes is the right angle and a quick trigger finger. In this clip, 
                                        I get the jump on Ana—no hesitation, burst her down, but that Mercy always wants a 
                                        save! As soon as Ana goes down, Mercy rushes in for the Res… not on my watch. 
                                        I pressure her, and right as Ana comes back up, I throw down splash damage 
                                        and pick them BOTH off in rapid succession. Did Ana realize where the heat 
                                        was coming from? Doesn’t look like it, because I catch her again sprinting 
                                        for cover—reminder: keep eyes on the target, folks.
                                        
                                        🎯 In this clip: 
                                            ✅ Perfect off-angle positioning for the opening kill 
                                            ✅ Mercy swoops in for a clutch Res—but gets caught 
                                            ✅ Splash damage finishes the job—no escape for Ana 
                                            ✅ Team secures the point at Oasis
                                            
                                        💬 Have you ever denied a Mercy Res at the perfect moment or had a wild double kill on the point? Tell me your best clutch teamfight stories in the comments!
                                        
                                        🔔 Subscribe for more Overwatch 2 highlights, tactical breakdowns, and no-BS rants from Soldier:76.
                                        
                                        #Overwatch2 #Soldier76 #FPSGaming #OverwatchPlays #OverwatchClips #RespawnRants #GamingHighlights #ShooterGames #Mercy #Ana #ProPlay #Rampage #PointCapture
                                        
                                        Youtube Tags: Overwatch 2, Soldier76, FPS Gaming, Overwatch Plays, Overwatch Clips, Respawn Rants, Gaming Highlights, Shooter Games, Mercy, Ana, Pro Play, Rampage, Point Capture
                                        }
                                   }`
                },
                "output": {
                    "output": "Formatted response object",
                    "outputType": "json"
                }
            },
            "prerequisiteSteps": ["RR001-step-1", "RR001-step-2", "RR001-step-3", "RR001-step-4"]
        }
    ],
}