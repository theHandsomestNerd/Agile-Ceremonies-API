import React from 'react';
import styled from 'styled-components';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const SvgIcon = styled.svg<IconProps>`
  display: inline-block;
  vertical-align: middle;
`;

// Chevron Up Icon
export const ChevronUpIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  className 
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </SvgIcon>
);

// Chevron Down Icon
export const ChevronDownIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  className 
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </SvgIcon>
);

// Copy Icon
export const CopyIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  className 
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </SvgIcon>
);

// Edit Icon
export const EditIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  className 
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </SvgIcon>
);

// Check Icon
export const CheckIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  className 
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </SvgIcon>
);

// Alert Circle Icon
export const AlertCircleIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = "currentColor",
  className 
}) => (
  <SvgIcon 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </SvgIcon>
);
