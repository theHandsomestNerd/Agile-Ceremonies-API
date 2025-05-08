import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AgentKey } from '../types/App.types';
import { ChevronLeftIcon, ChevronRightIcon } from './CustomIcons';
import { Agents } from '../data/Agents';
import { AvatarCircle } from "../styles/App.styled";

interface ChatHeaderProps {
    selectedAgent?: AgentKey;
    onAgentChange?: (agentKey: AgentKey) => void;
}

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    background: var(--color-neutral-100);
    border-top-left-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-bottom: 1px solid var(--color-neutral-200);
`;

const AgentCard = styled.div<{ borderColor: string }>`
    position: relative;
    width: 100%;
    padding: var(--spacing-sm);
    background-color: transparent;
    overflow: hidden;
    border-left: 4px solid ${props => props.borderColor};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, ${props => props.borderColor}10, transparent 30%);
        pointer-events: none;
        opacity: 1;
    }
`;

const AgentInfo = styled.div`
    display: flex;
    align-items: center;
`;

const AgentDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const AgentName = styled.h3`
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-bold);
    margin: 0;
    color: var(--color-neutral-900);
`;

const AgentRole = styled.p`
    font-size: var(--font-size-xs);
    color: var(--color-neutral-500);
    margin: 0;
    position: relative;

    &::before {
        content: '🔹';
        font-size: 8px;
        margin-right: 4px;
    }
`;

const NavButton = styled.button<{ direction: 'left' | 'right'; color: string }>`
    background-color: ${props => props.color};
    color: white;
    border: none;
    border-radius: var(--border-radius-full);
    width: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-bounce);
    opacity: 0.85;

    &:hover {
        filter: brightness(1.1);
        transform: scale(1.08);
        opacity: 1;
        box-shadow: var(--shadow-sm);
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        width: 14px;
        height: 14px;
    }
`;

const CardNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-xs);
    margin-top: var(--spacing-xs);
    width: 100%;
`;

const AgentCounter = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-neutral-600);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ChatHeader: React.FC<PropsWithChildren<ChatHeaderProps>> = ({
    children, 
    selectedAgent = 'compass', 
    onAgentChange
}) => {
    // If children are provided, render them instead of the agent header
    if (children) {
        return <HeaderContainer>{children}</HeaderContainer>;
    }

    // Get all agent keys for navigation
    const agentKeys = Object.keys(Agents) as AgentKey[];
    
    // Find the current agent's position in the list
    const currentIndex = agentKeys.indexOf(selectedAgent);
    const currentAgentData = Agents[selectedAgent];
    const currentAgentColor = currentAgentData?.color || 'var(--color-primary)';

    // Log the current agent for debugging
    console.log("ChatHeader rendering with agent:", selectedAgent, currentAgentData);

    const handlePrevious = () => {
        if (typeof onAgentChange === 'function') {
            const prevIndex = currentIndex <= 0 ? agentKeys.length - 1 : currentIndex - 1;
            const newAgent = agentKeys[prevIndex];
            console.log("Changing to previous agent:", newAgent);
            onAgentChange(newAgent);
        }
    };

    const handleNext = () => {
        if (typeof onAgentChange === 'function') {
            const nextIndex = currentIndex >= agentKeys.length - 1 ? 0 : currentIndex + 1;
            const newAgent = agentKeys[nextIndex];
            console.log("Changing to next agent:", newAgent);
            onAgentChange(newAgent);
        }
    };

    return (
        <HeaderContainer>
            {/* Display only the currently selected agent */}
            <AgentCard borderColor={currentAgentColor}>
                <AgentInfo>
                    <AvatarCircle color={currentAgentColor}>
                        {currentAgentData?.short || currentAgentData?.name?.charAt(0) || '?'}
                    </AvatarCircle>
                    <AgentDetails>
                        <AgentName>{currentAgentData?.name || selectedAgent}</AgentName>
                        <AgentRole>{currentAgentData?.role || 'Agent'}</AgentRole>
                    </AgentDetails>
                </AgentInfo>
            </AgentCard>

            <CardNavigation>
                <NavButton
                    direction="left"
                    onClick={handlePrevious}
                    color={currentAgentColor}
                >
                    <ChevronLeftIcon/>
                </NavButton>

                <AgentCounter>
                    {currentIndex + 1} / {agentKeys.length}
                </AgentCounter>

                <NavButton
                    direction="right"
                    onClick={handleNext}
                    color={currentAgentColor}
                >
                    <ChevronRightIcon/>
                </NavButton>
            </CardNavigation>
        </HeaderContainer>
    );
};

export default ChatHeader;
