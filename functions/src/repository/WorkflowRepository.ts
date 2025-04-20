import * as admin from 'firebase-admin';
import {WorkflowLogType, WorkflowType} from "../Workflow.types";
import {firestore} from "firebase-admin";
import UpdateData = firestore.UpdateData;

const db = admin.firestore();

const getWorkflowById = async (workflowId: string):Promise<WorkflowType> => {
    const doc = await db.collection('workflows').doc(workflowId).get();

    if (!doc.exists) throw 'Workflow not found';

    return {id: doc.id, ...doc.data()} as WorkflowType
}

const createWorkflow= async (data:WorkflowType) => {
    const docRef = await db.collection('workflows').add(data);
    return { id: docRef.id, message: 'Workflow created'};
}

async function updateWorkflow(id:string, data:UpdateData<WorkflowType>) {
    await db.collection('workflows').doc(id).update(data);
    return 'Workflow updated';
}

async function deleteWorkflow(id:string) {
    await db.collection('workflows').doc(id).delete();
    return 'Workflow deleted';
}

async function saveWorkflowLog(workflowId:string, logData:WorkflowLogType) {
    const logRef = db.collection('workflows').doc(workflowId).collection('workflow_logs').doc();
    await logRef.set(logData);
    return "Workflow log saved";
}

export default {getWorkflowById, createWorkflow, updateWorkflow, deleteWorkflow, saveWorkflowLog};