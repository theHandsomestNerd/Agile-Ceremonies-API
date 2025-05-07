import React from 'react';
import styled from 'styled-components';

interface IconProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  onClick?: () => void;
  isInteractive?: boolean;
  agentKey?: 'nat' | 'brian' | 'reqqy' | 'josh' | 'twin' | 'antosh' | 'manman' | 'lia' | 'compass';
}

const SvgIcon = styled.svg<IconProps>`
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  
  /* Subtle drop shadow for depth */
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05));
  
  /* Add interactive states if the icon is clickable */
  ${props => (props.onClick || props.isInteractive) && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-1px) scale(1.05);
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
      stroke: ${props.hoverColor || (props.agentKey ? `var(--color-${props.agentKey}-primary)` : 'var(--color-primary)')};
    }
    
    &:active {
      transform: translateY(0) scale(0.98);
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05));
    }
  `}
  
  /* Ensure the icon itself has helpful title for accessibility */
  title {
    user-select: none;
  }
`;

// Helper function to get the agent color
const getAgentColor = (agentKey?: string, defaultColor = 'currentColor') => {
  if (!agentKey) return defaultColor;
  return `var(--color-${agentKey}-primary)`;
};

// Chevron Up Icon - Enhanced
export const ChevronUpIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Chevron Up",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="chevronUpTitle"
  >
    <title id="chevronUpTitle">{title}</title>
    <polyline points="18 15 12 9 6 15"></polyline>
  </SvgIcon>
);

// Chevron Down Icon - Enhanced
export const ChevronDownIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Chevron Down",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="chevronDownTitle"
  >
    <title id="chevronDownTitle">{title}</title>
    <polyline points="6 9 12 15 18 9"></polyline>
  </SvgIcon>
);

// Copy Icon - Enhanced
export const CopyIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Copy",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="copyTitle"
  >
    <title id="copyTitle">{title}</title>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </SvgIcon>
);

// Edit Icon - Enhanced
export const EditIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Edit",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="editTitle"
  >
    <title id="editTitle">{title}</title>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </SvgIcon>
);

// Check Icon - Enhanced
export const CheckIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Check",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="checkTitle"
  >
    <title id="checkTitle">{title}</title>
    <polyline points="20 6 9 17 4 12"></polyline>
  </SvgIcon>
);

// Alert Circle Icon - Enhanced
export const AlertCircleIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Alert",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="alertTitle"
  >
    <title id="alertTitle">{title}</title>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </SvgIcon>
);

// Additional useful icons:

// Calendar Icon - For scheduling and time-based content
export const CalendarIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Calendar",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="calendarTitle"
  >
    <title id="calendarTitle">{title}</title>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </SvgIcon>
);

// User Icon - For user profiles
export const UserIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "User",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="userTitle"
  >
    <title id="userTitle">{title}</title>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </SvgIcon>
);

// Settings Icon - For configuration options
export const SettingsIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Settings",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="settingsTitle"
  >
    <title id="settingsTitle">{title}</title>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </SvgIcon>
);

// Chevron Right Icon - For navigation and "todo/planned" status
export const ChevronRightIcon: React.FC<IconProps> = ({
  size = 16,
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Chevron Right",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="chevronRightTitle"
  >
    <title id="chevronRightTitle">{title}</title>
    <polyline points="9 18 15 12 9 6"></polyline>
  </SvgIcon>
);

// Code Icon - For development sections
export const CodeIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  hoverColor,
  strokeWidth = 2,
  className,
  title = "Code",
  onClick,
  isInteractive,
  agentKey
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={agentKey ? getAgentColor(agentKey, color) : color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    isInteractive={isInteractive || !!onClick}
    hoverColor={hoverColor}
    agentKey={agentKey}
    role="img"
    aria-labelledby="codeTitle"
  >
    <title id="codeTitle">{title}</title>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </SvgIcon>
);
