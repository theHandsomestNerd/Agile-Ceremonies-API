import styled from 'styled-components';
import thnTheme from './globalStyles';

export const WorkflowTableContainer = styled.div`
  width: 100%;
  background: rgba(20, 20, 40, 0.6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.2);
  margin-bottom: 2rem;
`;

export const TableHeader = styled.div`
  padding: 1.25rem 1.5rem;
  background: rgba(139, 92, 246, 0.15);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableTitle = styled.h2`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 600;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StepRow = styled.div`
  display: grid;
  grid-template-columns: 50px 2fr 1fr 1fr 1.5fr 40px;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s;
  
  &:hover {
    background: rgba(139, 92, 246, 0.07);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 40px 2fr 1fr 1fr 1fr 40px;
  }
  
  @media (max-width: 991px) {
    grid-template-columns: 40px 2fr 1fr 1fr 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 2fr 1fr 40px;
    padding: 1rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 40px 2fr 40px;
    gap: 0.75rem;
  }
`;

export const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${thnTheme.gradientMain};
  color: white;
  font-weight: bold;
  border-radius: 50%;
  font-size: 0.95rem;
  
  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
`;

export const StepDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  
  strong {
    font-size: 1.1rem;
    color: white;
    
    @media (max-width: 640px) {
      font-size: 1rem;
    }
  }
  
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    
    @media (max-width: 640px) {
      font-size: 0.85rem;
    }
  }
`;

export const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  span {
    color: white;
    font-weight: 500;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`;

export const AgentBadge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

export const StepStatus = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;

export const StatusBadge = styled.div<{ status: 'completed' | 'in-progress' | 'pending' }>`
  display: inline-block;
  padding: 0.35rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  
  background: ${props => {
    switch (props.status) {
      case 'completed': return 'rgba(6, 214, 160, 0.2)';
      case 'in-progress': return 'rgba(255, 158, 0, 0.2)';
      case 'pending': return 'rgba(255, 255, 255, 0.1)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  
  color: ${props => {
    switch (props.status) {
      case 'completed': return '#06d6a0';
      case 'in-progress': return '#ff9e00';
      case 'pending': return 'rgba(255, 255, 255, 0.7)';
      default: return 'rgba(255, 255, 255, 0.7)';
    }
  }};
`;

export const StepTools = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: ${thnTheme.colors.josh.primary};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ToolBadge = styled.span`
  background: rgba(139, 92, 246, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    font-size: 1.25rem;
  }
`;

export const StepDetails = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  background: rgba(20, 20, 30, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DetailTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${thnTheme.colors.josh.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.1rem;
  }
`;

export const DetailContent = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const IOContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    
    svg {
      transform: rotate(90deg);
      margin: 0.5rem 0;
    }
  }
`;

export const IOSection = styled.div`
  flex: 1;
  min-width: 300px;
  
  @media (max-width: 768px) {
    min-width: 0;
    width: 100%;
  }
`;

export const IOLabel = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${thnTheme.colors.josh.muted};
`;

export const IOContent = styled.div`
  background: rgba(30, 30, 50, 0.6);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

export const CodeBlock = styled.div`
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  white-space: pre-wrap;
  line-height: 1.5;
  
  p {
    margin: 0.5rem 0;
    
    &:first-child {
      margin-top: 0;
    }
    
    strong {
      color: ${thnTheme.colors.josh.primary};
    }
  }
`;

export const PrerequisiteList = styled.ul`
  margin: 0.5rem 0 0;
  padding: 0 0 0 1.25rem;
  list-style-type: circle;
`;

export const PrerequisiteItem = styled.li`
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
`;
