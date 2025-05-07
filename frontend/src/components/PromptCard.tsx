import React, {useEffect, useRef, useState} from "react";
import {Prompt} from "../types/PromptLibrary.types";
import {usePrompts} from "./Prompt.ctx";
import {
    ActionButton,
    CardActions,
    CardAgent,
    CardContent,
    CardDesc,
    CardDomains,
    CardOverlay,
    CardPromptText,
    CardShell,
    CardTitle,
    CardTop,
    CardUsage,
    CloseButton,
    CopyGlow,
    DomainCardChip,
    StatusBadge,
    UsageSvg
} from "../styles/PromptCard.styled";

const PromptCard: React.FC<{
    prompt: Prompt;
    openModal: React.Dispatch<
        React.SetStateAction<{
            mode: "new" | "edit" | "view";
            prompt?: Prompt;
            open: boolean;
        }>
    >;
}> = ({prompt, openModal}) => {
    const {deletePrompt, incrementUsage} = usePrompts();
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleCopy = async (e: React.MouseEvent) => {
        e.stopPropagation();
        await navigator.clipboard.writeText(prompt.prompt_text);
        setCopied(true);
        incrementUsage(prompt.id);
        setTimeout(() => setCopied(false), 1050);
    };

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        openModal({
            mode: "edit",
            prompt,
            open: true,
        });
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        deletePrompt(prompt.id);
    };

    const toggleExpand = () => {
        // Add a small delay before expanding to ensure smooth animation
        if (!expanded) {
            // Add body class to prevent scrolling when modal is open
            document.body.classList.add('prompt-modal-open');
            setExpanded(true);
        } else {
            handleCardClose();
        }
    };
    
    const handleCardClose = () => {
        setExpanded(false);
        // Remove body class after animation completes
        setTimeout(() => {
            document.body.classList.remove('prompt-modal-open');
        }, 300);
    };
    
    // Handle click outside to collapse card
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node) && expanded) {
                handleCardClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expanded]);

    // Handle escape key to collapse card
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && expanded) {
                setExpanded(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [expanded]);

    return (
        <>
            <CardOverlay $visible={expanded} onClick={() => setExpanded(false)} />
            <CardShell
                ref={cardRef}
                $copied={copied}
                $expanded={expanded}
                onClick={toggleExpand}
            >
                {expanded && (
                    <CloseButton onClick={(e:any) => {
                        e.stopPropagation();
                        handleCardClose();
                    }}>
                        ×
                    </CloseButton>
                )}
                <CardContent $expanded={expanded}>
                    <CardTop>
                        <StatusBadge status={prompt.status} aria-label={prompt.status}>
                            {prompt.status}
                        </StatusBadge>
                        <CardUsage aria-label={`Usage count: ${prompt.usage_count}`}>
                            <UsageSvg width={16} height={16}>
                                <circle
                                    cx={8}
                                    cy={8}
                                    r={7.1}
                                    fill="none"
                                    stroke="#06d6a0"
                                    strokeWidth="2"
                                    opacity="0.92"
                                />
                                <text
                                    x="8"
                                    y="11.4"
                                    fill="#fff"
                                    fontSize="8"
                                    fontWeight={700}
                                    textAnchor="middle"
                                    fontFamily="'JetBrains Mono','Monaco',monospace"
                                >
                                    {prompt.usage_count}
                                </text>
                            </UsageSvg>
                        </CardUsage>
                    </CardTop>
                    <CardTitle>{prompt.name}</CardTitle>
                    <CardDesc $expanded={expanded}>{prompt.description}</CardDesc>
                    <CardDomains $expanded={expanded}>
                        {prompt.domains.map((d) => (
                            <DomainCardChip key={d}>{d}</DomainCardChip>
                        ))}
                    </CardDomains>
                    <CardAgent>{prompt.agentId}</CardAgent>

                    {expanded && (
                        <CardPromptText>
                            {prompt.prompt_text}
                        </CardPromptText>
                    )}

                    <CardActions $expanded={expanded}>
                        <ActionButton
                            aria-label="Copy Prompt Text"
                            onClick={handleCopy}
                            $copied={copied}
                            $expanded={expanded}
                        >
                            {copied ? (
                                <CopyGlow aria-label="Copied!">✓</CopyGlow>
                            ) : (
                                "Copy"
                            )}
                        </ActionButton>
                        <ActionButton
                            aria-label="Edit"
                            onClick={handleEdit}
                            $expanded={expanded}
                        >
                            Edit
                        </ActionButton>
                        <ActionButton
                            aria-label="Delete"
                            onClick={handleDelete}
                            $expanded={expanded}
                        >
                            Delete
                        </ActionButton>
                    </CardActions>
                </CardContent>
            </CardShell>
        </>
    );
};
export default PromptCard;