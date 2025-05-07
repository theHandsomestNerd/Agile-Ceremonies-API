// =============== DASHBOARD ===============
import React, {useState} from "react";
import {Prompt} from "../types/PromptLibrary.types";
import {usePrompts} from "./Prompt.ctx";
import {
    CreateBtn,
    DashOuter,
    DomainChip,
    DomainLogicHint,
    DomainLogicToggle,
    DomainMulti,
    FilterBar,
    FilterDropdown,
    FilterLabel,
    FilterSearch,
    NoResults,
    PromptGrid,
    SearchInputWrapper,
    ToggleViewBtns,
    ViewBtn
} from "../styles/PromptLibrary.styled";
import {SearchSVGIcon} from "./SearchSVGIcon";
import PromptLibraryData from "../data/PromptLibraryData";
import {GridIcon, TableIcon} from "./PromptLibraryIcons";
import PromptCard from "./PromptCard";
import PromptTableView from "./PromptTableView";

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

    // -- Multi-domain filter logic
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "archived">(
        "all"
    );
    const [agentFilter, setAgentFilter] = useState("all");
    const [domainFilters, setDomainFilters] = useState<string[]>([]);
    const [domainLogic, setDomainLogic] = useState<"AND" | "OR">("OR");

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
                <FilterLabel>
                    Domains:
                    <DomainMulti>
                        {PromptLibraryData.DOMAIN_LIST.map((d) => (
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