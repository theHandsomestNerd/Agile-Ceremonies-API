import React, {useState} from 'react';
import styled from 'styled-components';

interface DragDropDomainFilterProps {
    domains: string[];
    andDomains: string[];
    orDomains: string[];
    onAndDomainsChange: (domains: string[]) => void;
    onOrDomainsChange: (domains: string[]) => void;
  onCompoundFilterChange?: (andDomains: string[], orDomains: string[]) => void;
}

const DragDropContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const DropZoneTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h4 {
        font-size: 0.9rem;
        margin: 0;
        color: #fff;
        font-weight: 600;
    }

    span {
        font-size: 0.8rem;
        color: #8b5cf680;
    }
`;

const DropZoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 0.75rem; /* Ensure consistent spacing */
    height: auto; /* Let content determine height */
`;

const DropZone = styled.div<{ $isDragOver: boolean, $type: 'and' | 'or' | 'source' }>`
    min-height: 60px;
    height: 60px; /* Fixed height to prevent UI shifts */
    border-radius: 8px;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-content: flex-start;
    overflow-y: auto; /* Make it scrollable instead of growing */
    background: ${props =>
            props.$isDragOver
                    ? props.$type === 'and'
                            ? 'rgba(6, 214, 160, 0.15)'
                            : props.$type === 'or'
                                    ? 'rgba(139, 92, 246, 0.15)'
                                    : 'rgba(50, 50, 70, 0.3)'
                    : props.$type === 'and'
                            ? 'rgba(6, 214, 160, 0.05)'
                            : props.$type === 'or'
                                    ? 'rgba(139, 92, 246, 0.05)'
                                    : 'rgba(50, 50, 70, 0.1)'
    };
    border: 2px dashed ${props =>
            props.$isDragOver
                    ? props.$type === 'and'
                            ? 'rgba(6, 214, 160, 0.8)'
                            : props.$type === 'or'
                                    ? 'rgba(139, 92, 246, 0.8)'
                                    : 'rgba(255, 255, 255, 0.3)'
                    : props.$type === 'and'
                            ? 'rgba(6, 214, 160, 0.3)'
                            : props.$type === 'or'
                                    ? 'rgba(139, 92, 246, 0.3)'
                                    : 'rgba(255, 255, 255, 0.1)'
    };
    transition: all 0.2s ease;

    /* Custom scrollbar */

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${props =>
                props.$type === 'and'
                        ? 'rgba(6, 214, 160, 0.5)'
                        : props.$type === 'or'
                                ? 'rgba(139, 92, 246, 0.5)'
                                : 'rgba(255, 255, 255, 0.3)'
        };
        border-radius: 4px;
    }
`;

const DomainChip = styled.div<{ $dragType?: 'and' | 'or' | 'source' }>`
    background: ${props =>
            props.$dragType === 'and'
                    ? 'linear-gradient(90deg, #06d6a0, #06d6a0)'
                    : props.$dragType === 'or'
                            ? 'linear-gradient(90deg, #8b5cf6, #8b5cf6)'
                            : 'linear-gradient(90deg, #3d3d56, #3d3d56)'
    };
    color: ${props => props.$dragType === 'source' ? '#ffffff' : '#121212'};
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }
`;

const HelpText = styled.p`
    color: #8b5cf680;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
`;

const CompoundFilterInfo = styled.div`
    font-size: 0.8rem;
    color: #e3e9ff;
    background: rgba(139, 92, 246, 0.15);
    padding: 0.5rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    border-left: 3px solid #8b5cf6;
`;

const DragDropDomainFilter: React.FC<DragDropDomainFilterProps> = ({
                                                                       domains,
                                                                       andDomains,
                                                                       orDomains,
                                                                       onAndDomainsChange,
                                                                       onOrDomainsChange
                                                                   }) => {
    const [draggedDomain, setDraggedDomain] = useState<string | null>(null);
    const [draggedSource, setDraggedSource] = useState<'and' | 'or' | 'source' | null>(null);
    const [andDragOver, setAndDragOver] = useState(false);
    const [orDragOver, setOrDragOver] = useState(false);
    const [sourceDragOver, setSourceDragOver] = useState(false);

    // No wrapper functions needed as we'll handle all updates in handleDrop

    // Get available domains (those not in AND or OR)
    const availableDomains = domains.filter(
        domain => !andDomains.includes(domain) && !orDomains.includes(domain)
    );

    const handleDragStart = (domain: string, source: 'and' | 'or' | 'source') => {
        setDraggedDomain(domain);
        setDraggedSource(source);
    };

    const handleDragOver = (e: React.DragEvent, dropZone: 'and' | 'or' | 'source') => {
        e.preventDefault();

        // Only highlight drop zone if this is a valid drop
        if (draggedDomain) {
            if (dropZone === 'and') {
                setAndDragOver(true);
            } else if (dropZone === 'or') {
                setOrDragOver(true);
            } else {
                setSourceDragOver(true);
            }
        }
    };

    const handleDragLeave = (dropZone: 'and' | 'or' | 'source') => {
        if (dropZone === 'and') {
            setAndDragOver(false);
        } else if (dropZone === 'or') {
            setOrDragOver(false);
        } else {
            setSourceDragOver(false);
        }
    };

    const handleDrop = (e: React.DragEvent, dropZone: 'and' | 'or' | 'source') => {
        e.preventDefault();

        // Reset drag over states
        setAndDragOver(false);
        setOrDragOver(false);
        setSourceDragOver(false);

        if (!draggedDomain || !draggedSource) return;

        // Create copies of current domains for modification
        let newAndDomains = [...andDomains];
        let newOrDomains = [...orDomains];

        // Handle moving domains between lists
        if (draggedSource === 'source' && dropZone === 'and') {
            // Moving from source to AND
            if (!newAndDomains.includes(draggedDomain)) {
                newAndDomains = [...newAndDomains, draggedDomain];
            }
        } else if (draggedSource === 'source' && dropZone === 'or') {
            // Moving from source to OR
            if (!newOrDomains.includes(draggedDomain)) {
                newOrDomains = [...newOrDomains, draggedDomain];
            }
        } else if (draggedSource === 'and' && dropZone === 'source') {
            // Moving from AND back to source
            newAndDomains = newAndDomains.filter(d => d !== draggedDomain);
        } else if (draggedSource === 'or' && dropZone === 'source') {
            // Moving from OR back to source
            newOrDomains = newOrDomains.filter(d => d !== draggedDomain);
        } else if (draggedSource === 'and' && dropZone === 'or') {
            // Moving from AND to OR
            newAndDomains = newAndDomains.filter(d => d !== draggedDomain);
            if (!newOrDomains.includes(draggedDomain)) {
                newOrDomains = [...newOrDomains, draggedDomain];
            }
        } else if (draggedSource === 'or' && dropZone === 'and') {
            // Moving from OR to AND
            newOrDomains = newOrDomains.filter(d => d !== draggedDomain);
            if (!newAndDomains.includes(draggedDomain)) {
                newAndDomains = [...newAndDomains, draggedDomain];
            }
        }

        // Call both individual handlers for backward compatibility
        onAndDomainsChange(newAndDomains);
        onOrDomainsChange(newOrDomains);

        // Reset dragged state
        setDraggedDomain(null);
        setDraggedSource(null);
    };

    const handleDragEnd = () => {
        setDraggedDomain(null);
        setDraggedSource(null);
        setAndDragOver(false);
        setOrDragOver(false);
        setSourceDragOver(false);
    };

    return (
        <DragDropContainer>
            <DropZoneContainer>
                <DropZoneTitle>
                    <h4>AND Filter (All of these domains must match)</h4>
                    <span>{andDomains.length} selected</span>
                </DropZoneTitle>
                <DropZone
                    $isDragOver={andDragOver}
                    $type="and"
                    onDragOver={(e: any) => handleDragOver(e, 'and')}
                    onDragLeave={() => handleDragLeave('and')}
                    onDrop={(e: any) => handleDrop(e, 'and')}
                >
                    {andDomains.length === 0 ? (
                        <HelpText>Drop domains here to require ALL of them</HelpText>
                    ) : (
                        andDomains.map(domain => (
                            <DomainChip
                                key={`and-${domain}`}
                                $dragType="and"
                                draggable
                                onDragStart={() => handleDragStart(domain, 'and')}
                                onDragEnd={handleDragEnd}
                            >
                                {domain}
                            </DomainChip>
                        ))
                    )}
                </DropZone>
            </DropZoneContainer>

            <DropZoneContainer>
                <DropZoneTitle>
                    <h4>OR Filter (Any of these domains can match)</h4>
                    <span>{orDomains.length} selected</span>
                </DropZoneTitle>
                <DropZone
                    $isDragOver={orDragOver}
                    $type="or"
                    onDragOver={(e: any) => handleDragOver(e, 'or')}
                    onDragLeave={() => handleDragLeave('or')}
                    onDrop={(e: any) => handleDrop(e, 'or')}
                >
                    {orDomains.length === 0 ? (
                        <HelpText>Drop domains here to match ANY of them</HelpText>
                    ) : (
                        orDomains.map(domain => (
                            <DomainChip
                                key={`or-${domain}`}
                                $dragType="or"
                                draggable
                                onDragStart={() => handleDragStart(domain, 'or')}
                                onDragEnd={handleDragEnd}
                            >
                                {domain}
                            </DomainChip>
                        ))
                    )}
                </DropZone>
            </DropZoneContainer>

            <DropZoneContainer>
                <DropZoneTitle>
                    <h4>Available Domains</h4>
                    <span>Drag domains to filters above</span>
                </DropZoneTitle>
                <DropZone
                    $isDragOver={sourceDragOver}
                    $type="source"
                    onDragOver={(e: any) => handleDragOver(e, 'source')}
                    onDragLeave={() => handleDragLeave('source')}
                    onDrop={(e: any) => handleDrop(e, 'source')}
                >
                    {availableDomains.length === 0 ? (
                        <HelpText>All domains are being used in filters</HelpText>
                    ) : (
                        availableDomains.map(domain => (
                            <DomainChip
                                key={`source-${domain}`}
                                $dragType="source"
                                draggable
                                onDragStart={() => handleDragStart(domain, 'source')}
                                onDragEnd={handleDragEnd}
                            >
                                {domain}
                            </DomainChip>
                        ))
                    )}
                </DropZone>
            </DropZoneContainer>

            {(andDomains.length > 0 || orDomains.length > 0) && (
                <CompoundFilterInfo>
                    Current filter: {andDomains.length > 0 ? `(Must have ALL of: ${andDomains.join(', ')})` : ''}
                    {andDomains.length > 0 && orDomains.length > 0 ? ' AND ' : ''}
                    {orDomains.length > 0 ? `(Must have ANY of: ${orDomains.join(', ')})` : ''}
                </CompoundFilterInfo>
            )}
        </DragDropContainer>
    );
};

export default DragDropDomainFilter;
