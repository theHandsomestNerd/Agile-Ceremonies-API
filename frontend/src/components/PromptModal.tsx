import thnTheme from "../styles/globalStyles";
import {
    CloseBtn,
    Field,
    FieldError,
    FieldHint,
    FieldInput,
    FieldLabel,
    FieldSelect,
    FieldTextarea,
    ModalActionBtn,
    ModalActions,
    ModalContent,
    ModalOverlay,
    ModalTitle,
    ModalTop
} from "../styles/PLModal.styled";
import {Prompt} from "../types/PromptLibrary.types";
import {DomainChip, DomainMulti} from "../styles/PromptLibrary.styled";
import PromptLibraryData from "../data/PromptLibraryData";
import {useEffect, useRef, useState} from "react";
import {usePrompts} from "./Prompt.ctx";

// ============ MODAL/DRAWER w/ "code editor" ============
const PromptModal: React.FC<{
    mode: "new" | "edit" | "view";
    prompt?: Prompt;
    closeModal: () => void;
}> = ({mode, prompt, closeModal}) => {
    const {addPrompt, updatePrompt, loading} = usePrompts();
    const [name, setName] = useState(prompt?.name || "");
    const [description, setDescription] = useState(prompt?.description || "");
    const [domains, setDomains] = useState<string[]>(prompt?.domains || []);
    const [status, setStatus] = useState<"active" | "archived">(
        prompt?.status || "active"
    );
    const [agentId, setAgentId] = useState(prompt?.agentId || PromptLibraryData.AGENT_LIST[0]);
    const [promptText, setPromptText] = useState(prompt?.prompt_text || "");
    const formRef = useRef<HTMLFormElement | null>(null);

    // Field validation
    const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
    useEffect(() => {
        setName(prompt?.name || "");
        setDescription(prompt?.description || "");
        setDomains(prompt?.domains || []);
        setStatus(prompt?.status || "active");
        setAgentId(prompt?.agentId || PromptLibraryData.AGENT_LIST[0]);
        setPromptText(prompt?.prompt_text || "");
        setErrors({});
    }, [mode, prompt]);

    // Form submission
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs: typeof errors = {};
        if (!name.trim()) errs.name = "Name required";
        if (name.trim().length < 2) errs.name = "Name too short (min 2 chars)";
        if (!description.trim()) errs.description = "Required";
        if (promptText.trim().length < 10)
            errs.prompt_text = "Prompt text (10+ chars)";
        if (!domains.length) errs.domains = "Pick at least one (max 5)";
        setErrors(errs);
        if (Object.keys(errs).length) return;

        if (mode === "edit" && prompt) {
            await updatePrompt(prompt.id, {
                name,
                description,
                prompt_text: promptText,
                domains,
                status,
                agentId,
            });
        } else if (mode === "new") {
            await addPrompt({
                name,
                description,
                prompt_text: promptText,
                domains,
                status,
                authorId: "nat",
                agentId,
            });
        }
        closeModal();
    }

    // Domain chip toggle
    const toggleDomain = (d: string) => {
        setDomains((prev:any) =>
            prev.includes(d)
                ? prev.filter((x:any) => x !== d)
                : prev.length < 5
                    ? [...prev, d]
                    : prev
        );
    };

    // Escape trap/close on outside click
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") closeModal();
            if (e.key === "Tab" && formRef.current) {
                // Simple focus trap, cycles inside modal form
                const elements = formRef.current.querySelectorAll<HTMLElement>(
                    "input,textarea,select,button"
                );
                if (elements.length === 0) return;
                const first = elements[0];
                const last = elements[elements.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [closeModal]);

    return (
        <ModalOverlay aria-modal="true" role="dialog" tabIndex={-1}>
            <ModalContent>
                <ModalTop>
                    <ModalTitle>
                        {mode === "edit" ? "Edit Prompt" : "New Prompt"}
                    </ModalTitle>
                    <CloseBtn
                        aria-label="Close"
                        title="Close"
                        onClick={closeModal}
                    >
                        ×
                    </CloseBtn>
                </ModalTop>
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <Field>
                        <FieldLabel htmlFor="pn">Name</FieldLabel>
                        <FieldInput
                            id="pn"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            placeholder="Prompt title"
                            aria-invalid={!!errors.name}
                            required
                            autoFocus
                            minLength={2}
                        />
                        {errors.name && <FieldError>{errors.name}</FieldError>}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="pd">Description</FieldLabel>
                        <FieldInput
                            id="pd"
                            value={description}
                            onChange={(e: any) => setDescription(e.target.value)}
                            placeholder="Short description"
                            aria-invalid={!!errors.description}
                            required
                            minLength={6}
                        />
                        {errors.description && (
                            <FieldError>{errors.description}</FieldError>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel>Domains</FieldLabel>
                        <DomainMulti>
                            {PromptLibraryData.DOMAIN_LIST.map((d) => (
                                <DomainChip
                                    key={d}
                                    selected={domains.includes(d)}
                                    tabIndex={0}
                                    aria-pressed={domains.includes(d)}
                                    onClick={() => toggleDomain(d)}
                                    onKeyDown={(e: any) => {
                                        if (e.key === "Enter" || e.key === " ")
                                            toggleDomain(d);
                                    }}
                                >
                                    {d}
                                    {domains.includes(d) && <span>&nbsp;✓</span>}
                                </DomainChip>
                            ))}
                        </DomainMulti>
                        <FieldHint>
                            {domains.length === 0
                                ? "Pick one or more (max 5)"
                                : `${domains.length} selected`}
                        </FieldHint>
                        {errors.domains && <FieldError>{errors.domains}</FieldError>}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="agent">Agent</FieldLabel>
                        <FieldSelect
                            id="agent"
                            value={agentId}
                            onChange={(e: any) => setAgentId(e.target.value)}
                        >
                            {PromptLibraryData.AGENT_LIST.map((a) => (
                                <option key={a} value={a}>
                                    {a}
                                </option>
                            ))}
                        </FieldSelect>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="status">Status</FieldLabel>
                        <FieldSelect
                            id="status"
                            value={status}
                            onChange={(e: any) =>
                                setStatus(e.target.value as "active" | "archived")
                            }
                        >
                            <option value="active">Active</option>
                            <option value="archived">Archived</option>
                        </FieldSelect>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="ptxt">Prompt Text</FieldLabel>
                        <FieldTextarea
                            id="ptxt"
                            rows={8}
                            required
                            value={promptText}
                            spellCheck={false}
                            minLength={10}
                            aria-invalid={!!errors.prompt_text}
                            onChange={(e: any) => setPromptText(e.target.value)}
                            style={{
                                fontFamily: "'JetBrains Mono','SF Pro',monospace",
                                background: "#161234",
                                color: "#fff",
                                border:
                                    errors.prompt_text && promptText.length < 10
                                        ? "2.5px solid #ff00cc"
                                        : undefined,
                            }}
                        />
                        <FieldHint>
                            <b>Tip:</b> Use {"{"}variables{"}"} for dynamic replacement.
                        </FieldHint>
                        {errors.prompt_text && (
                            <FieldError>{errors.prompt_text}</FieldError>
                        )}
                    </Field>
                    <ModalActions>
                        <ModalActionBtn
                            type="submit"
                            disabled={loading}
                            aria-disabled={loading}
                        >
                            {loading
                                ? "Saving..."
                                : mode === "new"
                                    ? "Add"
                                    : "Save"}
                        </ModalActionBtn>
                        <ModalActionBtn
                            type="button"
                            onClick={closeModal}
                            style={{
                                background: thnTheme.cardGlass,
                                color: "#ffe",
                                marginLeft: 17,
                            }}
                        >
                            Cancel
                        </ModalActionBtn>
                    </ModalActions>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};
export default PromptModal;