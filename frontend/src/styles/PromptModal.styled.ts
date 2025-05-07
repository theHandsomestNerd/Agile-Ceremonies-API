import styled from "styled-components";

export const ModalDomainChip = styled.div<{ selected?: boolean }>`
  display: inline-block;
  padding: 0.4rem 0.75rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin: 0.25rem;
  user-select: none;
  cursor: pointer;
  background: ${(props) => props.selected ? 'rgba(139, 92, 246, 0.6)' : 'rgba(255, 255, 255, 0.06)'};
  color: ${(props) => props.selected ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid ${(props) => props.selected ? 'rgba(139, 92, 246, 0.8)' : 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.2s ease;
  position: relative; /* Ensure it's a positioned element */
  z-index: 2; /* Higher than parent elements */
  
  &:hover {
    background: ${(props) => props.selected ? 'rgba(139, 92, 246, 0.7)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;
