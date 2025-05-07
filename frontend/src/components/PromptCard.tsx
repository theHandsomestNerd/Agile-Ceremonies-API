import React, {useState} from "react";
import {Prompt} from "../types/PromptLibrary.types";
import {usePrompts} from "./Prompt.ctx";
import {
    ActionButton,
    CardActions,
    CardAgent,
    CardDesc,
    CardDomains,
    CardShell,
    CardTitle,
    CardTop,
    CardUsage, CopyGlow, DomainCardChip,
    StatusBadge,
    UsageSvg
} from "../styles/PromptLibrary.styled";

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
    const {deletePrompt, incrementUsage, updatePrompt} = usePrompts();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(prompt.prompt_text);
        setCopied(true);
        incrementUsage(prompt.id);
        setTimeout(() => setCopied(false), 1050);
    };

    const handleEdit = () =>
        openModal({
            mode: "edit",
            prompt,
            open: true,
        });

    return (
        <CardShell $copied={copied}>
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
            <CardDesc>{prompt.description}</CardDesc>
            <CardDomains>
                {prompt.domains.map((d) => (
                    <DomainCardChip key={d}>{d}</DomainCardChip>
                ))}
            </CardDomains>
            <CardAgent>{prompt.agentId}</CardAgent>
            <CardActions>
                <ActionButton
                    aria-label="Copy Prompt Text"
                    onClick={handleCopy}
                    $copied={copied}
                >
                    {copied ? (
                        <CopyGlow aria-label="Copied!">✓</CopyGlow>
                    ) : (
                        "Copy"
                    )}
                </ActionButton>
                <ActionButton aria-label="Edit" onClick={handleEdit}>
                    Edit
                </ActionButton>
                <ActionButton
                    aria-label="Delete"
                    onClick={() => deletePrompt(prompt.id)}
                >
                    Delete
                </ActionButton>
            </CardActions>
        </CardShell>
    );
};
export default PromptCard;