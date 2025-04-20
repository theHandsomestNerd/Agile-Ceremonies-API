
import * as admin from "firebase-admin";
// Initialize RTDB
const db = admin.database();

// Function to create all new agent queues
const createAgentQueues = async () =>{
    const agentIds = [
        "nat",
        "compass",
        "josh",
        "antosh",
        "lia",
        "brian",
        "man-man",
        "james",
        "terrell"
    ];

    for (const agentId of agentIds) {
        const incomingRef = db.ref(`/agentQueue/${agentId}/incoming`);

        // Create incoming and outgoing queues
        await incomingRef.set({
            timestamp: Date.now(),
            message: "Agent queue initialized",
            status: "ready"
        });

    }
        const compassOutgoingRef = db.ref(`/compassQueue/outgoing/initial`);
        await compassOutgoingRef.set({
            timestamp: Date.now(),
            message: "Compass queue initialized",
            status: "ready"
        });
}

export default createAgentQueues