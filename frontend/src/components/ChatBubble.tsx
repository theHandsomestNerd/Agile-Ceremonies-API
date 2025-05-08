import React, {PropsWithChildren} from 'react';
import styled, {css, keyframes} from 'styled-components';
import { AgentKey } from '../types/App.types';
import { Agents } from '../data/Agents';

// Animation for the typing indicator
const dotPulse = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
`;

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  agentKey?: AgentKey;
  you?: boolean; // Alias for isUser for compatibility
  isStreaming?: boolean; // For text streaming animation
  children?: React.ReactNode; // Allow direct children content
}

interface StyledBubbleProps {
  isUser: boolean;
  agentKey?: AgentKey;
  you?: boolean; // Alias for isUser for compatibility
  isStreaming?: boolean;
}

const BubbleWrapper = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  margin-bottom: var(--spacing-base);
  width: 100%;
`;

const Bubble = styled.div<StyledBubbleProps>`
  max-width: 80%;
  padding: var(--spacing-sm) var(--spacing-md);
  
  /* Different shapes for human vs agent messages */
  border-radius: ${props => 
    props.isUser 
      ? '18px 18px 4px 18px' /* Human: rounded with sharp bottom-right */
      : '18px 18px 18px 4px' /* Agent: rounded with sharp bottom-left */
  };
  
  /* Background for messages using agent avatarBg */
  background: ${props => {
    if (props.isUser) {
      return 'var(--color-neutral-200)';
    }
    
    // Use the agent's avatarBg if available
    if (props.agentKey && Agents[props.agentKey]) {
      return Agents[props.agentKey].avatarBg || 'var(--color-primary)';
    }
    
    // Default background if no agent or avatarBg is found
    return 'linear-gradient(90deg, var(--color-josh-primary) 35%, var(--color-josh-secondary) 100%)';
  }};
  
  color: ${props => props.isUser ? 'var(--color-neutral-900)' : 'var(--color-neutral-100)'};
  
  /* Custom border styling */
  border: 1px solid ${props => props.isUser
    ? 'rgba(230, 230, 240, 0.7)'
    : 'rgba(139, 92, 246, 0.3)'};
  
  /* Streaming text animation */
  ${props => props.isStreaming && css`
    .streaming-text {
      display: inline-block;
      max-width: 100%;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      position: relative;

      &:after {
        content: '|';
        display: inline-block;
        animation: ${dotPulse} 0.8s infinite;
        font-weight: normal;
        opacity: 0.7;
      }
    }
  `}
`;

const MessageText = styled.p`
  margin: 0;
  line-height: var(--line-height-normal);
  word-break: break-word;
`;

const ChatBubble: React.FC<PropsWithChildren<ChatBubbleProps>> = ({ 
  message, 
  isUser, 
  agentKey, 
  isStreaming,
  children 
}) => {
  // Support both isUser and you props for compatibility

  // For debugging - log when agent key is present
  if (agentKey) {
    console.log("ChatBubble rendering with agent key:", agentKey, 
                "agent exists:", agentKey in Agents, 
                "agent data:", Agents[agentKey as AgentKey]);
  }
  
  return (
    <BubbleWrapper isUser={isUser}>
      <Bubble 
        isUser={isUser}
        you={isUser}
        agentKey={agentKey}
        isStreaming={isStreaming}
      >
        {children ? children : (
          isStreaming ? (
            <div className="streaming-text">{message}</div>
          ) : (
            <MessageText>{message}</MessageText>
          )
        )}
      </Bubble>
    </BubbleWrapper>
  );
};

export default ChatBubble;
