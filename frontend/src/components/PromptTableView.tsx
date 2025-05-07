
// ======= TABLE VIEW =======
import React, {useState} from "react";
import {Prompt} from "../types/PromptLibrary.types";
import {usePrompts} from "./Prompt.ctx";
import {
    StatusBadge
} from "../styles/PromptLibrary.styled";
import {DomainCellChip, PromptTable, PromptTableRow, TableActionBtn, TableScroll} from "../styles/PromptTable.styled";

const PromptTableView: React.FC<{
    prompts: Prompt[];
    openModal: React.Dispatch<
        React.SetStateAction<{
            mode: "new" | "edit" | "view";
            prompt?: Prompt;
            open: boolean;
        }>
    >;
}> = ({prompts, openModal}) => {
    const {deletePrompt, incrementUsage} = usePrompts();
    const [copiedId, setCopiedId] = useState<string | null>(null);
    return (
        <TableScroll>
            <PromptTable>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Domains</th>
                    <th>Agent</th>
                    <th>Status</th>
                    <th>Used</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {prompts.map((p, i) => (
                    <PromptTableRow
                        key={p.id}
                        $active={i % 2 === 0}
                    >
                        <td>
                            <span>{p.name}</span>
                        </td>
                        <td>
                            <span>{p.description}</span>
                        </td>
                        <td>
                <span>
                  {p.domains.map((d) => (
                      <DomainCellChip key={d}>{d}</DomainCellChip>
                  ))}
                </span>
                        </td>
                        <td>
                            <span>{p.agentId}</span>
                        </td>
                        <td>
                            <StatusBadge status={p.status}>
                                {p.status}
                            </StatusBadge>
                        </td>
                        <td>
                            <span>{p.usage_count}</span>
                        </td>
                        <td>
                            <TableActionBtn
                                onClick={async () => {
                                    await navigator.clipboard.writeText(
                                        p.prompt_text
                                    );
                                    setCopiedId(p.id);
                                    incrementUsage(p.id);
                                    setTimeout(() => setCopiedId(null), 1050);
                                }}
                                $copied={copiedId === p.id}
                                aria-label="Copy Prompt"
                            >
                                {copiedId === p.id ? "✓" : "Copy"}
                            </TableActionBtn>
                            <TableActionBtn
                                onClick={() =>
                                    openModal({
                                        mode: "edit",
                                        prompt: p,
                                        open: true,
                                    })
                                }
                                aria-label="Edit Prompt"
                            >
                                Edit
                            </TableActionBtn>
                            <TableActionBtn
                                onClick={() => deletePrompt(p.id)}
                                aria-label="Delete Prompt"
                            >
                                Delete
                            </TableActionBtn>
                        </td>
                    </PromptTableRow>
                ))}
                </tbody>
            </PromptTable>
        </TableScroll>
    );
};

export default PromptTableView;