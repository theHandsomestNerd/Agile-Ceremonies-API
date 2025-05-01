import React from 'react';
import styled from 'styled-components';

// Root component that contains the avatar
interface AvatarRootProps {
  color: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
  tabIndex?: number;
}

// Simple styled component for the avatar root
const StyledAvatarRoot = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.color};
  border-radius: 50%;
  overflow: hidden;
  border: 2.5px solid #fff;
  box-shadow: 0 1px 5px #7745c530;
`;

// The avatar component that replaces Radix UI's Avatar.Root
export const CustomAvatarRoot: React.FC<AvatarRootProps> = ({
  color,
  className,
  style,
  children,
  onClick,
  tabIndex
}) => {
  return (
    <StyledAvatarRoot 
      color={color}
      className={className}
      style={style}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </StyledAvatarRoot>
  );
};

// Export the Root component as the default export
export default { Root: CustomAvatarRoot };
