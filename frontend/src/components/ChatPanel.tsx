import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SvgIcon from './SvgIcon';
import { ChatBubble, ChatHeader as StyledChatHeader, ChatInputBar, ChatInput as StyledChatInput, ChatMessagesPanel, ChatSendBtn } from '../styles/Chat.styled';
import { AgentInitial, AvatarCircle } from '../styles/App.styled';
import { AgentProfile, AgentProfiles } from '../data/AgentProfiles';

const ChatIcon = () => (
    <SvgIcon>
      <path
          d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"/>
    </SvgIcon>
);

const SendIcon = () => (
    <SvgIcon>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
    </SvgIcon>
);

const CloseIcon = () => (
    <SvgIcon>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </SvgIcon>
);

// Animation constants
const ANIMATION_DURATION = 300; // ms

// Thinking animation dot component
const ThinkingDots = () => (
    <div aria-live="polite" aria-atomic="true">
        <span>
            <span
                style={{
                    color: "var(--color-accent-josh)",
                    fontWeight: 700,
                    margin: "0 3px",
                }}
            >
                •
            </span>
            <span
                style={{
                    color: "var(--color-accent-josh)",
                    fontWeight: 700,
                    margin: "0 3px",
                    opacity: 0.6,
                }}
            >
                •
            </span>
            <span
                style={{
                    color: "var(--color-accent-josh)",
                    fontWeight: 700,
                    margin: "0 3px",
                    opacity: 0.44,
                }}
            >
                •
            </span>
        </span>
    </div>
);

interface ChatPanelProps {
  agentId?: string;
  agentProfile?: AgentProfile;
}

// Styled components
const ChatContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;

const ChatFabButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #7209b7);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.5);
  cursor: pointer;
  display: ${props => props.isOpen ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;
  pointer-events: all;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
    background: linear-gradient(135deg, #9461fb, #7f18c9);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  svg {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const ChatPanel = styled.div<{ isOpen: boolean }>`
  width: 800px;
  height: 100%;
  background-color: var(--color-neutral-100);
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform ${ANIMATION_DURATION}ms ease;
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  border-left: var(--border-width-medium) solid var(--color-neutral-200);
`;

const CustomChatHeader = styled(StyledChatHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-neutral-700);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-josh-primary);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const TimeStamp = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
  display: block;
  text-align: right;
`;

// Sample message type
interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Helper function to get agent color
const getAgentColor = (agentId: string): string => {
  const agent = AgentProfiles[agentId.toLowerCase()];
  return agent ? agent.color : 'var(--color-josh-primary)';
};

// Helper function to get agent initial
const getAgentInitial = (agentId: string): string => {
  const agent = AgentProfiles[agentId.toLowerCase()];
  if (agent) {
    return agent.name && agent.name.includes('&')
      ? 'JT'
      : agent.short || agent.name.charAt(0).toUpperCase();
  }
  return agentId.charAt(0).toUpperCase();
};

const ChatPanelComponent: React.FC<ChatPanelProps> = ({
  agentId = 'Assistant',
  agentProfile
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with your workflows today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Process agent information
  const agentName = agentProfile?.name || agentId.charAt(0).toUpperCase() + agentId.slice(1);
  const agentColor = agentProfile?.color || getAgentColor(agentId);
  const agentInitial = agentProfile?.short || getAgentInitial(agentId);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      const newUserMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages([...messages, newUserMessage]);
      setMessage('');
      
      // Show thinking animation
      setIsThinking(true);

      // Simulate response after a short delay
      setTimeout(() => {
        setIsThinking(false);

        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `I'm processing your request about "${message.substring(0, 30)}${message.length > 30 ? '...' : ''}"`,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 2000);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <ChatContainer>
      <ChatFabButton 
        isOpen={isOpen} 
        onClick={toggleChat} 
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <ChatIcon />
      </ChatFabButton>
      
      <ChatPanel isOpen={isOpen}>
        <CustomChatHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <AvatarCircle color={agentColor}>
              <AgentInitial>{agentInitial}</AgentInitial>
            </AvatarCircle>
            Chat with {agentName}
          </div>
          <CloseButton onClick={toggleChat} aria-label="Close chat">
            <CloseIcon />
          </CloseButton>
        </CustomChatHeader>
        
        <ChatMessagesPanel>
          {messages.map(msg => (
            <ChatBubble key={msg.id} you={msg.isUser}>
              {msg.text}
              <TimeStamp>{formatTime(msg.timestamp)}</TimeStamp>
            </ChatBubble>
          ))}

          {isThinking && (
            <ChatBubble you={false} style={{ display: 'inline-block', minWidth: 'auto' }}>
              <ThinkingDots />
            </ChatBubble>
          )}

          <div ref={messagesEndRef} />
        </ChatMessagesPanel>
        
        <ChatInputBar>
          <StyledChatInput
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e:any) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <ChatSendBtn
            onClick={handleSendMessage}
            aria-label="Send message"
          >
            Send
          </ChatSendBtn>
        </ChatInputBar>
      </ChatPanel>
    </ChatContainer>
  );
};

export default ChatPanelComponent;
