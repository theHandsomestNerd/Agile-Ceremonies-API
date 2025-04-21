import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger"
import {agentRoster} from "../data/AgentRoster";
import {AgentProfilesFilterType, AgentProfilesType} from "../AgentProfiles.types";

const firestore = admin.firestore();
const agentProfilesCollection = firestore.collection('agent_profiles');

/**
 * * Initialize agent profiles in Firestore from agent roster object
 *  * @returns A promise that resolves with status of updating
 *  */
const agentProfilesInitialize = async () => {
    // Use a batch write for atomicity
    const batch = firestore.batch();

    // First clear any existing agents if reinitializing
    const existingAgents = await agentProfilesCollection.get();
    logger.log("Existing agents found:", existingAgents.size);
    existingAgents.forEach(doc => {
        batch.delete(doc.ref);
    });
    logger.log("Existing agents purged");
    // Add all agents from the roster
    for (const agent of agentRoster) {
        const docRef = agentProfilesCollection.doc(agent.id);
        logger.log("Initializing AI Agent: ", agent);
        batch.set(docRef, {
            ...agent,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    await batch.commit();
    return {
        success: true,
        message: `Initialized ${agentRoster.length} agent profiles`
    };
}

/**
 * Create a new agent profile
 * @param agentProfile The agent profile data to create
 * @returns A promise that resolves when the agent profile is created
 */
const agentProfilesCreate = async (agentProfile: AgentProfilesType) => {
    const db = admin.firestore();

    const agentsCollection = db.collection('agent_profiles');

    await agentsCollection.doc(agentProfile.id).set({
        ...agentProfile,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString()
    });

    return {
        success: true,
        message: 'Agent profile created successfully',
        agent: agentProfile
    };
}

/**
 * Get an agent profile by ID
 * @param agentId The ID of the agent to retrieve
 * @returns A promise that resolves to the agent profile data
 */
const agentProfilesGet = async (agentId: string) => {
    const db = admin.firestore();

    const agentProfileRef = db.collection('agent_profiles').doc(agentId);
    const doc = await agentProfileRef.get();

    if (!doc.exists) {
        throw new Error('Agent profile not found');
    }

    return {
        success: true,
        agent: doc.data()
    };
}

/**
 * Get all agent profiles with optional filters
 * @param filters The filters to apply
 * @returns A promise that resolves to the filtered agent profiles
 */
const agentProfilesGetAll = async (filters?: AgentProfilesFilterType) => {
    let agentsQuery: admin.firestore.Query<admin.firestore.DocumentData> = agentProfilesCollection;

    // Filter by status if provided
    if (filters?.statusFilter) {
        agentsQuery = agentsQuery.where('status', '==', filters.statusFilter);
    }

    // Filter by domain if provided
    if (filters?.domainFilter) {
        agentsQuery = agentsQuery.where('domains', 'array-contains', filters.domainFilter);
    }

    // Filter by role if provided
    if (filters?.roleFilter) {
        agentsQuery = agentsQuery.where('role', 'in', filters.roleFilter);
    }

    // Filter by capability if provided
    if (filters?.capabilityFilter) {
        agentsQuery = agentsQuery.where('capabilities', 'array-contains', filters.capabilityFilter);
    }

    // Filter by description if provided
    if (filters?.descriptionFilter) {
        agentsQuery = agentsQuery.where('description', '>=', filters.descriptionFilter);
    }

    const agentSnapshot = await agentsQuery.get();

    if (agentSnapshot.empty) {
        throw new Error('No agent profiles found');
    }

    const agents = agentSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    logger.log("Agents found: ", agents)

    return {
        success: true,
        agents
    };
}
/**
 * Update an agent profile by ID
 * @param agentId The ID of the agent to update
 * @param agentProfile The updated agent profile data
 * @returns A promise that resolves when the update is complete
 */
const updateAgentProfile = async (agentId: string, agentProfile: AgentProfilesType) => {
    const agentRef = agentProfilesCollection.doc(agentId);
    const agentDoc = await agentRef.get();

    if (!agentDoc.exists) {
        throw new Error(`Agent with ID ${agentId} not found`);
    }

    // Update the agent, excluding id (since that's the document ID)
    const {id, ...updateData} = agentProfile;

    await agentRef.update({
        ...updateData,
        updatedAt: (new Date()).toISOString()
    });

    return {
        success: true,
        message: 'Agent profile updated successfully'
    };

}

const deleteAgentProfile = async (agentId: string) => {
    const agentRef = agentProfilesCollection.doc(agentId);
    const agentDoc = await agentRef.get();

    if (!agentDoc.exists) {
        throw new Error(`Agent with ID ${agentId} not found`);
    }

    await agentRef.delete();

    return {
        success: true,
        message: 'Agent profile deleted successfully'
    };
}

export default {
    agentProfilesInitialize,
    agentProfilesCreate,
    agentProfilesGet,
    agentProfilesGetAll,
    updateAgentProfile,
    deleteAgentProfile
};