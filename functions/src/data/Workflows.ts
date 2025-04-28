import {WorkflowType} from "../Workflow.types";
import {CompassWorkflows} from "./CompassWorkflows";
import {ManManWorkflows} from "./ManManWorkflows";
import {ReqqysWorkflows} from "./ReqqyWorkflows";
import {JoshsWorkflows} from "./JoshsWorkflows";
import {LiasWorkflows} from "./LiasWorkflows";
import {JamesNTerrellWorkflows} from "./JamesNTerrellWorkflows";
import {AntoshsWorkflows} from "./AntoshsWorkflows";

export const AgentWorkflows: WorkflowType[] = [
    ...CompassWorkflows,
    ...ReqqysWorkflows,
    ...ManManWorkflows,
    ...JoshsWorkflows,
    ...LiasWorkflows,
    ...JamesNTerrellWorkflows,
    ...AntoshsWorkflows
]