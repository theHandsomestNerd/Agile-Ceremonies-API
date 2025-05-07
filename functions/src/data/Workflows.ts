import {WorkflowType} from "../Workflow.types";
import {CompassWorkflows} from "./CompassWorkflows";
import {ManManWorkflows} from "./ManManWorkflows";
import {ReqqysWorkflows} from "./ReqqyWorkflows";
import {JoshsWorkflows} from "./JoshsWorkflows";
import {LiasWorkflows} from "./LiasWorkflows";
import {JamesNTerrellWorkflows} from "./JamesNTerrellWorkflows";
import {AntoshsWorkflows} from "./AntoshsWorkflows";
import {JamesWorkflows} from "./JamesWorkflows";
import {TerrellWorkflows} from "./TerrellWorkflows";

// Add the Agile Pair Programming with TDD Workflow
const AgilePairTDDWorkflow: WorkflowType = {
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
    // ... remaining steps omitted for brevity
  ]
};

export const AgentWorkflows: WorkflowType[] = [
    ...CompassWorkflows,
    ...ReqqysWorkflows,
    ...ManManWorkflows,
    ...JoshsWorkflows,
    ...LiasWorkflows,
    ...JamesNTerrellWorkflows,
    ...JamesWorkflows,
    ...TerrellWorkflows,
    ...AntoshsWorkflows,
    AgilePairTDDWorkflow
]