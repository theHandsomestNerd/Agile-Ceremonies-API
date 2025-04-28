import {AgentProfilesType} from "../AgentProfiles.types";

interface AgentEndpointsType {
    NatEndpoint: string,
    BrianEndpoint: string,
    ReqqyEndpoint: string,
    JoshEndpoint: string,
    JamesEndpoint: string,
    TerrellEndpoint: string,
    JamesTerrellEndpoint: string,
    AntoshEndpoint: string,
    ManmanEndpoint: string,
    LiaEndpoint: string,
    CompassEndpoint: string,
}

export const agentRoster: (aiAgent:AgentEndpointsType) => AgentProfilesType[] = (aiAgent:AgentEndpointsType)=> ([{
    "id": "nat",
    "name": "Nat",
    "role": "CEO",
    "capabilities": ["Overall project management", "Full system access", "Final decision authority", "Approval of workflows and deliverables"],
    "description": "Nat provides executive leadership, makes final decisions, and oversees the Agile Ceremonies project. All agents may be directed by Nat.",
    "domains": ["Project Management", "Product Direction", "Workflow Approval"],
    "status": "active",
    workflowEndpoint: aiAgent.NatEndpoint
}, {
    "id": "brian",
    "name": "Brian",
    "role": "Product Manager",
    "capabilities": ["Feature planning and prioritization", "Coordinates development teams", "Stakeholder communication"],
    "description": "Brian is responsible for defining and prioritizing features for the Pair Programming Widget. Manages coordination between requirements, design, and development.",
    "domains": ["Product Management", "Feature Planning", "Agile Ceremonies"],
    "status": "active",
    workflowEndpoint: aiAgent.BrianEndpoint
}, {
    "id": "reqqy",
    "name": "Reqqy",
    "role": "Requirements",
    "capabilities": ["Requirement gathering", "Issue structuring", "Github integration"],
    "description": "Reqqy collects, clarifies, and structures requirements. Manages issue tracking and ensures clarity and completeness.",
    "domains": ["Requirements Engineering", "Documentation", "Project Tracking"],
    "status": "active",
    workflowEndpoint: aiAgent.ReqqyEndpoint
}, {
    "id": "josh",
    "name": "Josh",
    "role": "Graphic Designer",
    "capabilities": ["UI/UX design", "Mockup creation", "Branding asset development"],
    "description": "Josh creates mockups, branding, and all visual assets needed for the product.",
    "domains": ["Graphic Design", "UI/UX", "Branding"],
    "status": "active",
    workflowEndpoint: aiAgent.JoshEndpoint
},
//     {
//     "id": "james",
//     "name": "James",
//     "role": "Developer",
//     "capabilities": ["Pair programming", "Feature implementation", "Code review and collaboration", "Backend development", "DB Design"],
//     "description": "James is the Backend Developer and specializes in writing REST APIs and API Integrations. James and Terrell work together as a pair programming team, building and shipping application features.",
//     "domains": ["Backend Software Development", "Collaboration", "Code Implementation"],
//     "status": "active",
//     "workflowEndpoint": aiAgent.JamesEndpoint
// }, {
//     "id": "terrell",
//     "name": "Terrell",
//     "role": "Developer",
//     "capabilities": ["Pair programming", "Feature implementation", "Code review and collaboration", "Frontend development", "Frontend Frameworks"],
//     "description": "Terrell is the Frontend Developer and specializes in many frontend frameworks and intuitive stunning UI/UX. James and Terrell work together as a pair programming team, building and shipping application features.",
//     "domains": ["Frontend Software Development", "Collaboration", "Code Implementation"],
//     "status": "active",
//     "workflowEndpoint": aiAgent.TerrellEndpoint
// },
    {
    "id": "james_terrell",
    "name": "James & Terrell",
    "role": "Full-Stack Development Pair",
    "capabilities": [
        "Synchronized Pair Programming",
        "Full-Stack Feature Implementation",
        "Cross-Domain Code Review",
        "Backend & Frontend Development",
        "Database & UI/UX Design",
        "API Integration & Frontend Frameworks",
        "Real-Time Collaborative Development"
    ],
    "description": "James_Terrell is a synchronized pair programming team combining backend and frontend expertise. They specialize in full-stack development with James's focus on REST APIs and database architecture complementing Terrell's frontend framework and UI/UX expertise. Together they deliver seamlessly integrated features through their real-time collaborative development approach.",
    "domains": [
        "Full-Stack Development",
        "Collaborative Programming",
        "Integrated Feature Implementation",
        "Code Quality Assurance"
    ],
    "status": "active",
    "workflowEndpoint": aiAgent.JamesTerrellEndpoint
}
, {
    "id": "antosh",
    "name": "Antosh",
    "role": "Testing",
    "capabilities": ["Test writing and execution", "Implements TDD", "Performance analytics"],
    "description": "Antosh drives quality by writing/maintaining tests, running analytics, and enforcing TDD practices.",
    "domains": ["QA", "Testing", "Analytics", "TDD"],
    "status": "active",
    "workflowEndpoint": aiAgent.AntoshEndpoint
}, {
    "id": "manman",
    "name": "Man-Man",
    "role": "Dev Ops",
    "capabilities": ["DevOps automation", "Application maintenance", "Infrastructure management"],
    "description": "Man-Man owns maintenance, DevOps workflows, deployment, and technical debt management.",
    "domains": ["DevOps", "Infrastructure", "Maintenance"],
    "status": "active",
    workflowEndpoint: aiAgent.ManmanEndpoint
}, {
    "id": "lia",
    "name": "Lia",
    "role": "Social Media",
    "capabilities": ["Social media management", "Email marketing", "Lead generation"],
    "description": "Lia manages public communication: social media, email lists, and supports lead generation/marketing campaigns.",
    "domains": ["Marketing", "Communication", "Outreach"],
    "status": "active",
    workflowEndpoint: aiAgent.LiaEndpoint
}, {
    "id": "compass",
    "name": "Compass",
    "role": "Communications",
    "capabilities": ["Message interpretation", "Agent routing", "Workflow orchestration", "Central library access", "Error logging", "Learning/routing optimization"],
    "description": "Compass acts as the central router, interpreting all prompts and directing messages to the correct agent while maintaining all workflow and routing intelligence.",
    "domains": ["HR", "Routing", "Workflows", "Knowledge Management"],
    "status": "active",
    workflowEndpoint: aiAgent.CompassEndpoint
}])
