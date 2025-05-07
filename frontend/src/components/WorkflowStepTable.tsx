import React, {useState} from 'react';
import {
    WorkflowTableContainer,
    TableHeader,
    TableTitle,
    StepRow,
    StepNumber,
    StepDescription,
    AgentInfo,
    AgentBadge,
    StepStatus,
    StatusBadge,
    StepTools,
    ToolBadge,
    ExpandButton,
    StepDetails,
    DetailSection,
    DetailTitle,
    DetailContent,
    IOContainer,
    IOSection,
    IOLabel,
    IOContent,
    CodeBlock,
    PrerequisiteList,
    PrerequisiteItem
} from '../styles/WorkflowStepTable.styled';
import {FiChevronDown, FiChevronUp, FiTool, FiArrowRight, FiClock} from 'react-icons/fi';

export interface WorkflowStep {
    id: string;
    ownerAgentId: string;
    serviceName: string;
    tools: string[];
    actionToTake: string;
    expectedIO: {
        input: {
            inputType: string;
            systemPrompt: string;
            userPrompt: string;
        };
        output: {
            output: string;
            outputType: string;
        };
    };
    prerequisiteSteps: string[];
}

interface AgentProfile {
    id: string;
    name: string;
    color: string;
    role: string;
}

interface WorkflowStepTableProps {
    steps: WorkflowStep[];
    title: string;
}

// Agent profiles mapping
const agentProfiles: { [key: string]: AgentProfile } = {
    'nat': {
        id: 'nat',
        name: 'Nat',
        color: '#8b5cf6',
        role: 'CEO/AI PM'
    },
    'brian': {
        id: 'brian',
        name: 'Brian',
        color: '#06d6a0',
        role: 'Product Manager'
    },
    'reqqy': {
        id: 'reqqy',
        name: 'Reqqy',
        color: '#ff9e00',
        role: 'Requirements Agent'
    },
    'josh': {
        id: 'josh',
        name: 'Josh',
        color: '#ff5a5f',
        role: 'Design Agent'
    },
    'james_terrell': {
        id: 'james_terrell',
        name: 'James & Terrell',
        color: '#0084ff',
        role: 'Developer Team'
    },
    'james': {
        id: 'james',
        name: 'James',
        color: '#3b82f6',
        role: 'Developer'
    },
    'terrell': {
        id: 'terrell',
        name: 'Terrell',
        color: '#2563eb',
        role: 'Developer'
    },
    'antosh': {
        id: 'antosh',
        name: 'Antosh',
        color: '#4c1d95',
        role: 'Testing Agent'
    },
    'compass': {
        id: 'compass',
        name: 'Compass',
        color: '#ec4899',
        role: 'Router Agent'
    }
};

const getStepStatus = (stepIndex: number, totalSteps: number): 'completed' | 'in-progress' | 'pending' => {
    if (stepIndex < 3) return 'completed';
    if (stepIndex === 3) return 'in-progress';
    return 'pending';
};

const WorkflowStepTable: React.FC<WorkflowStepTableProps> = ({steps, title}) => {
    const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

    const toggleStepExpansion = (stepId: string) => {
        setExpandedSteps(prevState => {
            const newState = new Set(prevState);
            if (newState.has(stepId)) {
                newState.delete(stepId);
            } else {
                newState.add(stepId);
            }
            return newState;
        });
    };

    return (
        <WorkflowTableContainer>
            <TableHeader>
                <TableTitle>{title}</TableTitle>
            </TableHeader>

            {steps.map((step, index) => {
                const isExpanded = expandedSteps.has(step.id);
                const status = getStepStatus(index, steps.length);
                const agent = agentProfiles[step.ownerAgentId] || {
                    id: step.ownerAgentId,
                    name: step.ownerAgentId,
                    color: '#999999',
                    role: 'Unknown Agent'
                };

                return (
                    <React.Fragment key={step.id}>
                        <StepRow>
                            <StepNumber>{index + 1}</StepNumber>
                            <StepDescription>
                                <strong>{step.serviceName}</strong>
                                <p>{step.actionToTake}</p>
                            </StepDescription>
                            <AgentInfo>
                                <AgentBadge style={{backgroundColor: agent.color}}>
                                    {agent.name.charAt(0)}
                                </AgentBadge>
                                <span>{agent.name}</span>
                            </AgentInfo>
                            <StepStatus>
                                <StatusBadge status={status}>
                                    {status === 'completed' && 'Completed'}
                                    {status === 'in-progress' && 'In Progress'}
                                    {status === 'pending' && 'Pending'}
                                </StatusBadge>
                            </StepStatus>
                            <StepTools>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path
                                        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                </svg>
                                {step.tools.map((tool, idx) => (
                                    <ToolBadge key={idx}>{tool}</ToolBadge>
                                ))}
                            </StepTools>
                            <ExpandButton onClick={() => toggleStepExpansion(step.id)}>
                                {isExpanded ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 15l-6-6-6 6"/>
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6"/>
                                    </svg>
                                )}
                            </ExpandButton>
                        </StepRow>

                        {isExpanded && (
                            <StepDetails>
                                <DetailSection>
                                    <DetailTitle>Action to Take:</DetailTitle>
                                    <DetailContent>{step.actionToTake}</DetailContent>
                                </DetailSection>

                                <IOContainer>
                                    <IOSection>
                                        <IOLabel>Input ({step.expectedIO.input.inputType}):</IOLabel>
                                        <IOContent>
                                            <CodeBlock>
                                                <p><strong>System:</strong> {step.expectedIO.input.systemPrompt}</p>
                                                <p><strong>User:</strong> {step.expectedIO.input.userPrompt}</p>
                                            </CodeBlock>
                                        </IOContent>
                                    </IOSection>
                                    <PrerequisiteList>
                                        Prerequisites:
                                        {step.prerequisiteSteps.map(prereq => (
                                            <PrerequisiteItem key={prereq}>{prereq}</PrerequisiteItem>
                                        ))}
                                    </PrerequisiteList>
                                </IOContainer>
                            </StepDetails>
                        )}
                    </React.Fragment>
                );
            })}
        </WorkflowTableContainer>
    );
};

export default WorkflowStepTable;