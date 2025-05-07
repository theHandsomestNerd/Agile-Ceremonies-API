import React, {createContext, useContext, useEffect, useRef, useState,} from "react";
import thnTheme from "./thnTheme";
import {
    ActionButton,
    AppMain,
    AppOuter,
    CardActions,
    CardAgent,
    CardDesc,
    CardDomains,
    CardShell,
    CardTitle,
    CardTop,
    CardUsage,
    CloseBtn,
    CopyGlow,
    CreateBtn,
    DashOuter,
    DomainCardChip,
    DomainCellChip,
    DomainChip,
    DomainLogicHint,
    DomainLogicToggle,
    DomainMulti,
    Field,
    FieldError,
    FieldHint,
    FieldInput,
    FieldLabel,
    FieldSelect,
    FieldTextarea,
    FilterBar,
    FilterDropdown,
    FilterLabel,
    FilterSearch,
    LogoSvg,
    ModalActionBtn,
    ModalActions,
    ModalContent,
    ModalOverlay,
    ModalTitle,
    ModalTop,
    Nav,
    NavAvatar,
    NavBrand,
    NavTitle,
    NoResults,
    PromptGrid,
    PromptTable,
    PromptTableRow,
    SearchInputWrapper,
    SearchSVG,
    StatusBadge,
    TableActionBtn,
    TableScroll,
    ToggleViewBtns,
    UsageSvg,
    ViewBtn
} from "./PromptLibrary.styled";
import {GridIcon, TableIcon} from "./components/PromptLibraryIcons";

interface PromptLibraryProps {
    onBackToWorkflow: () => void;
}

// ================== DATA MODEL/TYPES ===================
export type Prompt = {
    id: string;
    name: string;
    description: string;
    prompt_text: string;
    domains: string[];
    status: "active" | "archived";
    created_at: string;
    updated_at: string;
    last_used?: string;
    authorId: string;
    usage_count: number;
    prompt_log_refs: string[];
    agentId: string;
};

const AGENT_LIST = [
    "nat",
    "brian",
    "reqqy",
    "josh",
    "james",
    "terrell",
    "antosh",
    "man-man",
    "lia",
];
const DOMAIN_LIST = [
    "meeting",
    "summary",
    "bug",
    "qa",
    "repro",
    "design",
    "test",
    "email",
    "social",
];

// --------- MOCK DATA (for local/first use) --------------
const initialPrompts: Prompt[] = Array.from({length: 50}, (_, i) => ({
    id: String(i + 1),
    name: `Prompt #${i + 1}`,
    description: `Test prompt example for domain features #${i + 1}`,
    prompt_text:
        i % 6 === 0
            ? "Summarize the following transcript:\n{transcript}"
            : i % 6 === 1
                ? "Write bug reproduction steps for:\n{bug_report}"
                : i % 6 === 2
                    ? "Draft an email inviting stakeholders to:\n{event}"
                    : i % 6 === 3
                        ? "Generate tests for feature:\n{feature}"
                        : i % 6 === 4
                            ? "Design a hero banner for:\n{theme}"
                            : "Social post for:\n{announcement}",
    domains: (() => {
        const map = [
            ["meeting", "summary"],
            ["bug", "qa", "repro"],
            ["email", "social"],
            ["test", "qa", "bug"],
            ["design", "summary"],
            ["social", "email"],
        ];
        return map[i % map.length];
    })(),
    status: i % 10 === 0 ? "archived" : "active",
    created_at: new Date(Date.now() - i * 6e5).toISOString(),
    updated_at: new Date(Date.now() - i * 3e5).toISOString(),
    last_used:
        i % 7 === 0
            ? new Date(Date.now() - i * 1.9e6).toISOString()
            : undefined,
    authorId: AGENT_LIST[i % AGENT_LIST.length],
    usage_count: Math.floor(Math.random() * 30),
    prompt_log_refs: [],
    agentId: AGENT_LIST[i % AGENT_LIST.length],
}));

// ============== PROMPT CTX (CRUD, ready for Firestore!) ================
interface PromptCtxType {
    prompts: Prompt[];
    addPrompt: (
        p: Omit<
            Prompt,
            | "id"
            | "created_at"
            | "updated_at"
            | "usage_count"
            | "last_used"
            | "prompt_log_refs"
        >
    ) => Promise<void>;
    updatePrompt: (id: string, d: Partial<Prompt>) => Promise<void>;
    deletePrompt: (id: string) => Promise<void>;
    incrementUsage: (id: string) => Promise<void>;
    loading: boolean;
}

const PromptContext = createContext<PromptCtxType | null>(null);

const PromptProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                     children,
                                                                 }) => {
    const [prompts, setPrompts] = useState<Prompt[]>(initialPrompts);
    const [loading, setLoading] = useState(false);

    // ---- Simulate async for CRUD
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const addPrompt: PromptCtxType["addPrompt"] = async (data) => {
        setLoading(true);
        await wait(320);
        const now = new Date().toISOString();
        setPrompts((prev) => [
            ...prev,
            {
                ...data,
                id: Math.random().toString(36).slice(2),
                created_at: now,
                updated_at: now,
                last_used: undefined,
                usage_count: 0,
                prompt_log_refs: [],
            },
        ]);
        setLoading(false);
    };
    const updatePrompt: PromptCtxType["updatePrompt"] = async (id, updates) => {
        setLoading(true);
        await wait(150);
        setPrompts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? {...p, ...updates, updated_at: new Date().toISOString()}
                    : p
            )
        );
        setLoading(false);
    };
    const deletePrompt: PromptCtxType["deletePrompt"] = async (id) => {
        setLoading(true);
        await wait(110);
        setPrompts((prev) => prev.filter((p) => p.id !== id));
        setLoading(false);
    };
    const incrementUsage: PromptCtxType["incrementUsage"] = async (id) => {
        setPrompts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? {
                        ...p,
                        usage_count: (p.usage_count ?? 0) + 1,
                        last_used: new Date().toISOString(),
                    }
                    : p
            )
        );
    };
    return (
        <PromptContext.Provider
            value={{
                prompts,
                addPrompt,
                updatePrompt,
                deletePrompt,
                incrementUsage,
                loading,
            }}
        >
            {children}
        </PromptContext.Provider>
    );
};

function usePrompts() {
    const c = useContext(PromptContext);
    if (!c) throw new Error("PromptProvider not initialized");
    return c;
}

// ================ MAIN COMPONENT ===================
const PromptLibrary: React.FC<PromptLibraryProps> = ({onBackToWorkflow}) => {
    const [modal, setModal] = useState<{
        mode: "new" | "edit" | "view";
        prompt?: Prompt;
        open: boolean;
    }>({mode: "new", prompt: undefined, open: false});
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    return (
        <PromptProvider>
            <AppOuter>
                <TopNav/>
                <AppMain>
                    <PromptDashboard
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        openModal={setModal}
                    />
                </AppMain>
                {modal.open && (
                    <PromptModal
                        mode={modal.mode}
                        prompt={modal.prompt}
                        closeModal={() => setModal((m) => ({...m, open: false}))}
                    />
                )}
            </AppOuter>
        </PromptProvider>
    );
};

// ============== TOP NAV ==========================
const TopNav: React.FC = () => (
    <Nav>
        <NavBrand>
            <LogoSvg
                width={44}
                height={44}
                aria-label="THN AI Logo"
                focusable={false}
                role="img"
            >
                <defs>
                    <linearGradient id="logograd" x1="0" x2="1" y1="0" y2="1">
                        <stop stopColor={thnTheme.joshPrimary}/>
                        <stop offset="1" stopColor="#06d6a0"/>
                    </linearGradient>
                </defs>
                <circle cx={22} cy={22} r={21} fill="url(#logograd)"/>
                <text
                    x="22"
                    y="30"
                    fontFamily="'JetBrains Mono','SF Pro',sans-serif"
                    fontSize="19"
                    textAnchor="middle"
                    fontWeight={900}
                    fill="#fff"
                >
                    THN
                </text>
            </LogoSvg>
            <NavTitle>Prompt Library Manager</NavTitle>
        </NavBrand>
        <span style={{color: thnTheme.joshPrimary, fontWeight: 700, fontSize: 18}}>
      v1.0
    </span>
        <NavAvatar>
            <span aria-label="Profile">@</span>
        </NavAvatar>
    </Nav>
);

// =============== DASHBOARD ===============
const PromptDashboard: React.FC<{
    viewMode: "grid" | "table";
    setViewMode: (v: "grid" | "table") => void;
    openModal: React.Dispatch<
        React.SetStateAction<{
            mode: "new" | "edit" | "view";
            prompt?: Prompt;
            open: boolean;
        }>
    >;
}> = ({viewMode, setViewMode, openModal}) => {
    const {prompts} = usePrompts();

    // -- Multi-domain filter logic
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "archived">(
        "all"
    );
    const [agentFilter, setAgentFilter] = useState("all");
    const [domainFilters, setDomainFilters] = useState<string[]>([]);
    const [domainLogic, setDomainLogic] = useState<"AND" | "OR">("OR");

    // --- FILTERED PROMPTS (Multi-domain AND/OR logic) ---
    const filtered = prompts.filter((p) => {
        if (statusFilter !== "all" && p.status !== statusFilter) return false;
        if (agentFilter !== "all" && p.agentId !== agentFilter) return false;
        if (domainFilters.length > 0) {
            if (
                domainLogic === "AND" &&
                !domainFilters.every((df) => p.domains.includes(df))
            )
                return false;
            if (
                domainLogic === "OR" &&
                !domainFilters.some((df) => p.domains.includes(df))
            )
                return false;
        }
        if (
            search &&
            ![p.name, p.description, p.prompt_text]
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase())
        )
            return false;
        return true;
    });

    // -- Chip-filter selection logic
    const handleDomainSelect = (d: string) => {
        setDomainFilters((prev) =>
            prev.includes(d)
                ? prev.filter((x) => x !== d)
                : prev.length < 5
                    ? [...prev, d]
                    : prev
        );
    };

    return (
        <DashOuter>
            <FilterBar>
                <SearchInputWrapper>
                    <SearchSVG width={23} height={23} aria-hidden>
                        <circle
                            cx={10}
                            cy={10}
                            r={7.8}
                            stroke="#fff"
                            strokeWidth={2}
                            fill="none"
                            opacity={0.7}
                        />
                        <line
                            x1={16.1}
                            y1={16.2}
                            x2={21.2}
                            y2={21.3}
                            stroke="#06d6a0"
                            strokeWidth={2}
                            strokeLinecap="round"
                            opacity={0.85}
                        />
                    </SearchSVG>
                    <FilterSearch
                        aria-label="Search Prompts"
                        placeholder="Search prompts..."
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                    />
                </SearchInputWrapper>
                <FilterLabel>
                    Status:
                    <FilterDropdown
                        value={statusFilter}
                        onChange={(e: any) => setStatusFilter(e.target.value as any)}
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="archived">Archived</option>
                    </FilterDropdown>
                </FilterLabel>
                <FilterLabel>
                    Agent:
                    <FilterDropdown
                        value={agentFilter}
                        onChange={(e: any) => setAgentFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        {AGENT_LIST.map((a) => (
                            <option value={a} key={a}>
                                {a}
                            </option>
                        ))}
                    </FilterDropdown>
                </FilterLabel>
                <FilterLabel>
                    Domains:
                    <DomainMulti>
                        {DOMAIN_LIST.map((d) => (
                            <DomainChip
                                key={d}
                                selected={domainFilters.includes(d)}
                                tabIndex={0}
                                aria-pressed={domainFilters.includes(d)}
                                onClick={() => handleDomainSelect(d)}
                                onKeyDown={(e: any) => {
                                    if (e.key === "Enter" || e.key === " ") handleDomainSelect(d);
                                }}
                            >
                                {d}
                                {domainFilters.includes(d) && <span>&nbsp;✓</span>}
                            </DomainChip>
                        ))}
                    </DomainMulti>
                    <DomainLogicToggle
                        onClick={() => setDomainLogic((l) => (l === "AND" ? "OR" : "AND"))}
                        tabIndex={0}
                        aria-label="Toggle Domain Filter Logic AND/OR"
                        onKeyDown={(e: any) => {
                            if (e.key === "Enter" || e.key === " ")
                                setDomainLogic((l) => (l === "AND" ? "OR" : "AND"));
                        }}
                        selected={domainLogic === "AND"}
                    >
                        {domainFilters.length >= 2 ? domainLogic : "OR"}
                    </DomainLogicToggle>
                    <DomainLogicHint>
                        {domainFilters.length >= 2
                            ? domainLogic === "AND"
                                ? "All selected"
                                : "Any selected"
                            : "Select domains"}
                    </DomainLogicHint>
                </FilterLabel>
                <ToggleViewBtns>
                    <ViewBtn
                        aria-label="Grid View"
                        active={viewMode === "grid"}
                        onClick={() => setViewMode("grid")}
                    >
                        <GridIcon/>
                    </ViewBtn>
                    <ViewBtn
                        aria-label="Table View"
                        active={viewMode === "table"}
                        onClick={() => setViewMode("table")}
                    >
                        <TableIcon/>
                    </ViewBtn>
                </ToggleViewBtns>
                <CreateBtn
                    aria-label="Add New Prompt"
                    onClick={() =>
                        openModal({
                            mode: "new",
                            prompt: undefined,
                            open: true,
                        })
                    }
                >
                    + New Prompt
                </CreateBtn>
            </FilterBar>
            {filtered.length === 0 ? (
                <NoResults>Sorry, no prompts match these filters.</NoResults>
            ) : viewMode === "grid" ? (
                <PromptGrid>
                    {filtered.map((prompt) => (
                        <PromptCard
                            key={prompt.id}
                            prompt={prompt}
                            openModal={openModal}
                        />
                    ))}
                </PromptGrid>
            ) : (
                <PromptTableView
                    prompts={filtered}
                    openModal={openModal}
                />
            )}
        </DashOuter>
    );
};

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


// ======= TABLE VIEW =======
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
    const [agentId, setAgentId] = useState(prompt?.agentId || AGENT_LIST[0]);
    const [promptText, setPromptText] = useState(prompt?.prompt_text || "");
    const formRef = useRef<HTMLFormElement | null>(null);

    // Field validation
    const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
    useEffect(() => {
        setName(prompt?.name || "");
        setDescription(prompt?.description || "");
        setDomains(prompt?.domains || []);
        setStatus(prompt?.status || "active");
        setAgentId(prompt?.agentId || AGENT_LIST[0]);
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
        setDomains((prev) =>
            prev.includes(d)
                ? prev.filter((x) => x !== d)
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
                            {DOMAIN_LIST.map((d) => (
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
                            {AGENT_LIST.map((a) => (
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

export default PromptLibrary;