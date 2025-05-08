import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SvgIcon from './SvgIcon';

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

interface ChatPanelProps {
  agentId?: string;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #7209b7);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;
  pointer-events: all;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
  
  svg {
    font-size: 28px;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(360deg)' : 'rotate(0deg)'};
  }
`;

const ChatPanel = styled.div<{ isOpen: boolean }>`
  width: 400px;
  height: 100%;
  background-color: rgba(20, 20, 40, 0.95);
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform ${ANIMATION_DURATION}ms ease;
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  border-left: 1px solid rgba(139, 92, 246, 0.2);
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
`;

const ChatTitle = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
  
  svg {
    font-size: 24px;
  }
`;

const ChatMessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-light);
  }
`;

const ChatInputContainer = styled.div`
  padding: 16px;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  align-items: center;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 20px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  background-color: rgba(30, 30, 60, 0.6);
  color: white;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: rgba(139, 92, 246, 0.6);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #7209b7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  }
  
  svg {
    font-size: 20px;
  }
`;

// Message styles
const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  padding: 10px 16px;
  border-radius: 18px;
  margin-bottom: 12px;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.isUser ? 'rgba(139, 92, 246, 0.3)' : 'rgba(30, 30, 60, 0.6)'};
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
`;

const TimeStamp = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
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

const ChatPanelComponent: React.FC<ChatPanelProps> = ({ agentId = 'Assistant' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with your workflows today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
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
      
      // Simulate response after a short delay
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `I'm processing your request about "${message.substring(0, 30)}${message.length > 30 ? '...' : ''}"`,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 1000);
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
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </ChatFabButton>
      
      <ChatPanel isOpen={isOpen}>
        <ChatHeader>
          <ChatTitle>Chat with {agentId}</ChatTitle>
          <CloseButton onClick={toggleChat} aria-label="Close chat">
            <CloseButton />
          </CloseButton>
        </ChatHeader>
        
        <ChatMessagesContainer>
          {messages.map(msg => (
            <MessageBubble key={msg.id} isUser={msg.isUser}>
              <MessageText>{msg.text}</MessageText>
              <TimeStamp>{formatTime(msg.timestamp)}</TimeStamp>
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </ChatMessagesContainer>
        
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e:any) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SendButton 
            onClick={handleSendMessage}
            aria-label="Send message"
          >
            <SendButton />
          </SendButton>
        </ChatInputContainer>
      </ChatPanel>
    </ChatContainer>
  );
};

export default ChatPanelComponent;
