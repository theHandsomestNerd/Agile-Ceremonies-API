import React, {useEffect, useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import SvgIcon from './SvgIcon';
import {
    ChatInput as StyledChatInput,
    ChatInputBar,
    ChatMessagesPanel,
    EditableUUID, IconButton, MenuContainer,
    MenuDropdown,
    MenuItem,
    UUIDContainer
} from '../styles/Chat.styled';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import {AgentKey} from '../types/App.types';
import {Agents} from "../data/Agents";
import {DeleteIcon, ExportIcon, RefreshIcon, RenameIcon, VerticalDotsIcon} from "./ChatIcons";

// Example messages for each agent
const agentMessages = {
    nat: [{text: "Welcome! I'm Nat, your AI Project Manager. How can I help you today?", isUser: false}],
    brian: [{
        text: "Hi there! Brian here, Product Manager. What product features are you interested in?",
        isUser: false
    }],
    reqqy: [{
        text: "Hello! I'm Reqqy, your Requirements Agent. Let's gather your project specifications.",
        isUser: false
    }],
    josh: [{text: "Hey! Josh here. Need help with design? I'm your graphic design expert!", isUser: false}],
    james: [{
        text: "Greetings! I'm James, backend developer. How can I assist with your server-side needs?",
        isUser: false
    }],
    terrell: [{
        text: "Hi! I'm Terrell, your frontend developer. Let's create amazing user interfaces together!",
        isUser: false
    }],
    antosh: [{text: "Hello! Antosh at your service. Need help with testing or analytics?", isUser: false}],
    "man-man": [{
        text: "Hey there! Man-Man here. I'll help maintain your systems and keep everything running smoothly.",
        isUser: false
    }],
    lia: [{text: "Hi! I'm Lia, your social media specialist. Let's boost your online presence!", isUser: false}],
    compass: [{
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
// Enhanced bounce animation for dots
const dotBounce = keyframes`
    0%, 100% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(-5px);
        opacity: 0.5;
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
    color: ${props => props.agentColor || 'var(--color-accent-josh)'}; // Use agent's accent color
    font-weight: 700;
    margin: 0 3px;
    animation: ${dotBounce} 1.4s infinite ease-in-out;
    animation-delay: ${props => props.delay}ms;
    font-size: 1.5rem;
    display: inline-block;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ThinkingDotsComponent = (props:{dotColor:string}) => (
    <ThinkingDots aria-live="polite" aria-atomic="true">
        <Dot delay={0} agentColor={props.dotColor}>•</Dot>
        <Dot delay={200} agentColor={props.dotColor}>•</Dot>
        <Dot delay={400} agentColor={props.dotColor}>•</Dot>
    </ThinkingDots>
);

interface ChatPanelProps {
    agentId?: AgentKey;
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
    color: var(--color-neutral-900); // Changed from darker to medium gray to differentiate from message text
    margin-top: 4px;
    display: block;
    text-align: right;
`;

// Custom input styling with medium text color
const ChatInput = styled(StyledChatInput)`
    color: var(--color-neutral-600);
    border-color: var(--color-neutral-300); // Default border color, will be overridden with agent colors

    &::placeholder {
        color: var(--color-neutral-400);
    }
    
    &:focus {
        outline: none; 
        border-color: inherit; // Will inherit from inline styles
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
    background: var(--color-primary); // Will be overridden with agent colors via inline styles
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
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        filter: brightness(1.1);
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;


// API request/response types for the Agent messaging
interface AgentMessageRequest {
    message: string;
    agentId: AgentKey;
    userId?: string;
    sessionId?: string;
    chatId?: string;
    workflowId?: string;
    messageId?: string;
    metadata?: Record<string, any>;
}

interface AgentMessageResponse {
    id: string;
    message: string;
    agentId: AgentKey;
    timestamp: string;
    status: 'success' | 'error';
    error?: string;
}

// Sample message type
interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    isStreaming?: boolean;
    agentKey?: AgentKey; // Add agentKey to track which agent sent the message
    metadata?: Record<string, any>; // Additional message data
}

const ChatPanelComponent: React.FC<ChatPanelProps> = ({
                                                          agentId = 'compass',
                                                      }: {agentId?: AgentKey}) => {
    // Ensure we have a valid agent key
    const safeAgentId = (agentId && agentId in Agents)
        ? agentId
        : 'compass';

    // Initialize the selected agent state
    const [selectedAgent, setSelectedAgent] = useState<AgentKey>(safeAgentId);
    
    // Get agent details from dictionary based on selectedAgent (not just safeAgentId)
    const agentData = Agents[selectedAgent];
    const agentName = agentData?.name || selectedAgent;
    const agentRole = agentData?.role || 'Agent';
    const agentColor = agentData?.color || 'var(--color-primary)';
    const agentAccentColor = agentData?.accent || 'var(--color-primary)';

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [streamedMessage, setStreamedMessage] = useState('');
    const [isApiLoading, setIsApiLoading] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);
    const [chatUUID, setChatUUID] = useState<string>(generateUUID());
    const [isEditingUUID, setIsEditingUUID] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);


    // Generate UUID function
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Hello! I'm ${agentName}, your ${agentRole}. How can I help you with your workflows today?`,
            isUser: false,
            timestamp: new Date()
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const thinkingRef = useRef<HTMLDivElement>(null);


    // Initial setup - update from props and check API URL
    useEffect(() => {
        console.log("ChatPanel received agentId prop:", agentId);
        if (agentId && agentId in Agents && agentId !== selectedAgent) {
            setSelectedAgent(agentId);
        }
        
        // Log the API URL that will be used (helpful for debugging)
        const apiURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001/thn-agents/us-central1';
        console.log(`Chat panel will use API URL: ${apiURL}/api/agents`);
        
        // Check if we're in development mode
        if (process.env.NODE_ENV === 'development') {
            console.log('Running in development mode - mock responses will be used if API calls fail');
        }
    }, [agentId]);

    // Menu handlers
    const handleRename = () => {
        setIsEditingUUID(true);
        setMenuOpen(false);
    };

    const handleExport = () => {
        const chatData = {
            uuid: chatUUID,
            messages,
            agent: selectedAgent,
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-${chatUUID}.json`;
        a.click();
        window.URL.revokeObjectURL(url);
        setMenuOpen(false);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this chat?')) {
            // Add your delete logic here
            setMessages([]);
            setChatUUID(generateUUID());
        }
        setMenuOpen(false);
    };


    // Handle click outside menu
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    // Update greeting when selected agent changes
    useEffect(() => {
        console.log("Selected agent changed to:", selectedAgent);
        if (selectedAgent && Agents[selectedAgent]) {
            const agent = Agents[selectedAgent];
            const name = agent?.name || selectedAgent;
            const role = agent?.role || 'Agent';
            
            setMessages([{
                id: '1',
                text: `Hello! I'm ${name}, your ${role}. How can I help you with your workflows today?`,
                isUser: false,
                timestamp: new Date()
            }]);
        }
    }, [selectedAgent]);

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
    
    /**
     * Sends a message to the agent via API
     * @param messageText - The message text to send
     * @param currentAgentId - The agent to send the message to
     * @returns Promise with the agent's response
     */
    const sendMessageToAgent = async (messageText: string, currentAgentId: AgentKey): Promise<AgentMessageResponse> => {
        try {
            console.log(`Sending message to agent ${currentAgentId}: ${messageText}`);
            
            // For development/demo purposes, we'll simulate an API delay and response
            if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_USE_MOCK_RESPONSES === 'true') {
                // Simulate API call with some processing time
                return new Promise((resolve) => {
                    // Simulate server-side "thinking" time
                    const thinkingTime = Math.floor(Math.random() * 1000) + 1000; // 1-2 seconds
                    
                    setTimeout(() => {
                        // Prepare simulated response
                        const simulatedResponse: AgentMessageResponse = {
                            id: Date.now().toString(),
                            message: `I understand your question about "${messageText.substring(0, 20)}${messageText.length > 20 ? '...' : ''}". 
                            As ${agentName}, I can help you with that workflow issue. Let me provide you with a detailed response based on my capabilities as ${agentRole}.
                            
                            ${messageText.toLowerCase().includes('workflow') ? 'Workflows are a key part of our system. They allow for structured processes with multiple agents collaborating on tasks.' : ''}
                            ${messageText.toLowerCase().includes('agent') ? 'Our agent system includes specialized roles like Project Managers, Developers, Requirements Specialists, and more.' : ''}
                            
                            Is there anything specific you'd like to know more about?`,
                            agentId: currentAgentId,
                            timestamp: new Date().toISOString(),
                            status: 'success'
                        };
                        
                        resolve(simulatedResponse);
                    }, thinkingTime);
                });
            }
            
            // Actual API implementation for production
            // Prepare request payload
            const payload: AgentMessageRequest = {
                message: messageText,
                agentId: currentAgentId,
                chatId: "uuid", // supplied by the user in an inline input field
                sessionId: "", // if no chatId then sessionId is used for chatId since session ID will always be present
                messageId: Date.now().toString(),
                metadata: {
                    clientTimestamp: new Date().toISOString(),
                    source: 'chat-panel'
                }
            };
            
            // Set up request options
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'process-message',
                    data: payload
                })
            };
            
            // Make the API call - use the full function URL path
            const response = await fetch(`/api/handleAgentMessages`, requestOptions);

            // Check content type before parsing
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                console.error('Non-JSON response received:', await response.text());
                throw new Error('Server returned non-JSON response. API endpoint may be incorrect.');
            }
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Failed with status ${response.status}`);
            }
            
            const responseData: AgentMessageResponse = await response.json();
            console.log('Agent response:', responseData);
            
            return responseData;
            
        } catch (error: any) {
            console.error('Error sending message to agent:', error);
            
            // Create a properly formatted error response
            const errorResponse: AgentMessageResponse = {
                id: Date.now().toString(),
                message: `Error: ${error.message || 'Unknown error'}`,
                agentId: currentAgentId,
                timestamp: new Date().toISOString(),
                status: 'error',
                error: error.message || 'Unknown error occurred'
            };
            
            throw errorResponse;
        }
    };

    // Simulate text streaming with a more natural effect and word wrap
    const streamText = (text: string) => {
        setIsStreaming(true);
        setStreamedMessage('');

        let currentIndex = 0;
        const textLength = text.length;

        // Variable speed to simulate natural typing with human-like pauses
        const getRandomSpeed = () => {
            // Get current character
            const char = text[currentIndex] || '';
            
            // Longer pauses at the end of sentences
            if (['.', '!', '?'].includes(char) && (text[currentIndex + 1] === ' ' || currentIndex + 1 >= textLength)) {
                return Math.floor(Math.random() * 300) + 200; // 200-500ms pause
            }
            
            // Medium pauses at commas, semicolons
            if ([',', ';', ':'].includes(char)) {
                return Math.floor(Math.random() * 100) + 80; // 80-180ms pause
            }
            
            // Brief pause at spaces (to simulate word thinking)
            if (char === ' ') {
                // Occasionally pause longer between words (as if thinking)
                return Math.random() < 0.15 ? 
                    Math.floor(Math.random() * 120) + 40 : // 15% chance of 40-160ms pause
                    Math.floor(Math.random() * 30) + 10;   // 85% chance of 10-40ms pause
            }
            
            // Normal character typing speed with slight variation
            return Math.floor(Math.random() * 20) + 10; // 10-30ms per character
        };
    
        const typeNextChar = () => {
            if (currentIndex < textLength) {
                setStreamedMessage(prev => prev + text[currentIndex]);
                currentIndex++;
                setTimeout(typeNextChar, getRandomSpeed());
            } else {
                // Done typing, add to messages after a short delay
                setTimeout(() => {
                    setIsStreaming(false);
    
                    // Add the final message to the messages array
                    const botResponse: Message = {
                        id: Date.now().toString(),
                        text: text,
                        isUser: false,
                        timestamp: new Date(),
                        agentKey: selectedAgent
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

            // Store message text for API call
            const messageText = message;
            
            // Set API loading state (affects input)
            setIsApiLoading(true);
            setApiError(null);
            
            // Simulate agent "thinking" time with the dots animation
            const thinkingTime = Math.floor(Math.random() * 1500) + 1000; // 1-2.5 seconds of thinking
            
            // Always show thinking dots for a minimum time to improve UX
            setTimeout(() => {
                // Call API or mock response based on environment
                sendMessageToAgent(messageText, selectedAgent)
                    .then(response => {
                        // Keep the thinking dots visible for a moment to transition smoothly
                        setTimeout(() => {
                            setIsThinking(false);
                            setIsApiLoading(false);
                            
                            if (response.status === 'success') {
                                // Start streaming the response
                                streamText(response.message);
                            } else {
                                // Handle error response from API
                                setApiError(response.error || 'Unknown error occurred');
                                setMessages(prevMessages => [
                                    ...prevMessages, 
                                    {
                                        id: Date.now().toString(),
                                        text: `Error: ${response.error || 'Unknown error occurred'}`,
                                        isUser: false,
                                        timestamp: new Date(),
                                        agentKey: selectedAgent
                                    }
                                ]);
                            }
                        }, 300); // Short transition delay
                    })
                    .catch(error => {
                        setIsThinking(false);
                        setIsApiLoading(false);
                        setApiError(error.message || 'Failed to communicate with agent');
                        streamText(`Sorry, I encountered an error: ${error.message || 'Failed to fetch'}`);

                        // Add error message to chat
                        // setMessages(prevMessages => [
                        //     ...prevMessages,
                        //     {
                        //         id: Date.now().toString(),
                        //         text: `Sorry, I encountered an error: ${error.message || 'Failed to communicate with agent'}`,
                        //         isUser: false,
                        //         timestamp: new Date(),
                        //         agentKey: selectedAgent
                        //     }
                        // ]);
                    });
            }, thinkingTime);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleAgentChange = (agentKey: AgentKey) => {
        console.log("handleAgentChange called with:", agentKey);
        
        if (agentKey && Agents[agentKey]) {
            // Update the selected agent state
            setSelectedAgent(agentKey);
            
            // Get the agent information
            const agentInfo = Agents[agentKey];
    
            // Add a message about switching agents
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    id: Date.now().toString(),
                    text: `Switching to ${agentInfo?.name || agentKey}, your ${agentInfo?.role || 'Agent'}.`,
                    isUser: false,
                    timestamp: new Date(),
                    agentKey: agentKey // Store the agent key with the message
                }
            ]);
        } else {
            console.warn("Invalid agent key:", agentKey);
            setSelectedAgent('compass');
        }
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
                    <UUIDContainer>
                        {isEditingUUID ? (
                            <EditableUUID
                                value={chatUUID}
                                onChange={(e:any) => setChatUUID(e.target.value)}
                                onBlur={() => setIsEditingUUID(false)}
                                onKeyPress={(e:any) => {
                                    if (e.key === 'Enter') {
                                        setIsEditingUUID(false);
                                    }
                                }}
                                autoFocus
                            />
                        ) : (
                            <span onClick={() => setIsEditingUUID(true)}>
                                {chatUUID}
                            </span>
                        )}
                        <IconButton onClick={() => setChatUUID(generateUUID())} title="Generate new UUID">
                            <RefreshIcon />
                        </IconButton>
                    </UUIDContainer>

                    <MenuContainer ref={menuRef}>
                        <IconButton onClick={() => setMenuOpen(!menuOpen)} title="Menu">
                            <VerticalDotsIcon />
                        </IconButton>

                        <MenuDropdown isOpen={menuOpen}>
                            <MenuItem onClick={handleRename}>
                                <RenameIcon />
                                Rename
                            </MenuItem>
                            <MenuItem onClick={handleExport}>
                                <ExportIcon />
                                Export
                            </MenuItem>
                            <MenuItem onClick={handleDelete}>
                                <DeleteIcon />
                                Delete
                            </MenuItem>
                        </MenuDropdown>
                    </MenuContainer>
                </div>

                <ChatHeader
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
                            // Use the message's agent key if available, or the currently selected agent
                            agentKey={msg.isUser ? undefined : (msg.agentKey || selectedAgent)}
                            isStreaming={msg.isStreaming}>
                            {msg.text}
                            <TimeStamp isHuman={msg.isUser}>{formatTime(msg.timestamp)}</TimeStamp>
                        </ChatBubble>
                    ))}
                
                    {isThinking && (
                        <ChatBubble
                            isUser={false}
                            you={false}
                            agentKey={selectedAgent}
                            message="">
                            <ThinkingDotsComponent dotColor={agentAccentColor}/> {/* Requirement #3: Agent accent color for thinking dots */}
                        </ChatBubble>
                    )}
                
                    {isStreaming && (
                        <ChatBubble
                            you={false}
                            isStreaming
                            isUser={false}
                            agentKey={selectedAgent}
                            message={""}>
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
                        placeholder={isApiLoading ? "Processing..." : `Message ${agentName}...`}
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isApiLoading}
                        style={{
                            borderColor: agentColor,
                            boxShadow: `0 0 0 1px ${agentColor}40`,
                            opacity: isApiLoading ? 0.8 : 1
                        }}
                    />
                    <SendButton
                        onClick={handleSendMessage}
                        aria-label="Send message"
                        disabled={isApiLoading}
                        style={{
                            background: agentColor,
                            opacity: isApiLoading ? 0.7 : 1
                        }}
                        title={process.env.NODE_ENV === 'development' ? 
                              "Using development mode - mock responses may be used" : 
                              "Send message to agent"}
                    >
                        <SendIcon/>
                    </SendButton>
                    
                    {apiError && (
                        <div style={{
                            position: 'absolute', 
                            bottom: '65px', 
                            left: '10px', 
                            right: '10px',
                            padding: '10px',
                            background: 'rgba(255, 61, 0, 0.05)',
                            border: '1px solid rgba(255, 61, 0, 0.2)',
                            borderRadius: '6px',
                            fontSize: '12px',
                            color: 'var(--color-neutral-700)',
                            display: 'none' // Hidden for now, can be made visible for debugging
                        }}>
                            API Error: {apiError}
                        </div>
                    )}
                </ChatInputBar>
            </ChatPanelStyled>
        </ChatContainer>
    );
};

export default ChatPanelComponent;
