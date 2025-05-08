import styled from 'styled-components';
import thnTheme from './globalStyles';

export const WorkflowContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  background-color: #121225;
  color: #ffffff;
  min-height: fit-content;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const WorkflowHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WorkflowTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8b5cf6, #06d6a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const WorkflowDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const WorkflowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WorkflowInfo = styled.div`
  background: rgba(20, 20, 40, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

export const WorkflowMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const MetadataItem = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

export const MetadataLabel = styled.span`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-right: 0.5rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${thnTheme.colors.josh.primary};
  }
`;

export const MetadataValue = styled.span`
  color: white;
  font-weight: 600;
  font-size: 1rem;
`;

export const WorkflowControls = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const WorkflowSelector = styled.div`
  margin-bottom: var(--spacing-sm);
`;

export const WorkflowDropdown = styled.select`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--color-neutral-100);
  border: var(--border-width-thin) solid var(--color-primary-light);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--color-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
  min-width: 300px;
  
  &:hover, &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
    outline: none;
  }
  
  option {
    padding: var(--spacing-sm);
  }
`;

export const ControlButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: ${props => props.disabled 
    ? 'rgba(139, 92, 246, 0.1)' 
    : 'rgba(139, 92, 246, 0.2)'
  };
  border: 1px solid ${props => props.disabled 
    ? 'rgba(139, 92, 246, 0.2)' 
    : 'rgba(139, 92, 246, 0.4)'
  };
  border-radius: 8px;
  color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.5)' : '#fff'};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.disabled 
      ? 'rgba(139, 92, 246, 0.1)' 
      : 'rgba(139, 92, 246, 0.3)'
    };
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled 
      ? 'none' 
      : '0 4px 12px rgba(0, 0, 0, 0.1)'
    };
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'translateY(0)'};
  }
  
  svg {
    font-size: 1.1rem;
    opacity: ${props => props.disabled ? 0.5 : 1};
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

export const WorkflowSection = styled.section`
  margin-bottom: 2rem;
`;

export const WorkflowStatusBadge = styled.span<{ status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 1rem;
  
  background: ${props => {
    switch (props.status) {
      case 'active': return 'rgba(6, 214, 160, 0.2)';
      case 'paused': return 'rgba(255, 187, 0, 0.2)';
      case 'completed': return 'rgba(139, 92, 246, 0.2)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  
  color: ${props => {
    switch (props.status) {
      case 'active': return '#06d6a0';
      case 'paused': return '#ffbb00';
      case 'completed': return '#8b5cf6';
      default: return 'rgba(255, 255, 255, 0.7)';
    }
  }};
  
  svg {
    margin-right: 0.5rem;
  }
`;

export const WorkflowStageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(20, 20, 40, 0.4);
  border-radius: 8px;
  border-left: 4px solid ${thnTheme.colors.josh.primary};
`;

export const StageTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: white;
`;

export const StageProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ProgressText = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
`;

export const ProgressBar = styled.div`
  width: 150px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40%;
    background: linear-gradient(90deg, ${thnTheme.colors.josh.primary}, ${thnTheme.colors.josh.muted});
    border-radius: 4px;
  }
`;

export const WorkflowActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${props => props.variant === 'primary'
      ? thnTheme.colors.josh.primary
      : 'transparent'
  };
  color: ${props => props.variant === 'primary'
      ? 'white'
      : 'rgba(255, 255, 255, 0.9)'
  };
  border: 1px solid ${props => props.variant === 'primary'
      ? 'transparent'
      : 'rgba(255, 255, 255, 0.2)'
  };

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: ${props => props.variant === 'primary'
        ? thnTheme.colors.josh.muted
        : 'rgba(255, 255, 255, 0.1)'
    };
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.1rem;
  }
`;
