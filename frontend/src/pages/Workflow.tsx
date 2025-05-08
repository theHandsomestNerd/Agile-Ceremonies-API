import React, {useState} from 'react';
import {
    ControlButton,
    WorkflowContainer,
    WorkflowContent,
    WorkflowControls,
    WorkflowDescription,
    WorkflowHeader,
    WorkflowSection,
    WorkflowStatusBadge,
    WorkflowTitle
} from '../styles/Workflow.styled';
import {ActivityIcon, PauseIcon, PlayIcon, RefreshIcon, SaveIcon} from '../components/WorkflowIcons';
import WorkflowDropdownSelect from '../components/WorkflowDropdownSelect';
import WorkflowStepTable from '../components/WorkflowStepTable';
import ChatPanel from '../components/ChatPanel';
import {agilePairTDDWorkflow, helpDeskWorkflow, respawnRantsWorkflow} from "../data/WorkflowsData";
import {Agent, AgentKey, StatusType} from '../types/App.types';
import {AgentInitial, AvatarCircle, PresenceAgent, PresenceBar} from "../styles/App.styled";
import {statusMeta} from "../data/statusMeta";
import {StepStatusDot} from "../styles/Steps.styled";
import {Agents} from "../data/Agents";

// Available workflows
const availableWorkflows = [
    agilePairTDDWorkflow,
    helpDeskWorkflow,
    respawnRantsWorkflow,
];

const Workflow: React.FC = () => {
    const [selectedWorkflowIndex, setSelectedWorkflowIndex] = useState(0);
    const [workflow, setWorkflow] = useState(availableWorkflows[selectedWorkflowIndex]);
    const [workflowStatus, setWorkflowStatus] = useState<'active' | 'paused' | 'completed'>('active');

    // Handler for workflow selection
    const handleWorkflowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const index = parseInt(e.target.value);
        setSelectedWorkflowIndex(index);
        setWorkflow(availableWorkflows[index]);
        setWorkflowStatus('active'); // Reset workflow status
    };

    // Handler for control buttons
    const handleStart = () => {
        setWorkflowStatus('active');
        // In a real app, this would trigger the workflow execution
    };

    const handlePause = () => {
        setWorkflowStatus('paused');
        // In a real app, this would pause the workflow execution
    };

    const handleReset = () => {
        setWorkflowStatus('active');
        // Reset all steps to initial state
    };

    const handleSave = () => {
        // In a real app, this would save the workflow state
        alert('Workflow state saved!');
    };

    // Format current date for display
    const formatDate = () => {
        const date = new Date();
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Sample agent statuses for the presence bar
    const getActiveAgents = () => {
        // Get unique agent IDs from the current workflow
        const agentIds = [...new Set(workflow.steps.map(step => step.ownerAgentId))] as AgentKey[];

        // Sample statuses for demonstration
        return agentIds.map(id => {
            let status: StatusType;

            // Simulate different statuses
            if (id === 'josh' || id === 'james' || id === 'terrell' || id === 'twin') {
                status = 'active';
            } else if (id === 'nat' || id === 'compass') {
                status = 'pending';
            } else if (id === 'antosh') {
                status = 'error';
            } else {
                status = 'complete';
            }

            return {id, status};
        });
    };

    return (
        <WorkflowContainer>
            <WorkflowContent>
                {/* New dropdown-style workflow selector */}
                <WorkflowDropdownSelect
                    workflows={availableWorkflows}
                    selectedWorkflowIndex={selectedWorkflowIndex}
                    onSelect={(index) => {
                        setSelectedWorkflowIndex(index);
                        setWorkflow(availableWorkflows[index]);
                        setWorkflowStatus('active'); // Reset workflow status
                    }}
                    formatDate={formatDate}
                />

                <WorkflowHeader>
                    <div>
                        <WorkflowTitle>
                            {workflow.name}
                            <WorkflowStatusBadge status={workflowStatus}>
                                <ActivityIcon
                                    size={18}/> {workflowStatus.charAt(0).toUpperCase() + workflowStatus.slice(1)}
                            </WorkflowStatusBadge>
                        </WorkflowTitle>
                        <WorkflowDescription>
                            {workflow.description}
                        </WorkflowDescription>
                    </div>
                </WorkflowHeader>



                <PresenceBar role="region" aria-label="Present Agents">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '10px',
                        position: 'relative',
                        paddingRight: '15px'
                    }}>
                        <div style={{
                            position: 'absolute',
                            right: 0,
                            height: '28px',
                            width: '1px',
                            backgroundColor: 'var(--color-border)',
                            opacity: 0.5
                        }}/>
                    </div>

                    {getActiveAgents().map(({ id, status }:{id:AgentKey, status:StatusType}) => {
                        // Get agent profile from AgentProfiles or use fallback
                        const agent:Agent = Agents[id] || {
                            name: id,
                            color: '#665566',
                            short: id.charAt(0).toUpperCase()
                        };

                        // Access status metadata with fallback
                        const statusInfo = statusMeta[status] || statusMeta.todo;

                        return (
                            <PresenceAgent key={id}>
                                <AvatarCircle color={agent.color}>
                                    <AgentInitial>
                                        {agent.name && agent.name.includes('&')
                                            ? 'JT'
                                            : agent.short || agent.name.charAt(0).toUpperCase()}
                                    </AgentInitial>
                                </AvatarCircle>
                                <StepStatusDot
                                    color={statusInfo.color}
                                    error={status === "error"}
                                >
                                    {statusInfo.icon}
                                </StepStatusDot>
                            </PresenceAgent>
                        );
                    })}
                </PresenceBar>
                <WorkflowControls>
                    <ControlButton onClick={handleStart}
                                   disabled={workflowStatus === 'active' || workflowStatus === 'completed'}>
                        <PlayIcon size={18}/> Start
                    </ControlButton>
                    <ControlButton onClick={handlePause} disabled={workflowStatus !== 'active'}>
                        <PauseIcon size={18}/> Pause
                    </ControlButton>
                    <ControlButton onClick={handleReset} disabled={workflowStatus === 'completed'}>
                        <RefreshIcon size={18}/> Reset
                    </ControlButton>
                    <ControlButton onClick={handleSave}>
                        <SaveIcon size={18}/> Save
                    </ControlButton>
                </WorkflowControls>
                <WorkflowSection>
                    <WorkflowStepTable
                        steps={workflow.steps}
                        title={`${workflow.name} Steps`}
                    />
                </WorkflowSection>
            </WorkflowContent>
                            
            {/* Add the chat panel with the workflow owner as the agent and their profile */}
            <ChatPanel 
              agentId={workflow.ownerAgentId}
            />
        </WorkflowContainer>
    );
};

export default Workflow;
