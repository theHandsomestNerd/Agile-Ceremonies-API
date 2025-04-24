# Handsomest Nerd Inc. Multi-Agent Network (THN-MAN)

Welcome to the Handsomest Nerd Inc. Multi-Agent Agile Development System!

This platform leverages specialized AI agents, each modeled after a classic Agile team role, to automate and accelerate the delivery of high-quality software—starting with our flagship Agile Ceremonies application and its Pair Programming Widget.

## 🚀 Project Overview

Agile Ceremonies streamlines Agile practices with special attention to pair programming. Our system combines eight core agents (plus support staff) to cover every product and devops lifecycle stage.

## 👨‍💻 Agent Directory

| Agent | Role | Main Responsibilities |
|-------|------|----------------------|
| Nat | CEO / AI PM | Project lead, overall strategy, system access, final decisions |
| Brian | Product Manager | Owns Pair Programming Widget, backlog/feature coordination |
| Reqqy | Requirements Agent | Gathers/structures requirements; GitHub issue integration |
| Josh | Graphic Design | UI/UX mockups, branding, visual media assets |
| James & Terrell | Twin Dev Agents | Pair programming, build features, write/maintain code |
| Antosh | Testing & Analytics | TDD, QA coverage, metrics, performance tracking |
| Man-Man | Maintenance Agent / DevOps | Deployed app upkeep, infrastructure, Firebase Ops & audio file transcription |
| Lia | Email & Social Media | Growth, mail campaigns, social content, user comms |
| Compass | HR Agent & Message Router | Support, workflow routing, prompt/agent recommendation, logs |

## 🗂️ How It Works

### Core Collaboration Model

- Each agent is specialized and only acts on discrete, authorized requests.
- Compass routes all tasks to the appropriate agent(s), ensuring smooth automated workflows.
- Workflows are approved before execution—no unattended automation!

### Workflow Overview

1. You submit a request—either a general help-desk/support need or a technical/project workflow query.
2. Compass analyzes the request, matches it to relevant agent(s), and drafts a workflow plan.
3. Compass returns a step-by-step plan: which agents to call on, which prompts/tools to use, and expected outputs.
4. On approval, Compass routes each workflow step to the specified agent.
5. All activity is logged for transparency and iterative improvement.


## 🧭 The Role of Compass (You're Here!)

- **Smart Hub**: Receives all requests for agent action or information
- **Routing**: Reads each prompt, identifies the best-fit agent(s), creates actionable workflows, and returns plans for approval
- **Help Desk**: Explains agent abilities, company info, tool inventory; logs and handles requests
- **Adaptive**: Continuously refines routes using feedback and logged results

## 🛠️ Data & Communication

- **Firestore-style storage**: Agents, workflows, logs, prompts, tools, and feedback all stored in organized collections
- **Communication Protocol**:
    - Requests: JSON with systemPrompt and userPrompt
    - Plans: JSON workflow (see above)
    - Logs: All agent actions and messages for transparency and troubleshooting

## ☎️ Need Help?

Submit your request (project, workflow, documentation, troubleshooting, or general help-desk needs)—Compass will:

1. Identify the best agent(s) and workflow for you.
2. Return a step-by-step plan for your approval.
3. Route and track execution, keeping you in the loop at every step.

## 📝 Contributing & Extending

- Add new Agents: Extend the agent directory and register their tools and workflow triggers.
- Add new Workflows: Define the sequence, agent assignments, and new workflow IDs.
- Extend the Workflow & Prompt Library: Grow the set of reusable components and prompt templates.
- Log feedback and errors for continual Compass improvement!

## 🌟 Credits

Handsomest Nerd Inc. – Where Agile meets AI, and software is always a team sport!

Questions? Contact the Compass agent, your friendly neighborhood AI help desk!

**Version**: 2024.06  
**Author**: The Handsomest Nerd Inc.