import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { WorkflowInfo, WorkflowMetadata, MetadataItem, MetadataLabel, MetadataValue } from '../styles/Workflow.styled';
import { FileTextIcon, UserIcon, CalendarIcon, ChevronDownIcon, ChevronUpIcon } from '../components/WorkflowIcons';

// Animation constants
const ANIMATION_DURATION = 300; // ms

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
`;

const DropdownHeader = styled(WorkflowInfo)<{ isOpen: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom-left-radius: ${props => props.isOpen ? '0' : '8px'};
  border-bottom-right-radius: ${props => props.isOpen ? '0' : '8px'};
  position: relative;
  border-bottom: ${props => props.isOpen ? '0' : '1px solid rgba(139, 92, 246, 0.2)'};
  
  &::before {
    content: 'Current Workflow';
    position: absolute;
    top: -24px;
    left: 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
  
  &:hover {
    background-color: var(--color-bg-hover);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.2s ease;
`;

interface DropdownListContainerProps {
  isOpen: boolean;
  height: number;
}

const DropdownListContainer = styled.div<DropdownListContainerProps>`
  position: absolute;
  width: 100%;
  max-height: ${props => props.isOpen ? `${props.height}px` : '0'};
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height ${ANIMATION_DURATION}ms ease;
  z-index: 10;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(20, 20, 40, 0.95);
  
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

const DropdownItem = styled(WorkflowInfo)<{ isSelected: boolean }>`
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.isSelected ? 'rgba(139, 92, 246, 0.2)' : 'rgba(20, 20, 40, 0.9)'};
  opacity: ${props => props.isSelected ? 1 : 0.98};
  border-radius: 0;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  margin: 0;
  
  &:hover {
    background-color: rgba(139, 92, 246, 0.15);
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

interface Workflow {
  id: string;
  name: string;
  description: string;
  ownerAgentId: string;
  steps: any[];
}

interface WorkflowDropdownSelectProps {
  workflows: Workflow[];
  selectedWorkflowIndex: number;
  onSelect: (index: number) => void;
  formatDate: () => string;
}

const WorkflowDropdownSelect: React.FC<WorkflowDropdownSelectProps> = ({
  workflows,
  selectedWorkflowIndex,
  onSelect,
  formatDate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate dropdown height based on number of items
  useEffect(() => {
    if (listRef.current) {
      // Each item is about 90px high + some padding
      const itemHeight = 102;
      // Limit to a max number of visible items before scrolling
      const maxVisibleItems = 3;
      // Subtract 1 because we're filtering out the selected workflow
      const filteredItemCount = Math.max(0, workflows.length - 1);
      const calculatedHeight = Math.min(filteredItemCount, maxVisibleItems) * itemHeight;
      setDropdownHeight(calculatedHeight);
    }
  }, [workflows.length, selectedWorkflowIndex]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelect = (index: number) => {
    onSelect(index);
    setIsOpen(false);
  };
  
  const selectedWorkflow = workflows[selectedWorkflowIndex];
  
  return (
    <DropdownContainer ref={containerRef}>
      <DropdownHeader 
        isOpen={isOpen}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Select workflow"
      >
        <WorkflowMetadata>
          <MetadataItem>
            <MetadataLabel><FileTextIcon size={16}/> Workflow ID:</MetadataLabel>
            <MetadataValue>{selectedWorkflow.id}</MetadataValue>
          </MetadataItem>
          <MetadataItem>
            <MetadataLabel><UserIcon size={16}/> Owner:</MetadataLabel>
            <MetadataValue>
              {selectedWorkflow.ownerAgentId.charAt(0).toUpperCase() + selectedWorkflow.ownerAgentId.slice(1)}
            </MetadataValue>
          </MetadataItem>
          <MetadataItem>
            <MetadataLabel><CalendarIcon size={16}/> Created:</MetadataLabel>
            <MetadataValue>{formatDate()}</MetadataValue>
          </MetadataItem>
        </WorkflowMetadata>
        <ChevronWrapper style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          {isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
        </ChevronWrapper>
      </DropdownHeader>
      
      <DropdownListContainer 
        isOpen={isOpen} 
        height={dropdownHeight}
        ref={listRef}
      >
        {workflows
          .filter((_, index) => index !== selectedWorkflowIndex)
          .map((workflow, index) => {
            // Calculate the original index in the workflows array
            const originalIndex = index >= selectedWorkflowIndex ? index + 1 : index;
            return (
              <DropdownItem
                key={workflow.id}
                isSelected={false}
                onClick={() => handleSelect(originalIndex)}
                aria-selected={false}
              >
                <WorkflowMetadata>
                  <MetadataItem>
                    <MetadataLabel><FileTextIcon size={16}/> Workflow ID:</MetadataLabel>
                    <MetadataValue>{workflow.id}</MetadataValue>
                  </MetadataItem>
                  <MetadataItem>
                    <MetadataLabel><UserIcon size={16}/> Owner:</MetadataLabel>
                    <MetadataValue>
                      {workflow.ownerAgentId.charAt(0).toUpperCase() + workflow.ownerAgentId.slice(1)}
                    </MetadataValue>
                  </MetadataItem>
                  <MetadataItem>
                    <MetadataLabel><CalendarIcon size={16}/> Created:</MetadataLabel>
                    <MetadataValue>{formatDate()}</MetadataValue>
                  </MetadataItem>
                </WorkflowMetadata>
              </DropdownItem>
            );
          })}
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default WorkflowDropdownSelect;
