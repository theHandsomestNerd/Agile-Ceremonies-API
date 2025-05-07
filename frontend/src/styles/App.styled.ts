/**
 * =========================
 * STYLED COMPONENTS
 * (No .css - Only theme tokens)
 * =========================
 */

import styled, {css} from "styled-components";
import CustomAvatar from "../components/CustomAvatar";

// ---------- Layout Shell ----------
export const RootLayout = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: var(--color-neutral-100);
    font-family: var(--font-family);
    color: var(--color-neutral-900);
`;

// ---------- Header ----------
export const HeaderBar = styled.header`
    width: 100vw;
    padding: var(--spacing-md) 0 var(--spacing-base) var(--spacing-xl);
    background: var(--color-primary);
    color: var(--color-neutral-100);
    letter-spacing: 0.05em;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    position: relative;
    z-index: var(--z-index-sticky);
`;

// Inline svg icon for app
export const HeaderIcon = styled.div`
    width: 34px;
    height: 34px;
    background: linear-gradient(
        135deg,
        var(--color-josh-secondary),
        var(--color-josh-primary)
    );
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);
    margin-right: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: var(--color-neutral-100);
        border-radius: var(--border-radius-sm);
        border: var(--border-width-medium) solid var(--color-josh-primary);
        margin-left: var(--spacing-xxs);
    }
`;

// ---------- Sidebar (Agent Avatars & Filter) ----------
export const Sidebar = styled.nav`
    width: 82px;
    min-width: 82px;
    padding: var(--spacing-xl) var(--spacing-xs) 0 var(--spacing-xs);
    background: var(--color-neutral-100);
    border-right: var(--border-width-medium) solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    flex-shrink: 0;
    color: var(--color-neutral-900);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
`;

export const SidebarAgentWrap = styled.div<{ selected: boolean }>`
    margin: 0 0 var(--spacing-xxs) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    cursor: pointer;
    border-radius: var(--border-radius-lg);
    outline: none;
    background: ${(p) => (p.selected ? "var(--color-josh-primary)" : "none")};
    box-shadow: ${(p) => (p.selected ? `0 0 0 var(--border-width-medium) var(--color-josh-secondary)` : "none")};
    transition: background var(--transition-fast);
    
    &:hover {
        background: ${(p) => (p.selected ? "var(--color-josh-primary)" : "var(--color-neutral-200)")};
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: var(--spacing-xxs);
    }
`;

export const AvatarCircle = styled(CustomAvatar.Root)<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 43px;
    border-radius: var(--border-radius-full);
    background: ${(p) => p.color};
    border: var(--border-width-medium) solid var(--color-neutral-100);
    box-shadow: var(--shadow-xs);
    transition: transform var(--transition-fast);
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const AgentInitial = styled.span`
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-100);
    font-size: var(--font-size-xl);
    position: relative;
    left: 0.5px;
    top: 0.4px;
`;

// ---------- Main Panel Layout ----------
export const MainPanelLayout = styled.main`
    flex: 1 1 auto;
    max-width: 1150px;
    margin: 0 auto;
    padding: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    position: relative;
`;

// ---------- Workflow List Cards ----------
export const WorkflowListCardWrap = styled.div`
    margin: var(--spacing-base) 0 var(--spacing-md) 0;
    display: flex;
    flex-direction: row;
    gap: var(--spacing-base);
`;

export const WorkflowCard = styled.div<{ selected: boolean }>`
    padding: var(--spacing-xs) var(--spacing-md);
    background: ${(p) =>
        p.selected
                ? `linear-gradient(88deg, var(--color-josh-primary) 70%, var(--color-neutral-100) 110%)`
                : "var(--color-neutral-100)"};
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    color: ${(p) =>
        p.selected ? "var(--color-neutral-100)" : "var(--color-neutral-900)"};
    cursor: pointer;
    transition: all var(--transition-fast);
    border: var(--border-width-medium) solid 
        ${(p) => (p.selected ? "var(--color-josh-primary)" : "var(--color-neutral-200)")};
    box-shadow: ${(p) =>
        p.selected ? "var(--shadow-md)" : "var(--shadow-xs)"};
        
    &:hover {
        box-shadow: var(--shadow-md);
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: -1px;
    }
`;

// ---------- Presence Bar (Mini Avatars) ----------
export const PresenceBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: var(--spacing-xs) 0 var(--spacing-sm) 0;
    padding: 0 var(--spacing-xxs);
    gap: var(--spacing-md);
    min-height: 34px;
`;

export const PresenceAgent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-xs);
`;

// ---------- Table/List Components ----------
export const TableWrap = styled.div`
    background: var(--color-neutral-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    margin: 0 0 var(--spacing-md) 0;
    padding: 0 0 var(--spacing-base) 0;
    overflow: hidden;
`;

export const TableGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.25fr 0.7fr;
    background: var(--color-neutral-200);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    padding: var(--spacing-sm) var(--spacing-md);
`;

export const TH = styled.div`
    font-weight: inherit;
    color: var(--color-neutral-800);
`;

export const TableRows = styled.div``;

export const TableRow = styled.div<{
    selected?: boolean;
}>`
    display: grid;
    grid-template-columns: 1fr 1.25fr 0.7fr;
    gap: var(--spacing-xxs);
    align-items: center;
    cursor: pointer;
    padding: var(--spacing-xs) var(--spacing-md);
    background: ${(p) => (p.selected ? "var(--color-neutral-200)" : "var(--color-neutral-100)")};
    border-left: var(--border-width-thick) solid
        ${(p) => (p.selected ? "var(--color-josh-primary)" : "transparent")};
    transition: background var(--transition-fast), border-left var(--transition-fast);
    
    &:hover {
        background: var(--color-neutral-200);
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: -2px;
        position: relative;
        z-index: 1;
    }
`;

export const AgentNameInline = styled.span`
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-medium);
    margin-left: var(--spacing-xs);
    vertical-align: top;
    font-size: var(--font-size-base);
`;

// ---- Global JSON Viewer Panel -----
export const GlobalJsonPanelWrap = styled.section`
    margin: var(--spacing-xl) 0 0 0;
    padding: 0;
    background: var(--color-neutral-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    max-width: 470px;
`;

export const GlobalJsonHeader = styled.div`
    font-weight: var(--font-weight-bold);
    color: var(--color-josh-primary);
    font-size: var(--font-size-lg);
    padding: var(--spacing-base) var(--spacing-md) var(--spacing-xs) var(--spacing-md);
    background: var(--color-neutral-200);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    border-bottom: var(--border-width-medium) solid var(--color-neutral-200);
`;

export const GlobalJsonBody = styled.pre`
    background: var(--color-neutral-100);
    padding: var(--spacing-base) var(--spacing-md);
    color: var(--color-neutral-900);
    font-size: var(--font-size-base);
    min-height: 60px;
    margin: 0;
    font-family: "Fira Mono", "Consolas", "Menlo", monospace;
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    overflow: auto;
`;

export const GlobalJsonFooter = styled.div`
    display: flex;
    gap: var(--spacing-base);
    align-items: center;
    padding: var(--spacing-xs) 0 var(--spacing-base) var(--spacing-md);
`;

// ---- Section/Labels/Etc -----
export const SectionLabel = styled.div`
    margin: var(--spacing-base) 0 var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-lg);
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.03em;
`;

// ---- Live region for ARIA feedback ----
export const LiveRegion = styled.div`
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`;

export const BulletStyled = styled.span`
    display: inline-block;
    font-weight: var(--font-weight-medium);
    width: 8px;
    height: 8px;
    border-radius: var(--border-radius-full);
    background-color: var(--color-josh-primary);
`;