import React from 'react';
import styled, { css } from 'styled-components';

type AgentKey = 'nat' | 'brian' | 'reqqy' | 'josh' | 'twin' | 'antosh' | 'manman' | 'lia' | 'compass';
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Root component that contains the avatar
interface AvatarRootProps {
  color?: string; // Optional now, can use agentKey instead
  agentKey?: AgentKey; // Use agent-specific colors and gradients
  size?: AvatarSize; // Different size variants
  isInteractive?: boolean; // Whether the avatar should show hover/active states
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
  tabIndex?: number;
}

// Size map for different avatar sizes
const sizeMap: Record<AvatarSize, string> = {
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '48px',
  xl: '64px'
};

// Function to get gradient based on agent key
const getAgentGradient = (agentKey?: AgentKey): string => {
  if (!agentKey) return 'var(--color-primary-gradient, linear-gradient(135deg, #7E22CE 0%, #9333EA 100%))';
  
  return `var(--color-${agentKey}-gradient)`;
};

// Function to get primary color based on agent key
const getAgentColor = (agentKey?: AgentKey, color?: string): string => {
  if (color) return color;
  if (!agentKey) return 'var(--color-primary)';
  
  return `var(--color-${agentKey}-primary)`;
};

// Enhanced styled component for the avatar root with neuromorphic effects
const StyledAvatarRoot = styled.div<{ 
  color?: string; 
  agentKey?: AgentKey;
  size: AvatarSize;
  isInteractive: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => sizeMap[props.size]};
  height: ${props => sizeMap[props.size]};
  position: relative;
  
  /* Default background if no gradient */
  background: ${props => getAgentColor(props.agentKey, props.color)};
  
  /* Use agent gradient when available */
  background: ${props => getAgentGradient(props.agentKey)};
  
  border-radius: var(--border-radius-full);
  overflow: hidden;
  
  /* Enhanced border and shadow effects */
  border: var(--border-width-thin) solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-md);
  
  /* Add transition for smooth hover effects */
  transition: 
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    filter var(--transition-fast);
  
  /* Interactive states for clickable avatars */
  ${props => props.isInteractive && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      filter: brightness(1.05);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
      filter: brightness(0.95);
    }
    
    &:focus-visible {
      outline: var(--border-width-medium) solid ${getAgentColor(props.agentKey, props.color)};
      outline-offset: 2px;
    }
  `}
  
  /* Make sure content is centered */
  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  /* Style for initials or text content */
  span {
    color: white;
    font-weight: var(--font-weight-medium);
    font-size: ${props => props.size === 'xs' ? 'var(--font-size-xs)' : 
                          props.size === 'sm' ? 'var(--font-size-sm)' :
                          props.size === 'md' ? 'var(--font-size-base)' :
                          props.size === 'lg' ? 'var(--font-size-lg)' :
                          'var(--font-size-xl)'};
    text-transform: uppercase;
  }
`;

// The enhanced avatar component
export const CustomAvatarRoot: React.FC<AvatarRootProps> = ({
  color,
  agentKey,
  size = 'md',
  isInteractive = false,
  className,
  style,
  children,
  onClick,
  tabIndex
}) => {
  // If onClick provided but isInteractive not explicitly set, make it interactive
  const interactive = onClick ? true : isInteractive;
  
  return (
    <StyledAvatarRoot 
      color={color}
      agentKey={agentKey}
      size={size}
      isInteractive={interactive}
      className={className}
      style={style}
      onClick={onClick}
      tabIndex={tabIndex || (interactive ? 0 : undefined)}
    >
      {children}
    </StyledAvatarRoot>
  );
};

// Avatar image component
interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CustomAvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt,
  className
}) => {
  return <StyledAvatarImage src={src} alt={alt} className={className} />;
};

// Avatar fallback component (for initials or icons)
interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

const StyledAvatarFallback = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: var(--font-weight-medium);
  color: white;
`;

export const CustomAvatarFallback: React.FC<AvatarFallbackProps> = ({
  children,
  className
}) => {
  return <StyledAvatarFallback className={className}>{children}</StyledAvatarFallback>;
};

// Export all components
export default { 
  Root: CustomAvatarRoot,
  Image: CustomAvatarImage,
  Fallback: CustomAvatarFallback
};
