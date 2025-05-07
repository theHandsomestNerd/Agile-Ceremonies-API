// =============== DASHBOARD ===============
import React, {useRef, useState} from "react";
import {Prompt} from "../types/PromptLibrary.types";
import {usePrompts} from "./Prompt.ctx";
import {
    CreateBtn,
    DashOuter,
    DashContent,
    DomainChip,
    DomainLogicHint,
    DomainLogicToggle,
    DomainMulti,
    FilterBar,
    FilterDropdown,
    FilterLabel,
    FilterSearch,
    NoResults,
    PromptContainer,
    PromptGrid,
    PromptGridWrapper,
    ScrollArrow,
    SearchInputWrapper,
    ToggleViewBtns,
    ViewBtn,
    ViewControls,
    ViewControlsLeft,
    ViewControlsRight
} from "../styles/PromptLibrary.styled";
import {SearchSVGIcon} from "./SearchSVGIcon";
import PromptLibraryData from "../data/PromptLibraryData";
import {GridIcon, TableIcon} from "./PromptLibraryIcons";
import PromptCard from "./PromptCard";
import PromptTableView from "./PromptTableView";
import DragDropDomainFilter from "./DragDropDomainFilter";

export const PromptDashboard: React.FC<{
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
    const gridWrapperRef = useRef<HTMLDivElement>(null);

    // -- Multi-domain filter logic
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "archived">(
        "all"
    );
    const [agentFilter, setAgentFilter] = useState("all");
    const [domainFilters, setDomainFilters] = useState<string[]>([]);
    const [domainLogic, setDomainLogic] = useState<"AND" | "OR">("OR");
    
    // Grid scrolling controls
    const handleScroll = (direction: 'left' | 'right') => {
        if (gridWrapperRef.current) {
            const scrollAmount = direction === 'left' ? -600 : 600;
            gridWrapperRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // --- FILTERED PROMPTS (Multi-domain AND/OR logic) ---
    const filtered = prompts.filter((p: any) => {
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
                    <SearchSVGIcon/>
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
                        {PromptLibraryData.AGENT_LIST.map((a) => (
                            <option value={a} key={a}>
                                {a}
                            </option>
                        ))}
                    </FilterDropdown>
                </FilterLabel>
                <FilterLabel style={{ flexGrow: 1 }}>
                    Domains:
                    <DragDropDomainFilter 
                        domains={PromptLibraryData.DOMAIN_LIST}
                        andDomains={domainLogic === "AND" ? domainFilters : []}
                        orDomains={domainLogic === "OR" ? domainFilters : []}
                        onAndDomainsChange={(domains) => {
                            setDomainLogic("AND");
                            setDomainFilters(domains);
                        }}
                        onOrDomainsChange={(domains) => {
                            setDomainLogic("OR");
                            setDomainFilters(domains);
                        }}
                    />
                </FilterLabel>
                            </FilterBar>
                            
                            <DashContent>
                <ViewControls>
                    <ViewControlsLeft>
                        {filtered.length} {filtered.length === 1 ? 'prompt' : 'prompts'} found
                        
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
                    </ViewControlsLeft>
                    <ViewControlsRight>
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
                    </ViewControlsRight>
                </ViewControls>
                
                {filtered.length === 0 ? (
                    <NoResults>Sorry, no prompts match these filters.</NoResults>
                ) : viewMode === "grid" ? (
                    <PromptContainer>
                        <PromptGridWrapper>
                            <PromptGrid>
                                {filtered.map((prompt) => (
                                    <PromptCard
                                        key={prompt.id}
                                        prompt={prompt}
                                        openModal={openModal}
                                    />
                                ))}
                            </PromptGrid>
                        </PromptGridWrapper>
                    </PromptContainer>
                ) : (
                    <PromptTableView
                        prompts={filtered}
                        openModal={openModal}
                    />
                )}
            </DashContent>
        </DashOuter>
    );
};