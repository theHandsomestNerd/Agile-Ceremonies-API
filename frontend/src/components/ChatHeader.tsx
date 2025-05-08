import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { AgentKey } from '../types/App.types';
import { ChevronLeftIcon, ChevronRightIcon } from './CustomIcons';
import { Agents } from '../data/Agents';

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
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, ${props => props.borderColor}10, transparent 30%);
    pointer-events: none;
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
  margin-top: var(--spacing-xs);
  gap: var(--spacing-xs);
`;

const IndicatorDot = styled.div<{ active: boolean; color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.color : 'var(--color-neutral-300)'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${props => props.active ? 'none' : 'scale(1.2)'};
  }
`;

const NavButton = styled.button<{ direction: 'left' | 'right'; color: string }>`
  background-color: ${props => props.color};
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 8px;' : 'right: 8px;'}
  z-index: 10;
  opacity: 0.9;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-50%) scale(1.1);
    opacity: 1;
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
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
`;

const ChatHeader: React.FC<PropsWithChildren<ChatHeaderProps>> = ({ agents, selectedAgent, onAgentChange }) => {
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
  const selectedIndex = agents.findIndex(agent => agent.key === selectedAgent) || 0;
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
            >
              <AgentInfo>
                <Avatar bgColor={agentData?.color || 'var(--color-primary)'}>
                  {agentData?.short || agent.name.charAt(0)}
                </Avatar>
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
              onClick={() => onAgentChange(agent.key)}
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
