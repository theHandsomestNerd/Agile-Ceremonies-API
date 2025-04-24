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
