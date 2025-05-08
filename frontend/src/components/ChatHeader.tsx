import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { AgentKey } from '../types/App.types';
import { ChevronLeftIcon, ChevronRightIcon } from './CustomIcons';
import { Agents } from '../data/Agents';
import {AvatarCircle} from "../styles/App.styled";

// Animation constants
const TRANSITION_DURATION = 300; // ms

interface ChatHeaderProps {
  agents: Array<{
    key: AgentKey;
    name: string;
    role: string;
  }>;
  selectedAgent?: AgentKey;
  onAgentChange: (agentKey: AgentKey) => void;
}

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--color-neutral-100);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-bottom: 1px solid var(--color-neutral-200);
`;

const CarouselTrack = styled.div<{ offset: number }>`
  display: flex;
  transition: transform ${TRANSITION_DURATION}ms ease;
  transform: translateX(${props => props.offset}px);
  width: fit-content;
`;

const AgentCard = styled.div<{ isActive: boolean; borderColor: string }>`
  position: relative;
  width: 100%;
  min-width: 100%;
  padding: var(--spacing-sm);
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  opacity: ${props => props.isActive ? 1 : 0.7};
  transition: all var(--transition-normal);
  border-left: ${props => props.isActive ? `3px solid ${props.borderColor}` : '3px solid transparent'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, ${props => props.borderColor}10, transparent 30%);
    pointer-events: none;
    opacity: ${props => props.isActive ? 1 : 0};
    transition: opacity var(--transition-normal);
  }
  
  &:hover {
    opacity: 1;
    
    &::before {
      opacity: 0.5;
    }
  }
`;

const AgentInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div<{ bgColor: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-bold);
  margin-right: var(--spacing-sm);
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

const TeamIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: var(--spacing-xs);
  gap: var(--spacing-xxs);
`;

const IndicatorDot = styled.div<{ active: boolean; color: string }>`
  width: 6px;
  height: 6px;
  border-radius: var(--border-radius-full);
  background-color: ${props => props.active ? props.color : 'var(--color-neutral-300)'};
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    transform: ${props => props.active ? 'none' : 'scale(1.2)'};
    opacity: ${props => props.active ? 1 : 0.8};
  }
  
  /* Active state adds a subtle glow */
  ${props => props.active && `
    box-shadow: 0 0 5px ${props.color}50;
  `}
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
  margin: 0 var(--spacing-xs);

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
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding-top: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  width: 100%;
`;

const ChatHeader: React.FC<PropsWithChildren<ChatHeaderProps>> = ({ agents, selectedAgent, onAgentChange, children }) => {
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Find the index of the currently selected agent
  const selectedIndex = Math.max(0, agents.findIndex(agent => agent.key === selectedAgent));
  const currentAgentKey = agents[selectedIndex]?.key || 'Nat';
  const currentAgentColor = Agents[currentAgentKey]?.color || 'var(--color-primary)';
  
  const handlePrevious = () => {
    const prevIndex = selectedIndex === 0 ? agents.length - 1 : selectedIndex - 1;
    onAgentChange(agents[prevIndex].key);
  };

  const handleNext = () => {
    const nextIndex = selectedIndex === agents.length - 1 ? 0 : selectedIndex + 1;
    onAgentChange(agents[nextIndex].key);
  };

  // Handle clicking on indicator dots
  const handleDotClick = (agentKey: AgentKey) => {
    if (typeof onAgentChange === 'function') {
      onAgentChange(agentKey);
    }
  };

  // If children are provided, render them instead of the carousel
  if (children) {
    return <HeaderContainer>{children}</HeaderContainer>;
  }

  return (
    <HeaderContainer ref={containerRef}>
      <CarouselTrack offset={-selectedIndex * slideWidth}>
        {agents.map((agent, index) => {
          const agentData = Agents[agent.key];
          return (
            <AgentCard 
              key={agent.key} 
              isActive={index === selectedIndex}
              borderColor={agentData?.color || 'var(--color-primary)'}
              onClick={() => onAgentChange(agent.key)}
            >
              <AgentInfo>
                <AvatarCircle color={agentData?.color || 'var(--color-primary)'}>
                  {agentData?.short || agent.name.charAt(0)}
                </AvatarCircle>
                <AgentDetails>
                  <AgentName>{agent.name}</AgentName>
                  <AgentRole>{agent.role}</AgentRole>
                </AgentDetails>
              </AgentInfo>
            </AgentCard>
          );
        })}
      </CarouselTrack>
      
      <CardNavigation>
        <NavButton 
          direction="left" 
          onClick={handlePrevious}
          color={currentAgentColor}
        >
          <ChevronLeftIcon />
        </NavButton>
        
        <TeamIndicator>
          {agents.map((agent, index) => (
            <IndicatorDot
              key={index}
              active={index === selectedIndex}
              color={Agents[agent.key]?.color || 'var(--color-primary)'}
              onClick={() => handleDotClick(agent.key)}
            />
          ))}
        </TeamIndicator>
        
        <NavButton 
          direction="right" 
          onClick={handleNext}
          color={currentAgentColor}
        >
          <ChevronRightIcon />
        </NavButton>
      </CardNavigation>
    </HeaderContainer>
  );
};

export default ChatHeader;
