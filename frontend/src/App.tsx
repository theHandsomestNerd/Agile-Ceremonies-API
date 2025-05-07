import React, {KeyboardEvent, useEffect, useMemo, useRef, useState,} from "react";
import ReactJson from "react-json-view";
import {GlobalStyles} from "./styles/globalStyles";
import {Agent, AgentKey, StatusType, Step} from "./types/App.types";
import {statusMeta} from "./data/statusMeta";
import PromptLibrary from "./PromptLibrary";
import {
    ChatBubble,
    ChatHeader,
    ChatInput,
    ChatInputBar,
    ChatMessagesPanel,
    ChatPanelSidebar,
    ChatSendBtn,
} from "./styles/Chat.styled"
import {
    AgentInitial,
    AgentNameInline,
    AvatarCircle,
    GlobalJsonBody,
    GlobalJsonFooter,
    GlobalJsonHeader,
    GlobalJsonPanelWrap,
    HeaderBar,
    HeaderIcon,
    LiveRegion,
    MainPanelLayout,
    PresenceAgent,
    PresenceBar,
    RootLayout,
    SectionLabel,
    Sidebar,
    SidebarAgentWrap,
    TableGrid,
    TableRow,
    TableRows,
    TableWrap,
    TH,
    WorkflowCard,
    WorkflowListCardWrap
} from "./styles/App.styled";

import {
    StepDesc,
    StepDetailHint,
    StepDetailsPanelWrap,
    StepDevNotes,
    StepField,
    StepLabel,
    StepStatusDot,
    StepValue,
} from "./styles/Steps.styled"
import {N8nCollapsibleToggle, N8nJsonBody, N8nJsonHeader, N8nPanelBtn, N8nPanelFooter, N8nWrapper,} from "./styles/N8N.styled";
import {VizBuilderWrap, VizNode, VizNodeInitial, VizNodeStatusBadge,} from "./styles/Viz.styled";
import {Agents} from "./data/Agents";
import {Steps} from "./data/steps";
import {ChevronDownIcon, ChevronUpIcon, CopyIcon, EditIcon} from "./components/CustomIcons";


/**
 * =========================
 * UTILS: KEY NAVIGATION (Focus)
 * =========================
 */
function useArrowKeyNav(count: number, initial = 0) {
    // Gives arrow up/down navigation across focusable elements.
    const [focusIdx, setFocusIdx] = useState(initial);
    const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
    useEffect(() => {
        if (rowRefs.current[focusIdx]) rowRefs.current[focusIdx]?.focus();
        // No-op on blur
    }, [focusIdx, count]);

    function onKeyDown(e: KeyboardEvent) {
        if (e.key === "ArrowDown") {
            setFocusIdx((prev) => (prev + 1) % count);
            e.preventDefault();
        }
        if (e.key === "ArrowUp") {
            setFocusIdx((prev) => (prev - 1 + count) % count);
            e.preventDefault();
        }
        if (e.key === "Home") {
            setFocusIdx(0);
            e.preventDefault();
        }
        if (e.key === "End") {
            setFocusIdx(count - 1);
            e.preventDefault();
        }
    }

    return {focusIdx, setFocusIdx, rowRefs, onKeyDown};
}

function getAgentColor(agent: AgentKey) {
    return Agents[agent].color;
}


/**
 * =========================
 * APP IMPLEMENTATION ("LIVING APP")
 * =========================
 */
type ViewState = 'workflow' | 'library' | 'other';
let setCurrentView: (view: ViewState) => void;
export default function App() {
    // UI state
    const [currentView, setCurrentView] = useState<"workflow" | "promptLibrary">("workflow");
    const [workflowIdx, setWorkflowIdx] = useState<number>(0);
    const [selectedStep, setSelectedStep] = useState<number | null>(2);
    const [agentFilter, setAgentFilter] = useState<null | AgentKey>(null);
    const [n8nOpen, setN8nOpen] = useState(true);

    const [globalCopied, setGlobalCopied] = useState(false);
    const [n8nCopied, setN8nCopied] = useState(false);

    // Table filtered based on agent selection in sidebar
    const steps = useMemo(
        () =>
            agentFilter ? Steps.filter((s: Step) => s.assigned === agentFilter) : Steps,
        [agentFilter]
    );
    // The canonical step as per id
    const step =
        selectedStep != null
            ? Steps.find((s: any) => s.id === selectedStep) ?? null
            : null;
    // Table keyboard control for up/down
    const {focusIdx, setFocusIdx, rowRefs, onKeyDown} = useArrowKeyNav(
        steps.length,
        Math.max(
            0,
            steps.findIndex((s: any) => s.id === selectedStep)
        )
    );

    // ARIA live feedback
    const [ariaStatus, setAriaStatus] = useState("");

    // Copy handlers: JSON global/step (preserving feedback and ARIA cues)
    function handleGlobalCopy() {
        navigator.clipboard.writeText(JSON.stringify(Steps, null, 2));
        setGlobalCopied(true);
        setTimeout(() => setGlobalCopied(false), 1100);
        setAriaStatus("Copied global workflow JSON.");
    }

    function handleN8nCopy() {
        if (step) {
            navigator.clipboard.writeText(JSON.stringify(step.n8nJson, null, 2));
            setN8nCopied(true);
            setTimeout(() => setN8nCopied(false), 1100);
            setAriaStatus("Copied step n8n node JSON.");
        }
    }

    // Simple static chat modeling a workflow conversation (could be replaced with live)
    const [chatInput, setChatInput] = useState("");
    const [chatHistory, setChatHistory] = useState([
        {
            id: 1,
            content: "Status update?",
            agent: "Man-Man",
            you: true,
        },
        {
            id: 2,
            content:
                "Redesign step details panel in progress.\nDocs & JSON UI ready.",
            agent: "Josh",
            you: false,
        },
    ]);

    function sendChatMessage() {
        if (chatInput.trim().length > 0) {
            setChatHistory([
                ...chatHistory,
                {
                    id: chatHistory.length + 1,
                    content: chatInput,
                    agent: "Man-Man",
                    you: true,
                },
            ]);
            setChatInput("");
        }
    }

    function handleChatKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") sendChatMessage();
    }

    return (
        <><GlobalStyles/>
            {currentView === "workflow" ? (
                <><HeaderBar role="banner" aria-label="Header">
                    <HeaderIcon/>
                    AI Agent Workflow Orchestrator v3.9.5
                    {currentView === "workflow" && (
                        <button
                            onClick={() => setCurrentView("promptLibrary")}
                            style={{
                                marginLeft: "auto",
                                background: "var(--color-accent-josh)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                padding: "8px 12px",
                                fontWeight: 600,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px"
                            }}
                        >
                            <span style={{fontSize: "18px"}}>📚</span>
                            Open Prompt Library
                        </button>
                    )}
                </HeaderBar><RootLayout>
                    {/* ==== SIDEBAR: Agent filter avatars ==== */}
                    <Sidebar
                        role="navigation"
                        aria-label="Agent Navigation Sidebar"
                        tabIndex={0}
                    >
                        {Object.values(Agents).map((agent: Agent) => (
                            <SidebarAgentWrap
                                key={agent.key}
                                selected={agentFilter === agent.key}
                                tabIndex={0}
                                aria-label={`Filter steps to only ${agent.name}`}
                                aria-selected={agentFilter === agent.key}
                                title={agent.role}
                                onClick={() => setAgentFilter(agentFilter === agent.key ? null : agent.key)}
                                onKeyDown={(e: any) => {
                                    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar")
                                        setAgentFilter(agentFilter === agent.key ? null : agent.key);
                                }}
                            >
                                <AvatarCircle color={agent.color}>
                                    <AgentInitial>{agent.short}</AgentInitial>
                                </AvatarCircle>
                            </SidebarAgentWrap>
                        ))}
                    </Sidebar>

                    {/* ==== MAIN PANEL ==== */}
                    <MainPanelLayout role="main" aria-label="Main Workflow Panel">
                        {/* ==== Workflow Cards ==== */}
                        <WorkflowListCardWrap>
                            {[
                                "Standard Blog Generation",
                                "Customer Outreach Flow",
                                "Social Blast",
                            ].map((wf, idx) => (
                                <WorkflowCard
                                    key={wf}
                                    selected={idx === workflowIdx}
                                    tabIndex={0}
                                    aria-label={`Workflow: ${wf}`}
                                    aria-selected={idx === workflowIdx}
                                    onClick={() => setWorkflowIdx(idx)}
                                    onKeyDown={(e: any) => {
                                        if (e.key === "Enter" || e.key === " ")
                                            setWorkflowIdx(idx);
                                    }}
                                >
                                    <SectionLabel
                                        style={{
                                            fontSize: "var(--font-size-base)",
                                            color: idx !== workflowIdx
                                                ? "var(--color-josh-primary)"
                                                : "var(--color-text-dark)",
                                            fontWeight: idx === workflowIdx
                                                ? "var(--font-weight-bold)"
                                                : "var(--font-weight-medium)"
                                        }}
                                    >
                                        {wf}
                                    </SectionLabel>
                                </WorkflowCard>
                            ))}
                        </WorkflowListCardWrap>
                        {/* ==== Presence ==== */}
                        <PresenceBar role="region" aria-label="Present Agents">
                            {["Reqqy", "Josh", "Twin", "Antosh", "Man-Man"].map((key, i) => {
                                const agent = Agents[key as AgentKey];
                                let status: StatusType = key === "Josh" || key === "Twin"
                                    ? "active"
                                    : key === "Man-Man"
                                        ? "complete"
                                        : key === "Antosh"
                                            ? "error"
                                            : "complete";
                                return (
                                    <PresenceAgent key={key}>
                                        <AvatarCircle color={agent.color}>
                                            <AgentInitial>{agent.short}</AgentInitial>
                                        </AvatarCircle>
                                        <StepStatusDot
                                            color={statusMeta[status].color}
                                            error={status === "error"}
                                        >
                                            {statusMeta[status].icon}
                                        </StepStatusDot>
                                    </PresenceAgent>
                                );
                            })}
                        </PresenceBar>
                        {/* ==== Step Table ==== */}
                        <SectionLabel>Standard Blog Generation</SectionLabel>
                        <TableWrap role="region" aria-label="Workflow Step List">
                            <TableGrid>
                                <TH>Step</TH>
                                <TH>Agent</TH>
                                <TH>Status</TH>
                            </TableGrid>
                            <TableRows>
                                {steps.map((s: Step, idx: number) => (
                                    <TableRow
                                        key={s.id}
                                        ref={(el: any) => (rowRefs.current[idx] = el)}
                                        role="row"
                                        tabIndex={0}
                                        selected={s.id === step?.id}
                                        aria-selected={s.id === step?.id}
                                        data-testid={`tablerow-${s.id}`}
                                        onClick={() => {
                                            setSelectedStep(s.id);
                                            setFocusIdx(idx);
                                        }}
                                        onFocus={() => setSelectedStep(s.id)}
                                        onKeyDown={(e: any) => {
                                            onKeyDown(e);
                                            if (e.key === "Enter" || e.key === " ")
                                                setSelectedStep(s.id);
                                        }}
                                    >
                                        <span>{s.name}</span>
                                        <span>
                                                <AvatarCircle
                                                    color={getAgentColor(s.assigned)}
                                                    style={{width: "34px", height: "34px"}}
                                                >
                                                    <AgentInitial>{Agents[s.assigned].short}</AgentInitial>
                                                </AvatarCircle>
                                                <AgentNameInline style={{fontSize: ".99rem"}}>
                                                    {(Agents[s.assigned]).name}
                                                </AgentNameInline>
                                            </span>
                                        <StepStatusDot
                                            color={statusMeta[s.status as StatusType].color}
                                            error={s.status === "error"}
                                        >
                                            {statusMeta[s.status as StatusType].icon}
                                        </StepStatusDot>
                                    </TableRow>
                                ))}
                            </TableRows>
                        </TableWrap>
                        {/* ==== Step Details & n8n JSON ==== */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "25px",
                                width: "100%",
                                minHeight: "190px",
                            }}
                        >
                            {step ? (
                                <StepDetailsPanelWrap
                                    role="region"
                                    aria-label="Step Details Panel"
                                >
                                    <StepLabel>Step Details</StepLabel>
                                    <StepField>
                                        Name:
                                        <StepValue data-testid="stepdetails-value-name">
                                            {step.name}
                                        </StepValue>
                                    </StepField>
                                    <StepField>
                                        Assigned Agent:
                                        <AvatarCircle
                                            color={getAgentColor(step.assigned)}
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                                marginLeft: "14px",
                                            }}
                                        >
                                            <AgentInitial
                                                style={{fontSize: "1.07rem", top: "5px", left: "8px"}}
                                            >
                                                {Agents[step.assigned].short}
                                            </AgentInitial>
                                        </AvatarCircle>
                                        <AgentNameInline>
                                            {Agents[step.assigned].name}
                                        </AgentNameInline>
                                    </StepField>
                                    <StepField>
                                        Status: <StepValue>{statusMeta[step.status].label}</StepValue>
                                    </StepField>
                                    <StepField style={{fontWeight: 600}}>
                                        Developer Notes:
                                    </StepField>
                                    <StepDevNotes data-testid="stepdetails-devnotes">
                                        {step.devNotes}
                                    </StepDevNotes>
                                    <StepField style={{fontWeight: 600}}>Description:</StepField>
                                    <StepDesc data-testid="stepdetails-desc">
                                        {step.description}
                                    </StepDesc>
                                </StepDetailsPanelWrap>
                            ) : (
                                <StepDetailsPanelWrap
                                    role="region"
                                    aria-label="Step Details Panel (no selection)"
                                >
                                    <StepDetailHint>
                                        Select a workflow step to view details.
                                    </StepDetailHint>
                                </StepDetailsPanelWrap>
                            )}
                            <N8nWrapper
                                tabIndex={0}
                                aria-label="n8n Node JSON Viewer"
                                aria-expanded={n8nOpen}
                            >
                                <N8nJsonHeader
                                    onClick={() => setN8nOpen(!n8nOpen)}
                                    tabIndex={0}
                                    aria-label={"Expand/collapse n8n Node JSON viewer"}
                                    onKeyDown={(e: any) => {
                                        if (e.key === "Enter" || e.key === " ")
                                            setN8nOpen((v) => !v);
                                    }}
                                >
                                    <N8nCollapsibleToggle aria-hidden>
                                        {n8nOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                                    </N8nCollapsibleToggle>
                                    n8n Node JSON
                                </N8nJsonHeader>
                                {n8nOpen && step && (
                                    <N8nJsonBody aria-label="n8n Node JSON panel" tabIndex={-1}>
                                        <ReactJson
                                            src={step.n8nJson}
                                            theme="apathy:inverted"
                                            name={false}
                                            collapsed={false}
                                            enableClipboard={false}
                                            displayDataTypes={false}
                                            style={{background: "#fff", fontSize: "1rem"}}/>
                                    </N8nJsonBody>
                                )}
                                <N8nPanelFooter>
                                    <N8nPanelBtn
                                        type="button"
                                        onClick={handleN8nCopy}
                                        aria-label="Copy this step n8n JSON"
                                    >
                                        <CopyIcon/>
                                        {n8nCopied ? "Copied" : "Copy"}
                                    </N8nPanelBtn>
                                    <N8nPanelBtn
                                        type="button"
                                        onClick={() => setAriaStatus("Edit step JSON coming soon.")}
                                        aria-label="Edit (disabled)"
                                        style={{
                                            background: "var(--color-primary)",
                                            opacity: 0.68,
                                            cursor: "not-allowed",
                                        }}
                                        disabled
                                    >
                                        <EditIcon/> Edit
                                    </N8nPanelBtn>
                                </N8nPanelFooter>
                            </N8nWrapper>
                        </div>
                        {/* ==== Global Workflow JSON Viewer ==== */}
                        <GlobalJsonPanelWrap>
                            <GlobalJsonHeader>Global Workflow JSON</GlobalJsonHeader>
                            <GlobalJsonBody aria-label="Workflow JSON Preview">
                                {JSON.stringify(
                                    Steps.map((s: Step) => ({
                                        id: s.id,
                                        name: s.name,
                                    })),
                                    null,
                                    2
                                )}
                            </GlobalJsonBody>
                            <GlobalJsonFooter>
                                <N8nPanelBtn
                                    onClick={() => setAriaStatus("Edit global JSON coming soon.")}
                                    style={{
                                        background: "var(--color-primary)",
                                        opacity: 0.68,
                                        cursor: "not-allowed",
                                    }}
                                    aria-label="Edit (disabled)"
                                    disabled
                                >
                                    <EditIcon/>
                                    Edit
                                </N8nPanelBtn>
                                <N8nPanelBtn onClick={handleGlobalCopy}>
                                    <CopyIcon/>
                                    {globalCopied ? "Copied" : "Copy"}
                                </N8nPanelBtn>
                            </GlobalJsonFooter>
                        </GlobalJsonPanelWrap>
                        {/* ==== Visual Node Graph ==== */}
                        <h3
                            style={{
                                color: "var(--color-accent-josh)",
                                fontWeight: 700,
                                margin: "40px 0 13px 19px",
                            }}
                        >
                            Visual Builder
                        </h3>
                        <VizBuilderWrap>
                            {Steps.map((s: Step, i: any) => (
                                <VizNode
                                    key={s.id}
                                    color={getAgentColor(s.assigned)}
                                    selected={step?.id === s.id}
                                    error={s.status === "error"}
                                    tabIndex={0}
                                    aria-label={`Step: ${s.name}, assigned to ${Agents[s.assigned].name}`}
                                >
                                    <VizNodeInitial>{Agents[s.assigned].short}</VizNodeInitial>
                                    <VizNodeStatusBadge color={statusMeta[s.status].color}>
                                        {(statusMeta[s.status]).label}
                                    </VizNodeStatusBadge>
                                </VizNode>
                            ))}
                        </VizBuilderWrap>
                    </MainPanelLayout>

                    {/* ==== CHAT SIDEBAR ==== */}
                    <ChatPanelSidebar aria-label="Chat with Josh">
                        <ChatHeader>
                            <AvatarCircle color={getAgentColor("Josh")}>
                                <AgentInitial>J</AgentInitial>
                            </AvatarCircle>
                            Chat with Josh
                        </ChatHeader>
                        <ChatMessagesPanel>
                            {chatHistory.map((msg, idx) => (
                                <ChatBubble key={msg.id} you={msg.you}>
                                    {msg.content.split("\n").map((t, i) => (
                                        <span key={i}>
                                                {i ? <br/> : null}
                                            {t}
                                            </span>
                                    ))}
                                </ChatBubble>
                            ))}
                            <div aria-live="polite" aria-atomic="true">
                                    <span>
                                        <span
                                            style={{
                                                color: "var(--color-accent-josh)",
                                                fontWeight: 700,
                                                margin: "0 3px",
                                            }}
                                        >
                                            •
                                        </span>
                                        <span
                                            style={{
                                                color: "var(--color-accent-josh)",
                                                fontWeight: 700,
                                                margin: "0 3px",
                                                opacity: 0.6,
                                            }}
                                        >
                                            •
                                        </span>
                                        <span
                                            style={{
                                                color: "var(--color-accent-josh)",
                                                fontWeight: 700,
                                                margin: "0 3px",
                                                opacity: 0.44,
                                            }}
                                        >
                                            •
                                        </span>
                                    </span>
                            </div>
                        </ChatMessagesPanel>
                        <ChatInputBar>
                            <ChatInput
                                placeholder="Type your message..."
                                value={chatInput}
                                onChange={(e: any) => setChatInput(e.target.value)}
                                onKeyDown={handleChatKeyDown}
                                aria-label="Type your message"/>
                            <ChatSendBtn onClick={sendChatMessage}>Send</ChatSendBtn>
                        </ChatInputBar>
                    </ChatPanelSidebar>

                    {/* ==== Status ARIA live region for copy/cues ==== */}
                    <LiveRegion aria-live="polite">{ariaStatus}</LiveRegion>
                </RootLayout></>
            ) : (
                <PromptLibrary onBackToWorkflow={() => setCurrentView("workflow")}/>
            )}
        </>
    );
}