import React from 'react';
import styled from 'styled-components';
import { StatusType } from "../types/App.types";
import { 
  AlertCircleIcon, 
  CheckIcon, 
  ChevronRightIcon 
} from "../components/CustomIcons";

// Styled container for status indicators with consistent styling
const StatusIndicator = styled.span<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  color: ${props => props.color};
  
  /* Add a subtle pulse animation for active status */
  &.status-active {
    svg {
      animation: pulse 2s infinite;
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    }
  }
  
  /* Add a subtle shine for complete status */
  &.status-complete svg {
    filter: drop-shadow(0 0 2px ${props => props.color + '80'});
  }
  
  /* Add a vibration effect for error status */
  &.status-error {
    svg {
      animation: vibrate 0.3s linear infinite;
      
      @keyframes vibrate {
        0% { transform: translateX(0); }
        25% { transform: translateX(1px); }
        50% { transform: translateX(0); }
        75% { transform: translateX(-1px); }
        100% { transform: translateX(0); }
      }
    }
  }
`;

// Styled circle for active and todo status
const StatusCircle = styled.div<{ color: string, size?: number }>`
  width: ${props => props.size || 10}px;
  height: ${props => props.size || 10}px;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0 0 4px ${props => props.color + '80'};
  transition: all var(--transition-fast);
`;

export const statusMeta: Record<StatusType, { 
  label: string; 
  icon: JSX.Element; 
  color: string;
  description?: string;
}> = {
  complete: {
    label: "Complete",
    icon: (
      <StatusIndicator color="var(--color-success)" className="status-complete">
        <CheckIcon 
          size={16} 
          color="var(--color-success)" 
          strokeWidth={2.5}
        />
      </StatusIndicator>
    ),
    color: "var(--color-success)",
    description: "Task has been successfully completed"
  },
  active: {
    label: "Active",
    icon: (
      <StatusIndicator color="var(--color-josh-primary)" className="status-active">
        <StatusCircle 
          color="var(--color-josh-primary)" 
          size={10}
        />
      </StatusIndicator>
    ),
    color: "var(--color-josh-primary)",
    description: "Task is currently in progress"
  },
  todo: {
    label: "Planned",
    icon: (
      <StatusIndicator color="var(--color-neutral-500)">
        <ChevronRightIcon 
          size={16} 
          color="var(--color-neutral-500)"
        />
      </StatusIndicator>
    ),
    color: "var(--color-neutral-500)",
    description: "Task is scheduled but not yet started"
  },
  error: {
    label: "Error",
    icon: (
      <StatusIndicator color="var(--color-error)" className="status-error">
        <AlertCircleIcon 
          size={16} 
          color="var(--color-error)" 
          strokeWidth={2}
        />
      </StatusIndicator>
    ),
    color: "var(--color-error)",
    description: "Task encountered an error during execution"
  },
};
