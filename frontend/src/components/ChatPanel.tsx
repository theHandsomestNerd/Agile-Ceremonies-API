import React, {useEffect, useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import SvgIcon from './SvgIcon';
import {ChatInput as StyledChatInput, ChatInputBar, ChatMessagesPanel} from '../styles/Chat.styled';
import {AgentProfile, AgentProfiles} from '../data/AgentProfiles';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import {AgentKey} from '../types/App.types';
import {Agents} from "../data/Agents";

const agents = [
    {key: 'Compass' as AgentKey, name: 'Compass', role: 'HR/Router'},
    {key: 'Nat' as AgentKey, name: 'Nat', role: 'CEO/AI PM'},
    {key: 'Brian' as AgentKey, name: 'Brian', role: 'Product Manager'},
    {key: 'Reqqy' as AgentKey, name: 'Reqqy', role: 'Requirements Agent'},
    {key: 'Josh' as AgentKey, name: 'Josh', role: 'Graphic Designer'},
    {key: 'James' as AgentKey, name: 'James', role: 'Backend Developer'},
    {key: 'Terrell' as AgentKey, name: 'Terrell', role: 'Frontend Developer'},
    {key: 'Antosh' as AgentKey, name: 'Antosh', role: 'Testing & Analytics'},
    {key: 'Manman' as AgentKey, name: 'Man-Man', role: 'Maintenance'},
    {key: 'Lia' as AgentKey, name: 'Lia', role: 'Social Media'},
];

// Example messages for each agent
const agentMessages = {
    Nat: [{text: "Welcome! I'm Nat, your AI Project Manager. How can I help you today?", isUser: false}],
    Brian: [{
        text: "Hi there! Brian here, Product Manager. What product features are you interested in?",
        isUser: false
    }],
    Reqqy: [{
        text: "Hello! I'm Reqqy, your Requirements Agent. Let's gather your project specifications.",
        isUser: false
    }],
    Josh: [{text: "Hey! Josh here. Need help with design? I'm your graphic design expert!", isUser: false}],
    James: [{
        text: "Greetings! I'm James, backend developer. How can I assist with your server-side needs?",
        isUser: false
    }],
    Terrell: [{
        text: "Hi! I'm Terrell, your frontend developer. Let's create amazing user interfaces together!",
        isUser: false
    }],
    Antosh: [{text: "Hello! Antosh at your service. Need help with testing or analytics?", isUser: false}],
    Manman: [{
        text: "Hey there! Man-Man here. I'll help maintain your systems and keep everything running smoothly.",
        isUser: false
    }],
    Lia: [{text: "Hi! I'm Lia, your social media specialist. Let's boost your online presence!", isUser: false}],
    Compass: [{
        text: "Greetings! I'm Compass, here to help route your requests and assist with team coordination.",
        isUser: false
    }],
};
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
        <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </SvgIcon>
);

// Animation constants
const ANIMATION_DURATION = 300; // ms
const HEADER_HEIGHT = 60; // Height of the app header

// Animations
const dotPulse = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
`;
const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(20px);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const blink = keyframes`
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(0.98);
    }
`;
// Thinking animation dot component with pulsing dots
const ThinkingDots = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
`;
const Dot = styled.span<{ delay: number; agentColor?: string }>`
    color: ${props => props.agentColor || 'var(--color-accent-josh)'};
    font-weight: 700;
    margin: 0 3px;
    animation: ${dotPulse} 1.4s infinite;
    animation-delay: ${props => props.delay}ms;
`;
const ThinkingDotsComponent = (props:{dotColor:string}) => (
    <ThinkingDots aria-live="polite" aria-atomic="true">
        <Dot delay={0} agentColor={props.dotColor}>•</Dot>
        <Dot delay={200} agentColor={props.dotColor}>•</Dot>
        <Dot delay={400} agentColor={props.dotColor}>•</Dot>
    </ThinkingDots>
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

const ChatPanelStyled = styled.div<{ isOpen: boolean }>`
    width: 350px;
    height: calc(100% - ${HEADER_HEIGHT}px);
    margin-top: ${HEADER_HEIGHT}px;
    background-color: var(--color-neutral-100);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform ${ANIMATION_DURATION}ms ease;
    pointer-events: ${props => props.isOpen ? 'all' : 'none'};
    border-left: var(--border-width-medium) solid var(--color-neutral-200);
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

const TimeStamp = styled.span<{ isHuman?: boolean }>`
    font-size: 0.75rem;
    color: var(--color-neutral-900);
    margin-top: 4px;
    display: block;
    text-align: right;
`;

// Custom chat bubble with gradient styling for agent messages and different shape for human/agent
// const CustomChatBubble = styled(ChatBubble)<{ you: boolean; isStreaming?: boolean }>`
//     background: ${(p) =>
//             !p.you
//                     ? "linear-gradient(90deg, var(--color-josh-primary) 35%, var(--color-josh-secondary) 100%)"
//                     : "var(--color-neutral-200)"};
//     color: ${(p) => (!p.you ? "var(--color-neutral-100)" : "var(--color-neutral-900)")};
//     border: 1px solid ${props => props.you
//             ? 'rgba(230, 230, 240, 0.7)'
//             : 'rgba(139, 92, 246, 0.3)'};
//     /* Different shapes for human vs agent */
//     border-radius: ${props => props.you
//             ? '18px 18px 4px 18px' /* Human: rounded with sharp bottom-right */
//             : '18px 18px 18px 4px' /* Agent: rounded with sharp bottom-left */};
//
//     /* Streaming text animation fixed to wrap properly */
//     ${props => props.isStreaming && css`
//         .streaming-text {
//             display: inline-block;
//             max-width: 100%;
//             overflow-wrap: break-word;
//             word-wrap: break-word;
//             word-break: break-word;
//             position: relative;
//
//             &:after {
//                 content: '|';
//                 display: inline-block;
//                 animation: ${dotPulse} 0.8s infinite;
//                 font-weight: normal;
//                 opacity: 0.7;
//             }
//         }
//     `}
// `;

// Custom input styling with medium text color
const ChatInput = styled(StyledChatInput)`
    color: var(--color-neutral-600);

    &::placeholder {
        color: var(--color-neutral-400);
    }
`;


const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
    max-width: 600px;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    background: var(--color-neutral-100);
    overflow: hidden;
    border: 1px solid var(--color-neutral-200);
`;

const MessagesContainer = styled.div`
    flex: 1;
    padding: var(--spacing-md);
    overflow-y: auto;
    background: var(--color-neutral-100);
`;

const InputContainer = styled.div`
    padding: var(--spacing-base);
    border-top: 1px solid rgba(203, 213, 225, 0.4);
    display: flex;
`;

const MessageInput = styled.input`
    flex: 1;
    padding: var(--spacing-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-base);

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
`;

// Custom send button
const SendButton = styled.button`
    background: linear-gradient(135deg, #8b5cf6, #7209b7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        background: linear-gradient(135deg, #9461fb, #7f18c9);
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;


const ChatPanel: React.FC = () => {
    const [selectedAgent, setSelectedAgent] = useState<AgentKey>('Nat');
    const [messages, setMessages] = useState<{
        [key in AgentKey]?: Array<{
            text: string;
            isUser: boolean
        }>
    }>(agentMessages);
    const [inputValue, setInputValue] = useState('');
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    // Get current agent color and data for styling
    const currentAgentData = Agents[selectedAgent] || Agents.Nat;
    const currentAgentColor = currentAgentData.color || 'var(--color-primary)';

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, selectedAgent]);

    const handleAgentChange = (agentKey: AgentKey) => {
        if (agentKey && agentKey !== selectedAgent) {
            setSelectedAgent(agentKey);
            // You could add other actions here when agent changes
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Update messages for the current agent
            const currentAgentMessages = messages[selectedAgent] || [];
            const updatedMessages = {
                ...messages,
                [selectedAgent]: [
                    ...currentAgentMessages,
                    {text: inputValue, isUser: true},
                    {
                        text: `This is a response from ${selectedAgent.charAt(0).toUpperCase() + selectedAgent.slice(1)}`,
                        isUser: false
                    }
                ]
            };

            setMessages(updatedMessages);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const currentMessages = messages[selectedAgent] || [];

    return (
        <PanelContainer style={{borderColor: `${currentAgentColor}30`}}>
            <ChatHeader
                agents={agents}
                selectedAgent={selectedAgent}
                onAgentChange={handleAgentChange}
            />

            <MessagesContainer ref={messagesContainerRef}>
                {currentMessages.map((message, index) => (
                    <ChatBubble
                        key={index}
                        message={message.text}
                        isUser={message.isUser}
                        you={message.isUser}
                        agentKey={message.isUser ? undefined : selectedAgent}
                    >
                        {message.text}
                    </ChatBubble>
                ))}
            </MessagesContainer>

            <InputContainer>
                <MessageInput
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                        borderColor: `${currentAgentColor}40`,
                        boxShadow: `0 0 0 1px ${currentAgentColor}20`
                    }}
                />
                <SendButton
                    onClick={handleSendMessage}
                    style={{
                        background: `linear-gradient(135deg, ${currentAgentColor}, ${currentAgentColor}dd)`
                    }}
                >
                    <SendIcon/>
                </SendButton>
            </InputContainer>
        </PanelContainer>
    );
};


// Sample message type
interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    isStreaming?: boolean;
}

// Helper function to get agent color
// const getAgentColor = (agentId: string): string => {
//     const agent = AgentProfiles[agentId.toLowerCase()];
//     return agent ? agent.color : 'var(--color-josh-primary)';
// };
//
// const getAgentAccentColor = (agentId: string): string => {
//     return agentId.toLowerCase() ? `var(--color-${agentId.toLowerCase()}-primary)` : 'var(--color-josh-primary)';
// };
//
// // Helper function to get agent initial
// const getAgentInitial = (agentId: string): string => {
//     const agent = AgentProfiles[agentId.toLowerCase()];
//     if (agent) {
//         return agent.name && agent.name.includes('&')
//             ? 'JT'
//             : agent.short || agent.name.charAt(0).toUpperCase();
//     }
//     return agentId.charAt(0).toUpperCase();
// };


const ChatPanelComponent: React.FC<ChatPanelProps> = ({
                                                          agentId = 'Assistant',
                                                          agentProfile
                                                      }) => {

    const agentName = agentProfile?.name || agentId.charAt(0).toUpperCase() + agentId.slice(1);
    const agentColor = agentProfile?.color;
    const agentAccentColor = `var(--color-${agentId.toLowerCase()}-secondary)`;
    const agentInitial = agentProfile?.short || "?";
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [streamedMessage, setStreamedMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hello! How can I help you with your workflows today?',
            isUser: false,
            timestamp: new Date()
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const thinkingRef = useRef<HTMLDivElement>(null);

    // Process agent information


    // Scroll to bottom of messages when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [messages, isThinking, isStreaming]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Simulate text streaming with a more natural effect and word wrap
    const streamText = (text: string) => {
        setIsStreaming(true);
        setStreamedMessage('');

        let currentIndex = 0;
        const textLength = text.length;

        // Variable speed to simulate natural typing
        const getRandomSpeed = () => {
            // Occasionally pause longer at punctuation
            const char = text[currentIndex] || '';
            if (['.', ',', '!', '?'].includes(char)) {
                return Math.floor(Math.random() * 150) + 50;
            }
            return Math.floor(Math.random() * 30) + 15;
        };

        const typeNextChar = () => {
            if (currentIndex < textLength) {
                setStreamedMessage(prev => prev + text[currentIndex]);
                currentIndex++;
                setTimeout(typeNextChar, getRandomSpeed());
            } else {
                // Done typing, add to messages
                setTimeout(() => {
                    setIsStreaming(false);

                    // Add the final message to the messages array
                    const botResponse: Message = {
                        id: Date.now().toString(),
                        text: text,
                        isUser: false,
                        timestamp: new Date()
                    };

                    setMessages(prevMessages => [...prevMessages, botResponse]);
                }, 300); // Short delay before completing
            }
        };

        // Start the typing animation
        typeNextChar();
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

            // Mock response text
            const responseText = `
I
understand
your
question
about
"${message.substring(0, 20)}${message.length > 20 ? '...' : ''}".Let
me
help
you
with that workflow
issue.`;

            // Simulate thinking and then start streaming
            setTimeout(() => {
                setIsThinking(false);
                streamText(responseText);
            }, 2000);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const [selectedAgent, setSelectedAgent] = useState<AgentKey>('Compass')

    const handleAgentChange = (agentKey: AgentKey) => {
        if (agentKey)
            setSelectedAgent(agentKey)
        else
            setSelectedAgent('Compass')
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };
    return (
        <ChatContainer>
            <ChatFabButton
                isOpen={isOpen}
                onClick={toggleChat}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                style={isOpen ? {} : {}}
            >
                <ChatIcon/>
            </ChatFabButton>

            <ChatPanelStyled isOpen={isOpen}>
                <ChatHeader
                    agents={agents}
                    selectedAgent={selectedAgent}
                    onAgentChange={handleAgentChange}
                />

                <ChatMessagesPanel>
                    {messages.map(msg => (
                        <ChatBubble
                            you={msg.isUser}
                            key={msg.id}
                            message={msg.text}
                            isUser={msg.isUser}
                            isStreaming={msg.isStreaming}>
                            {msg.text}
                            <TimeStamp isHuman={msg.isUser}>{formatTime(msg.timestamp)}</TimeStamp>
                        </ChatBubble>
                    ))}

                    {isThinking && (
                        <ChatBubble
                            isUser={false}
                            you={false}
                            message="">
                            <ThinkingDotsComponent dotColor={agentAccentColor}/>
                        </ChatBubble>
                    )}

                    {isStreaming && (
                        <ChatBubble you={false} isStreaming isUser={false} message={""}>
                            <div className="streaming-text">
                                {streamedMessage}
                            </div>
                        </ChatBubble>
                    )}

                    <div ref={messagesEndRef}/>
                </ChatMessagesPanel>

                <ChatInputBar>
                    <ChatInput
                        type="text"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <SendButton
                        onClick={handleSendMessage}
                        aria-label="Send message"
                    >
                        <SendIcon/>
                    </SendButton>
                </ChatInputBar>
            </ChatPanelStyled>
        </ChatContainer>
    );
};

export default ChatPanelComponent;
