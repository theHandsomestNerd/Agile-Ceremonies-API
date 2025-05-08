import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';
import { AgentKey } from '../types/App.types';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  agentKey?: AgentKey;
}

interface StyledBubbleProps {
  isUser: boolean;
  agentKey?: AgentKey;
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
  border-radius: ${props => 
    props.isUser 
      ? 'var(--border-radius-lg) var(--border-radius-lg) 0 var(--border-radius-lg)' 
      : 'var(--border-radius-lg) var(--border-radius-lg) var(--border-radius-lg) 0'
  };
  background: ${props => {
    if (props.isUser) {
      return 'var(--color-neutral-200)';
    }
    
    // Use the agent's gradient if an agent key is provided
    switch(props.agentKey) {
      case 'Nat':
        return 'var(--color-nat-gradient)';
      case 'Brian':
        return 'var(--color-brian-gradient)';
      case 'Reqqy':
        return 'var(--color-reqqy-gradient)';
      case 'Josh':
        return 'var(--color-josh-gradient)';
      case 'James':
        return 'var(--color-james-gradient)';
      case 'Terrell':
        return 'var(--color-terrell-gradient)';
      case 'Antosh':
        return 'var(--color-antosh-gradient)';
      case 'Man-Man':
        return 'var(--color-manman-gradient)';
      case 'Lia':
        return 'var(--color-lia-gradient)';
      case 'Compass':
        return 'var(--color-compass-gradient)';
      default:
        return 'var(--color-primary-gradient, linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%))';
    }
  }};
  color: ${props => props.isUser ? 'var(--color-neutral-900)' : 'white'};
  box-shadow: var(--shadow-sm);
`;

const MessageText = styled.p`
  margin: 0;
  line-height: var(--line-height-normal);
  word-break: break-word;
`;

const ChatBubble: React.FC<PropsWithChildren<ChatBubbleProps>> = ({ message, isUser, agentKey }) => {
  return (
    <BubbleWrapper isUser={isUser}>
      <Bubble isUser={isUser} agentKey={agentKey}>
        <MessageText>{message}</MessageText>
      </Bubble>
    </BubbleWrapper>
  );
};

export default ChatBubble;
