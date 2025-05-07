import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useRef,
} from "react";
import styled, {
    createGlobalStyle,
    keyframes,
    css,
    ThemeProvider,
} from "styled-components";

// ==================== THEME: AI, GLASS, ACCENT =======================
const thnTheme = {
    // Core BG/Surface
    darkBG: "#15151e",
    darkSurface: "#1a2236",
    darkAccent: "#201945",
    glassMain: "rgba(255,255,255,0.07)",
    glassStrong: "rgba(34,39,50,0.92)",

    // Gradient Accents
    gradientMain: "linear-gradient(90deg,#8b5cf6,#06d6a0)",
    gradientAlt: "linear-gradient(90deg,#ff00cc,#333399)",
    neonTeal: "#06d6a0",
    cyberPink: "#ff00cc",
    electricPurple: "#9333EA",

    // State Colors
    status_active: "#22C55E",
    status_archived: "#EF4444",
    divider: "#252464",
    tableStripe: "#222244",

    // Disabled, focus
    disabled: "#8b5cf644",
    focusBox: "0 0 0 3px #9333EA99",
    focusBtn: "0 0 6px #9333EAaa",

    // Shadows, cards
    cardGlow:
        "0 0 16px 4px #8b5cf688,0 4px 32px 0 #06d6a055",
    cardGlass: "rgba(255,255,255,0.088)",
};

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
const initialPrompts: Prompt[] = Array.from({ length: 50 }, (_, i) => ({
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
                    ? { ...p, ...updates, updated_at: new Date().toISOString() }
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

// ==================== GLOBAL STYLES ==================
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    background: ${thnTheme.darkBG};
    min-height: 100vh;
    color: #fff;
    letter-spacing: -0.01em;
    font-family: 'Inter','JetBrains Mono','SF Pro',system-ui;
    margin: 0; padding: 0;
  }
  * { box-sizing: border-box; }
  :root { color-scheme: dark; }
  ::selection { background: ${thnTheme.cyberPink}33; }
  button, input, select, textarea { font-family: inherit; }
  .sr-only {position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;}
`;

// ================== APP ===========================
const PromptLibrary: React.FC = () => {
    const [modal, setModal] = useState<{
        mode: "new" | "edit" | "view";
        prompt?: Prompt;
        open: boolean;
    }>({ mode: "new", prompt: undefined, open: false });
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    return (
        <ThemeProvider theme={thnTheme}>
            <PromptProvider>
                <GlobalStyle />
                <AppOuter>
                    <TopNav />
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
                            closeModal={() => setModal((m) => ({ ...m, open: false }))}
                        />
                    )}
                </AppOuter>
            </PromptProvider>
        </ThemeProvider>
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
                        <stop stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#06d6a0" />
                    </linearGradient>
                </defs>
                <circle cx={22} cy={22} r={21} fill="url(#logograd)" />
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
        <span style={{ color: thnTheme.neonTeal, fontWeight: 700, fontSize: 18 }}>
      v1.0
    </span>
        <NavAvatar>
            <span aria-label="Profile">@</span>
        </NavAvatar>
    </Nav>
);

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 62px;
  height: 4.5rem;
  padding: 0 2rem;
  background: rgba(24, 15, 41, 0.88);
  box-shadow: 0 4px 24px #8b5cf633;
  backdrop-filter: blur(6px);
  border-bottom: 2px solid #271666;
  z-index: 30;
`;

const LogoSvg = styled.svg`
  width: 44px; height: 44px; margin-right: 1.5rem; user-select: none;
`;
const NavBrand = styled.div`
  display: flex; align-items: center; gap: 1rem;
`;
const NavTitle = styled.span`
  font-size: 1.55rem;
  font-weight: 900;
  background: ${thnTheme.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
`;
const NavAvatar = styled.div`
  min-width: 44px;
  min-height: 44px;
  background: ${thnTheme.glassMain};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  border: 2.5px solid #8b5cf6;
  box-shadow: 0 0 12px ${thnTheme.electricPurple}77;
`;

// ================== APP LAYOUT ===============
const AppOuter = styled.div`
  width: 100vw; min-height: 100vh;
  display: flex; flex-direction: column;
`;
const AppMain = styled.main`
  width: 100vw; flex: 1 1 0;
  display: flex; flex-direction: column; align-items: center;
  background: ${thnTheme.darkBG};
  padding-bottom: 8rem;
`;

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
}> = ({ viewMode, setViewMode, openModal }) => {
    const { prompts } = usePrompts();

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
                        onChange={(e:any) => setSearch(e.target.value)}
                    />
                </SearchInputWrapper>
                <FilterLabel>
                    Status:
                    <FilterDropdown
                        value={statusFilter}
                        onChange={(e:any) => setStatusFilter(e.target.value as any)}
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
                        onChange={(e:any) => setAgentFilter(e.target.value)}
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
                                onKeyDown={(e:any) => {
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
                        onKeyDown={(e:any) => {
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
                        <GridIcon />
                    </ViewBtn>
                    <ViewBtn
                        aria-label="Table View"
                        active={viewMode === "table"}
                        onClick={() => setViewMode("table")}
                    >
                        <TableIcon />
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

const DashOuter = styled.section`
  width: 98vw; max-width: 112em;
  margin-top: 2.7rem;
  display: flex; flex-direction: column; align-items: stretch;
  padding: 0 1.5vw;
`;

const FilterBar = styled.div`
  display: flex; flex-wrap: wrap;
  gap: 1.2rem 2.2rem;
  align-items: center;
  justify-content: flex-start;
  background: ${thnTheme.cardGlass};
  border-radius: 16px;
  min-height: 56px;
  margin-bottom: 2.3rem;
  box-shadow: 0 0 9px 1.5px #8b5cf655;
  padding: 14px 12px 14px 2.2vw;
`;

const SearchSVG = styled.svg`display: block; position: absolute; left: 13px; top: 8px; pointer-events: none;`;
const SearchInputWrapper = styled.label`
  position: relative;
  display: flex; align-items: center;
  width: 246px; max-width: 99vw;
`;
const FilterSearch = styled.input`
  width: 100%; padding: 7.5px 13px 7.5px 33px;
  border-radius: 9px; border: none;
  background: #222244;
  font-size: 1.1rem; color: #fff;
  outline: none;
  transition: border 0.13s, box-shadow 0.13s;
  &:focus {
    box-shadow: ${thnTheme.focusBox};
    border: 2px solid ${thnTheme.neonTeal};
  }
`;

const FilterLabel = styled.label`
  font-size: 1.02em; color: #fff;
  display: flex; align-items: center;
  gap: 0.4em;
  min-width: 40px; user-select: none;
`;

const FilterDropdown = styled.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4; font-weight: 600;
  border: none; outline: none;
  padding: 0.38em 0.82em;
  margin-left: 0.5em;
  transition: box-shadow 0.11s;
  &:focus {
    box-shadow: ${thnTheme.focusBox};
    border: 2.5px solid ${thnTheme.neonTeal};
  }
`;

const DomainMulti = styled.div`
  display: flex; flex-wrap: wrap; gap: 0.25em;
  margin-left: 0.51em; max-width: 270px; user-select: none;
`;
const DomainChip = styled.button<{ selected: boolean }>`
  background: ${(p) =>
    p.selected
        ? thnTheme.gradientMain
        : thnTheme.cardGlass};
  color: ${(p) => (p.selected ? "#11151f" : "#fff")};
  border: none;
  border-radius: 33px;
  padding: 0.25em 0.87em;
  font-size: 0.98em; font-weight: 600;
  margin-bottom: 1.3px;
  box-shadow: ${(p) =>
    p.selected
        ? "0 1.5px 9px #06d6a044"
        : "none"};
  outline: none;
  transition: box-shadow 0.13s, background 0.13s;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2.7px #ff00cc99;
    z-index: 1;
  }
`;
const DomainLogicToggle = styled.button<{ selected: boolean }>`
  margin-left: 0.95em;
  font-weight: 900; font-size: 1.05em;
  background: ${(p) =>
    p.selected
        ? thnTheme.gradientAlt
        : thnTheme.cardGlass};
  color: ${(p) => (p.selected ? "#15151e" : "#fff")};
  padding: 2.5px 17px; border-radius: 19px; border: none; cursor: pointer;
  transition: background 0.15s, color 0.15s;
  &:focus {box-shadow:0 0 0 2.8px #9333EA99;}
`;
const DomainLogicHint = styled.span`
  display: block; font-size: 0.91em; margin-left: 0.7em;
  color: #8b5cf6cc; font-weight: 500;
`;

const ToggleViewBtns = styled.div`
  display: flex; gap: 0.32em; align-items: center; margin-left: 1.9em;
`;
const ViewBtn = styled.button<{ active: boolean }>`
  background: ${(p) => (p.active ? thnTheme.gradientAlt : thnTheme.glassMain)};
  color: ${(p) => (p.active ? "#fff" : "#9b8cff")};
  border: none; outline: none;
  border-radius: 7px;
  min-width: 36px; min-height: 36px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2em;
  box-shadow: ${(p) =>
    p.active ? "0 0 11px #ff00cc77" : "none"};
  transition: box-shadow 0.11s, background 0.13s;
  cursor: pointer;
  &:focus { box-shadow: 0 0 0 2.2px #9333EA88; }
`;

const CreateBtn = styled.button`
  margin-left: 2.2em;
  font-size: 1.13em;
  font-weight: 700;
  background: ${thnTheme.gradientMain};
  color: #fff;
  border: none; border-radius: 8.5px; min-height: 38px; min-width: 142px;
  box-shadow: 0 1px 14px #06d6a044;
  transition: transform 0.11s, box-shadow 0.12s;
  cursor: pointer;
  &:hover {transform: scale(1.038); box-shadow: 0 0 24px #9333EA66;}
  &:focus {box-shadow: 0 0 0 3px #06d6a099;}
`;

const NoResults = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  color: #fff; font-size: 1.24em; font-weight: 500;
`;

// =============== PROMPT GRID & CARD ==========================
const PromptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
  gap: 2.4rem 1.5rem;
  margin-top: 1.95rem;
  padding-bottom: 3rem;
`;

// ---- Card Glow Animation (for copy/active states) ------------
const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 #06d6a0,0 0 17px 4px #9333EA66;}
  47%{box-shadow:0 0 0 7px #06d6a077,0 0 27px 10px #8b5cf688;}
  98%,100%{box-shadow:0 0 0 0 #06d6a0,0 0 20px 7px #9333EA55;}
`;

const PromptCard: React.FC<{
    prompt: Prompt;
    openModal: React.Dispatch<
        React.SetStateAction<{
            mode: "new" | "edit" | "view";
            prompt?: Prompt;
            open: boolean;
        }>
    >;
}> = ({ prompt, openModal }) => {
    const { deletePrompt, incrementUsage, updatePrompt } = usePrompts();
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

const CardShell = styled.div<{ $copied: boolean }>`
  background: ${thnTheme.cardGlass};
  border-radius: 1.45rem;
  box-shadow: 0 0 24px 4px #8b5cf655;
  border: 1px solid #271666;
  padding: 2rem 1.22rem 1.18rem 1.48rem;
  display: flex; flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 285px;
  user-select: text;
  transition: box-shadow 0.18s, border 0.18s;
  ${(p) =>
    p.$copied &&
    css`
      animation: ${glowPulse} 1.015s 1;
      border: 2.5px solid ${thnTheme.neonTeal};
    `}
  &:hover {
    box-shadow: 0 0 44px 8px #06d6a066;
    border-color: #06d6a0;
  }
`;

const CardTop = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 0.45em;
`;
const StatusBadge = styled.span<{ status: "active" | "archived" }>`
  background: ${(p) =>
    p.status === "active"
        ? thnTheme.gradientMain
        : "linear-gradient(90deg,#48445a,#a90042)"};
  color: #fff;
  border-radius: 2em;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.22em 1.05em;
  letter-spacing: 0.06em;
`;
const CardUsage = styled.span`
  display: flex;
  align-items: center; gap: 0.24em;
  font-size: 0.98em;
`;
const UsageSvg = styled.svg`
  display: inline-block; vertical-align: middle;
`;

const CardTitle = styled.h2`
  font-size: 1.24rem;
  font-weight: bold;
  background: ${thnTheme.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.18em 0 0.6em 0;
  line-height: 1.14em;
  letter-spacing: -0.025em;
  user-select: text;
`;

const CardDesc = styled.p`
  color: #e3e9ff;
  font-size: 0.98em;
  margin: 0 0 0.51em 0;
  user-select: text;
`;

const CardDomains = styled.div`
  margin-bottom: 0.61em; display: flex; flex-wrap: wrap; gap: 0.3em;
`;
const DomainCardChip = styled.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 19px;
  font-size: 0.8em;
  font-weight: 700;
  padding: 0.3em 0.7em;
  margin-bottom: 0.07em;
  display: inline-block;
`;

const CardAgent = styled.div`
  color: #8b5cf6;
  font-size: 0.91em;
  font-weight: 600;
  margin-top: -0.11em; margin-bottom: 1.19em;
  letter-spacing: 0.02em;
`;

const CardActions = styled.div`
  display: flex; gap: 1.2rem; margin-top: 0.93rem;
`;

const ActionButton = styled.button<{ $copied?: boolean }>`
  background: ${(p) =>
    p.$copied
        ? thnTheme.gradientMain
        : thnTheme.gradientAlt};
  color: #fff; border: none; border-radius: 5.5px;
  font-weight: 700; font-size: 1em;
  padding: 0.38em 1.16em;
  box-shadow: 0 0 8px #8b5cf644;
  transition: transform 0.08s, box-shadow 0.12s, background 0.09s;
  cursor: pointer;
  &:hover,&:focus {transform: scale(1.049);}
  ${(p) =>
    p.$copied &&
    css`
      background: ${thnTheme.gradientMain};
      box-shadow: 0 0 20px #06d6a0cc;
    `}
`;
const CopyGlow = styled.span`
  color: #06d6a0; font-weight: 900; font-size: 1.27em;
  text-shadow: 0 0 10px #06d6a0,0 0 4px #fff;
`;

const GridIcon = () => (
    <svg
        width={18}
        height={18}
        aria-hidden
        style={{ display: "block" }}
        viewBox="0 0 18 18"
    >
        <rect x="2.5" y="2.5" width="5" height="5" rx="1.5" fill="#fff"></rect>
        <rect
            x="10.5"
            y="2.5"
            width="5"
            height="5"
            rx="1.5"
            fill="#8b5cf6"
        ></rect>
        <rect
            x="2.5"
            y="10.5"
            width="5"
            height="5"
            rx="1.5"
            fill="#06d6a0"
        ></rect>
        <rect
            x="10.5"
            y="10.5"
            width="5"
            height="5"
            rx="1.5"
            fill="#ff00cc"
        ></rect>
    </svg>
);
const TableIcon = () => (
    <svg
        width={18}
        height={18}
        aria-hidden
        style={{ display: "block" }}
        viewBox="0 0 18 18"
    >
        <rect
            x="2.5"
            y="4.83"
            width="13"
            height="2.5"
            rx="1.1"
            fill="#9333ea"
        ></rect>
        <rect
            x="2.6"
            y="9.13"
            width="13"
            height="2.53"
            rx="1.09"
            fill="#fff"
        ></rect>
        <rect
            x="2.45"
            y="13.3"
            width="13.08"
            height="2.05"
            rx="1.01"
            fill="#06d6a0"
        ></rect>
    </svg>
);

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
}> = ({ prompts, openModal }) => {
    const { deletePrompt, incrementUsage } = usePrompts();
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

const TableScroll = styled.div`
  overflow-x: auto;
  width: 100%; min-width: 920px; border-radius: 1.2rem;
  background: ${thnTheme.cardGlass};
  box-shadow: 0px 5px 38px #8b5cf644;
`;

const PromptTable = styled.table`
  width: 100%; border-collapse: collapse;
  th, td {
    font-size: 0.94em; padding: 0.61em 0.4em 0.55em 0.8em;
    text-align: left; vertical-align: top;
    font-family: inherit; color: #fff;
  }
  th {
    background: #201945; position: sticky; top: 0; font-weight: 700;
    letter-spacing: 0.03em; z-index: 2;
    border-top-left-radius: 1.2em; border-top-right-radius: 1.2em;
  }
`;

const PromptTableRow = styled.tr<{ $active: boolean }>`
  background: ${(p) =>
    p.$active ? "#15151ee6" : "#232349cc"};
  &:hover { background: #28254a; }
`;

const DomainCellChip = styled.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 11px;
  font-size: 0.87em;
  font-weight: 700;
  padding: 0.16em 0.58em;
  margin-right: 0.18em;
`;

const TableActionBtn = styled.button<{ $copied?: boolean }>`
  background: ${(p) =>
    p.$copied ? thnTheme.gradientMain : thnTheme.cardGlass};
  color: ${(p) => (p.$copied ? "#15151e" : "#fff")};
  border-radius: 7px; border: none;
  font-weight: 700; font-size: 1.01em;
  padding: 0.28em 0.87em;
  margin-right: 0.38em;
  min-width: 56px; cursor: pointer;
  &:hover, &:focus {
    background: ${thnTheme.gradientAlt};
    color: #15151e;
    box-shadow: 0 0 9px #ff00cc99;
  }
  transition: background 0.12s, color 0.13s;
`;

// ============ MODAL/DRAWER w/ "code editor" ============
const fadeIn = keyframes`
  0%{transform:translateY(60px) scale(.96);opacity:0;}
  100%{transform:translateY(0) scale(1);opacity:1;}
`;

const PromptModal: React.FC<{
    mode: "new" | "edit" | "view";
    prompt?: Prompt;
    closeModal: () => void;
}> = ({ mode, prompt, closeModal }) => {
    const { addPrompt, updatePrompt, loading } = usePrompts();
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
                            onChange={(e:any) => setName(e.target.value)}
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
                            onChange={(e:any) => setDescription(e.target.value)}
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
                                    onKeyDown={(e:any) => {
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
                            onChange={(e:any) => setAgentId(e.target.value)}
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
                            onChange={(e:any) =>
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
                            onChange={(e:any) => setPromptText(e.target.value)}
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

const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(25,18,40,0.85); z-index: 99;
  display: flex; align-items: center; justify-content: center;
  animation: ${fadeIn} 0.22s;
`;

const ModalContent = styled.div`
  background: ${thnTheme.glassMain};
  border-radius: 2.2em;
  max-width: 420px; width: 96vw;
  min-height: 13.5em;
  box-shadow: 0 10px 64px #8b5cf6bb;
  border: 1.8px solid #8b5cf6;
  padding: 2.2em 2em 1.6em 2.05em;
  animation: ${fadeIn} 0.15s;
`;
const ModalTop = styled.div`
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.3em;
`;

const ModalTitle = styled.h2`
  font-size: 1.31em; font-weight: 900;
  background: ${thnTheme.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`;
const CloseBtn = styled.button`
  border: none; background: transparent; color: #fff;
  font-size: 2.2em; font-weight: bold;
  opacity: 0.88; cursor: pointer; line-height: 1;
  transition: color 0.12s;
  &:hover { color: #ff00cc; }
`;

const Field = styled.div`
  margin-bottom: 1.25em; display: flex; flex-direction: column;
`;

const FieldLabel = styled.label`
  font-size: 1.045em; font-weight: 600; color: #fff;
  margin-bottom: 0.22em; text-shadow: 0 2px 22px #06d6a062;
`;
const FieldInput = styled.input`
  border-radius: 6px; border: none;
  font-size: 1em; font-weight: 600;
  padding: 0.67em 0.82em;
  background: #161223;
  color: #fff;
  margin-bottom: 0.23em;
  &:focus {box-shadow:${thnTheme.focusBox}; border:2px solid #06d6a0;}
`;
const FieldError = styled.span`
  color: #ff00cc; font-size: 0.9em; margin-left: 0.2em;
`;
const FieldHint = styled.span`
  color: #8b5cf6cc; font-size: 0.92em; margin-top: 0.12em; margin-left: 0.12em;
`;
const FieldSelect = styled.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4; font-weight: 600;
  border: none; outline: none;
  padding: 0.38em 0.82em;
`;
const FieldTextarea = styled.textarea`
  background: #181211;
  border-radius: 7.8px;
  font-family: 'JetBrains Mono','Monaco',monospace !important;
  font-size: 1em; color: #fff;
  border: 1.3px solid #322161;
  padding: 0.71em 0.96em;
  margin-top: 0.11em;
  resize: vertical; min-height: 5em; line-height: 1.44;
  transition: box-shadow 0.12s;
  &:focus {box-shadow: 0 0 0 3.5px #8b5cf6cc;}
`;

const ModalActions = styled.div`
  display: flex; flex-direction: row;
  width: 100%; align-items: center; margin-top: 2.1em;
`;

const ModalActionBtn = styled.button`
  background: ${thnTheme.gradientMain};
  color: #fff;
  border-radius: 8px; border: none;
  font-weight: 700; font-size: 1.08em;
  padding: 0.47em 2.1em;
  box-shadow: 0 0 18px #06d6a055;
  transition: background 0.16s, box-shadow 0.13s, color 0.13s;
  cursor: pointer;
  &:focus {box-shadow: 0 0 0 3px #06d6a099;}
`;


export default PromptLibrary;