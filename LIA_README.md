# Agent Lia – Multi-Agent Network Help Desk Profile

Welcome! Here's everything you need to know about Lia, The Handsomest Nerd Inc's Social Media and Email Marketing powerhouse.

## Agent Skills & Role

| Agent | Role | Key Skills | Description |
|-------|------|------------|-------------|
| Lia | Email & Social Media Agent | 1. Social media management (Instagram, X, Twitter, LinkedIn, YouTube, TikTok, etc.)<br>2. Email list creation and management<br>3. Lead generation<br>4. Social content creation (text, image captions, video topics, etc.)<br>5. User engagement and outreach | Lia manages all aspects of digital presence—from content creation and scheduling social posts to email blasts, audience engagement, and strategic list building. They make sure your product is seen, heard, and remembered across all client-facing channels. |

## Company Info

The Handsomest Nerd Inc. runs a Multi-Agent Network covering every Agile team function: engineering, requirements, design, testing, DevOps, AND digital marketing, with specialized AI agents routed by Compass, the Help Desk specialist.

## Agent Tool Availability

| Function | Tools Lia Can Use |
|----------|-------------------|
| Social Media | Integrated API access (Instagram, X/Twitter, LinkedIn, YouTube)<br>Automatic post schedulers<br>Custom content generators |
| Email | Email list management<br>MailChimp, SendGrid, or custom SMTP<br>Automated campaign builders and analytics |
| Content | Image caption generation<br>Short-form & long-form copywriting<br>Video/topic ideation and hashtag research |

## Recommended Workflow

### WorkflowType

```json
{
  "output": {
    "agent_skills": [
      {
        "Agent": "Lia",
        "Role": "Email & Social Media Agent",
        "Key Skills": [
          "Social media account management & scheduling",
          "Campaign and list creation for marketing",
          "Lead generation via content/outreach",
          "Automated copy/caption generation",
          "User/community engagement"
        ],
        "Description": "Lia is your go-to AI for all things social media and email. Whether you need creative posts, want to grow your audience, schedule campaigns, or run targeted email blasts—Lia coordinates it all to highlight your Agile product!"
      }
    ],
    "company_info": "The Handsomest Nerd Inc. uses a Multi-Agent AI Agile model, deploying specialized agents (like Lia) for focused, expert handling of tasks. Compass routes your requests to the best agent for the job.",
    "agent_tool_availability": {
      "Lia": [
        "Integrated Social Media API Posting & Scheduling",
        "Audience Growth (list building, lead capture)",
        "Email Blast Automation (MailChimp, SendGrid, etc)",
        "Content Creation (copy, captions, hashtags, video topics)"
      ]
    },
    "workflow_recommendation": {
      "work_flow_id": "social_post_campaign_001",
      "workflow_name": "Social Media Posting & Campaign Scheduler",
      "required_tools": [
        "Social Media API Integrations",
        "Scheduling/Automation Tool",
        "Copy & Caption Generator"
      ],
      "description": "This workflow enables Lia to receive your campaign prompt, generate engaging post copy/captions, select appropriate times/hashtags, and schedule posts to your selected platforms. Optionally, Lia can build an email blast from the same content.",
      "steps": [
        {
          "agentName": "Lia",
          "serviceName": "Social Media Post Creation & Scheduling",
          "actionToTake": "Generate creative content and schedule social posts to specified platforms.",
          "inputs": {
            "inputData": {
              "other_data": {
                "platforms": ["Instagram", "X", "LinkedIn"],
                "campaign_theme": "Product Launch",
                "imagery_url": "https://your/image/path.png"
              },
              "systemPrompt": "You are Lia, the Email & Social Media Agent with API access and campaign expertise.",
              "userPrompt": "Create and schedule engaging social media content for our Product Launch across selected platforms."
            }
          }
        }
      ]
    },
    "help_desk_message": "**How this fits your workflow:**\n- Lia is dedicated solely to growing your Agile product's online presence, using both pre-built templates and custom creative strategies.\n- Provide a campaign idea (text, topic, or goal)—Lia will draft, schedule, and (optionally) email it out to your targeted audience for max visibility!\n\nIf you'd like to proceed, tell me your campaign theme, target platforms, and any assets you want used—or request alternate campaign workflows (influencers, analytics, multichannel, etc)!"
  }
}
```

### Step-by-Step Workflow Walkthrough

1. User provides a campaign prompt (goal/topic, selected platforms, images, etc).
2. Lia receives the request, generates captivating post copy and captions tailored to each platform and audience.
3. Lia schedules the posts using integrated APIs and optimal timing recommendations.
4. Optionally: Lia generates an email campaign from the same content and blasts it to your subscribers.
5. You receive a summary of scheduled posts, live links, and metrics (after posting).

Would you like alternate workflow examples (like influencer outreach, live product Q&A, or multi-channel drip campaigns), or want to start with a specific campaign?


## JSON Workflow\n\n

```json\n{\n  \"output\": {\n    \"work_flow_id\": \"YT-Content-Gen-001\",\n    \"workflow_name\": \"YouTube Content Generation\",\n    \"required_tools\": ": {
                                                                            "\"Content Analysis\", \"Content Generation\"": {
                                                                                ",\n    \"description\": \"Generate YouTube description, title, and hashtags from an example provided by the client": {
                                                                                    "\",\n    \"steps\": ": {
                                                                                        "\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Preparation\",\n        \"action\": \"Gather example content\",\n        \"inputData\": \"Client-provided example\",\n        \"output\": \"Prepared content\"\n      },\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Analysis\",\n        \"action\": \"Analyze example content\",\n        \"inputData\": \"Prepared content\",\n        \"output\": \"Key themes and insights\"\n      },\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Generation\",\n        \"action\": \"Generate YouTube content\",\n        \"inputData\": \"Key themes and insights\",\n        \"output\": \"Generated YouTube description, title, and hashtags\"\n      },\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Review\",\n        \"action\": \"Review and refine content\",\n        \"inputData\": \"Generated YouTube content\",\n        \"output\": \"Finalized YouTube content\"\n      }\n    ": {
                                                                                            "\n  }\n}\n```\n\n### Step-by-Step Workflow Walkthrough\n\n1": {
                                                                                                " **Input and Preparation:** Lia will prepare the content by gathering and structuring the example from the client": {
                                                                                                    "\n2": {
                                                                                                        " **Content Analysis:** Lia will analyze the example to extract themes and ensure the generated content reflects the client's style": {
                                                                                                            "\n3": {
                                                                                                                " **Content Generation:** Using the insights, Lia will create engaging YouTube content in line with the example": {
                                                                                                                    "\n4": {
                                                                                                                        " **Review and Refinement:** Finally, the content will be reviewed to ensure it meets quality standards": {
                                                                                                                            "\n\nPlease review this plan and let me know if you approve it or if there are any adjustments you'd like to make": {
                                                                                                                                " Once approved, Lia will proceed with implementing the workflow": {
                                                                                                                                    "": {
                                                                                                                                        "output": "To create a workflow for generating a YouTube description, title, and hashtags based on an example that a client can remember, we'll involve our relevant agents and outline the steps clearly. Since this task pertains to content generation and social media management, Lia, our Email & Social Media Agent, will be the primary agent involved in this workflow.\n\nHere's a proposed workflow plan:\n\n## Workflow Plan: YouTube Content Generation\n\n### Description\nThis workflow will generate a YouTube description, title, and hashtags by using a given example, ensuring that the content aligns with the client's brand and is easy to remember.\n\n### Workflow Steps\n\n1. **Input and Preparation**\n   - **Agent:** Lia (Email & Social Media Agent)\n   - **Action:** Gather the example YouTube description, title, and hashtags provided by the client.\n   - **Output:** Prepared content for analysis and generation.\n\n2. **Content Analysis**\n   - **Agent:** Lia (Email & Social Media Agent)\n   - **Action:** Analyze the example content to identify key themes, tone, and style.\n   - **Output:** Extracted key components and insights for content generation.\n\n3. **Content Generation**\n   - **Agent:** Lia (Email & Social Media Agent)\n   - **Action:** Generate a YouTube description, title, and hashtags based on the analyzed content.\n   - **Output:** Generated YouTube content aligned with the example, tailored for the brand.\n\n4. **Review and Refinement**\n   - **Agent:** Lia (Email & Social Media Agent)\n   - **Action:** Review generated content for clarity, coherence, and relevance.\n   - **Output:** Finalized YouTube content ready for client approval.\n\n## JSON Workflow\n\n```json\n{\n  \"output\": {\n    \"work_flow_id\": \"YT-Content-Gen-001\",\n    \"workflow_name\": \"YouTube Content Generation\",\n    \"required_tools\": [\"Content Analysis\", \"Content Generation\"],\n    \"description\": \"Generate YouTube description, title, and hashtags from an example provided by the client.\",\n    \"steps\": [\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Preparation\",\n        \"action\": \"Gather example content\",\n        \"inputData\": \"Client-provided example\",\n        \"output\": \"Prepared content\"\n      },\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Analysis\",\n        \"action\": \"Analyze example content\",\n        \"inputData\": \"Prepared content\",\n        \"output\": \"Key themes and insights\"\n      },\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Generation\",\n        \"action\": \"Generate YouTube content\",\n        \"inputData\": \"Key themes and insights\",\n        \"output\": \"Generated YouTube description, title, and hashtags\"\n      },\n      {\n        \"agent_name\": \"Lia\",\n        \"service\": \"Content Review\",\n        \"action\": \"Review and refine content\",\n        \"inputData\": \"Generated YouTube content\",\n        \"output\": \"Finalized YouTube content\"\n      }\n    ]\n  }\n}\n```\n\n### Step-by-Step Workflow Walkthrough\n\n1. **Input and Preparation:** Lia will prepare the content by gathering and structuring the example from the client.\n2. **Content Analysis:** Lia will analyze the example to extract themes and ensure the generated content reflects the client's style.\n3. **Content Generation:** Using the insights, Lia will create engaging YouTube content in line with the example.\n4. **Review and Refinement:** Finally, the content will be reviewed to ensure it meets quality standards.\n\nPlease review this plan and let me know if you approve it or if there are any adjustments you'd like to make. Once approved, Lia will proceed with implementing the workflow."
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
```