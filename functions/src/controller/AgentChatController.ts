const handleAgentMessages = async (request: any, response: any) => {
    try {
        if (request.method !== 'POST') {
            return response.status(405).json({
                error: 'Method not allowed',
                message: 'Only POST requests are supported'
            });
        }

        const {message, agentId, workflowId, metadata} = request.body;

        // Validate required fields
        if (!message || !agentId) {
            return response.status(400).json({
                error: 'Invalid request',
                message: 'Message and agentId are required'
            });
        }

        // Log incoming request (exclude sensitive data)
        console.log('Received agent message request:', {
            agentId,
            messageLength: message.length,
            workflowId,
            timestamp: new Date().toISOString()
        });


        // TODO: store in chat log firebase collection
        // {session_id}/chatMessages/


        // TODO: Add your agent-specific processing logic here
        // go get the agent with the agenId from the agent_profiles collection
        // save the endpoint locally
        const agentResponse = 'Logic to make the fetch POST call to the agent and get a response.';

        // TODO: store in chat response under a chat firebase collection

        // Return success response
        return response.status(200).json({
            id: Date.now().toString(),
            message: agentResponse,
            agentId,
            timestamp: new Date().toISOString(),
            status: 'success',
            metadata: {
                processedAt: new Date().toISOString(),
                ...metadata
            }
        });

    } catch (error: any) {
        console.error('Error processing agent message:', error);

        // Return error response
        return response.status(500).json({
            error: 'Internal server error',
            message: error.message || 'Failed to process agent message',
            timestamp: new Date().toISOString(),
            status: 'error'
        });
    }
}

export default {handleAgentMessages}