/**
 * =========================
 * STYLED COMPONENTS
 * (No .css - Only theme tokens)
 * =========================
 */

import styled, {css} from "styled-components";
import CustomAvatar from "./components/CustomAvatar";

// ---------- Layout Shell ----------
export const RootLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: var(--color-neutral-100, #f8f8f8);
`;

// ---------- Header ----------
export const HeaderBar = styled.header`
  width: 100vw;
  padding: 20px 0 11px 36px;
  background: var(--color-primary);
  color: #fff;
  letter-spacing: 0.05em;
  font-size: 1.25rem;
  font-weight: bold;
  box-shadow: var(--shadow-xs);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
`;
// Inline svg icon for app
export const HeaderIcon = styled.div`
  width: 34px;
  height: 34px;
  background: linear-gradient(
    135deg,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  border-radius: 12px;
  box-shadow: 0 1.5px 5px var(--color-primary-light);
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 6px;
    border: 3px solid var(--color-primary-dark);
    margin-right: 0px;
    margin-left: 2.5px;
  }
`;

// ---------- Sidebar (Agent Avatars & Filter) ----------
export const Sidebar = styled.nav`
  width: 82px;
  min-width: 82px;
  padding: 28px 7px 0 7px;
  background: #fff;
  border-right: 2.5px solid var(--color-neutral-200);
  box-shadow: 1px 0 8px #884fd018;
  flex-shrink: 0;
  color: var(--color-neutral-700);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SidebarAgentWrap = styled.div<{ selected: boolean }>`
  margin: 0 0 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62px;
  cursor: pointer;
  border-radius: 17px;
  outline: none;
  background: ${(p) => (p.selected ? "var(--color-accent-josh)" : "none")};
  box-shadow: ${(p) =>
    p.selected ? "0 0 0 2.5px var(--color-primary-light)" : "none"};
  transition: background 0.13s;
`;

export const AvatarCircle = styled(CustomAvatar.Root)<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background: ${(p) => p.color};
  border: 2.5px solid #fff;
  box-shadow: 0 1px 5px #7745c530;
`;

export const AgentInitial = styled.span`
  font-weight: 700;
  color: #fff;
  font-size: 1.39rem;
  position: relative;
  left: 0.5px;
  top: 0.4px;
`;

// ---------- Main Panel Layout ----------
export const MainPanelLayout = styled.main`
  flex: 1 1 auto;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// ---------- Workflow List Cards ----------
export const WorkflowListCardWrap = styled.div`
  margin: 13px 0 15px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const WorkflowCard = styled.div<{ selected: boolean }>`
  padding: 9.5px 18px;
  background: ${(p) =>
    p.selected
        ? "linear-gradient(88deg, var(--color-accent-josh) 70%, #fff 110%)"
        : "#fff"};
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.03rem;
  color: ${(p) =>
    p.selected ? "var(--color-primary-dark)" : "var(--color-neutral-700)"};
  cursor: pointer;
  transition: background 0.13s;
  border: 2.5px solid
    ${(p) => (p.selected ? "var(--color-accent-josh)" : "#d8d7ed")};
  box-shadow: ${(p) =>
    p.selected
        ? "0 7px 14px #7F4FC31d"
        : "0 0.5px 2px var(--color-primary-light)09"};
`;

// ---------- Presence Bar (Mini Avatars) ----------
export const PresenceBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 7px 0 13px 0;
  padding: 0 3px 0 3px;
  gap: 18px;
  min-height: 34px;
`;

export const PresenceAgent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const StepStatusDot = styled.span<{ color: string; error?: boolean }>`
  margin-left: 5px;
  font-size: 1.14rem;
  font-weight: 700;
  color: ${(p) => p.color};
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  ${(p) =>
    p.error &&
    css`
      background: var(--color-neutral-200);
      border-radius: 6px;
      padding: 1px 6px 1px 4px;
    `}
`;

// ---------- Table/List Components ----------
export const TableWrap = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  margin: 0 0 16px 0;
  padding: 0 0 13px 0;
  overflow: hidden;
`;
export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 0.7fr;
  background: var(--color-neutral-200);
  font-weight: 700;
  font-size: 1.03rem;
  padding: 11px 22px 9px 22px;
`;

export const TH = styled.div`
  font-weight: inherit;
  color: var(--color-neutral-700);
`;
export const TableRows = styled.div``;
export const TableRow = styled.div<{
    selected?: boolean;
}>`
  display: grid;
  grid-template-columns: 1fr 1.25fr 0.7fr;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  padding: 8px 22px 8px 22px;
  background: ${(p) => (p.selected ? "var(--color-neutral-200)" : "#fff")};
  border-left: 4.5px solid
    ${(p) => (p.selected ? "var(--color-accent-josh)" : "transparent")};
  transition: background 0.1s;
  border-radius: ${(p) => (p.selected ? "0 0 0.3em 0.3em" : "0")};
  &:hover {
    background: var(--color-neutral-200);
  }
  &:focus-visible {
    outline: 2.5px solid var(--color-accent-josh);
    outline-offset: -2.5px;
    z-index: 2;
  }
`;

export const AgentNameInline = styled.span`
  color: var(--color-neutral-900);
  font-weight: 600;
  margin-left: 7px;
  vertical-align: top;
  font-size: 1.01rem;
`;

// ---------- Step Details Panel + n8n Panel ----------
export const StepDetailsPanelWrap = styled.div`
  min-width: 320px;
  max-width: 330px;
  background: #fff;
  border-radius: 13px;
  box-shadow: var(--shadow-card);
  padding: 21px 20px 19px 24px;
  margin: 17px 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 330px;
`;

export const StepLabel = styled.div`
  color: var(--color-primary-dark);
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.012em;
`;
export const StepField = styled.div`
  margin: 0 0 5px 0;
  font-size: 1.015rem;
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const StepValue = styled.span`
  color: var(--color-neutral-900);
  font-weight: 600;
  margin-left: 5px;
`;
export const StepDevNotes = styled.div`
  margin: 2.5px 0 9px 5px;
  padding: 4.5px 7px;
  background: var(--color-neutral-200);
  border-radius: 8px;
  color: var(--color-primary-dark);
  font-size: 0.97rem;
  font-style: italic;
`;
export const StepDesc = styled.div`
  color: var(--color-neutral-700);
  font-size: 0.99rem;
  margin-bottom: 1.5px;
`;
export const StepDetailHint = styled.div`
  color: var(--color-neutral-500);
  margin-top: 38px;
  text-align: center;
  font-size: 1.07rem;
  font-weight: 600;
  opacity: 0.83;
`;

// ----- n8n Node JSON panel -----
export const N8nWrapper = styled.section`
  min-width: 385px;
  max-width: 535px;
  background: #fff;
  border-radius: 13px;
  margin: 17px 0 0 0;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.13s;
`;

export const N8nJsonHeader = styled.div`
  padding: 13px 17px 10px 17px;
  font-weight: 700;
  color: var(--color-accent-josh);
  background: var(--color-neutral-200);
  cursor: pointer;
  font-size: 1.02rem;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 13px 13px 0 0;
  &:focus-visible {
    outline: 2px solid var(--color-accent-josh);
    outline-offset: -1.5px;
  }
`;
export const N8nCollapsibleToggle = styled.span`
  position: relative;
  top: 1.5px;
  font-size: 1.19em;
  color: var(--color-accent-josh);
  opacity: 0.86;
`;

export const N8nJsonBody = styled.div`
  background: #fff;
  padding: 13px 15px;
  font-size: 1rem;
`;

export const N8nPanelFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 0 13px 13px;
`;

export const N8nPanelBtn = styled.button`
  background: var(--color-neutral-200);
  border: none;
  outline: none;
  font-weight: 700;
  color: var(--color-accent-josh);
  padding: 5px 13px 4px 11px;
  border-radius: 6px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  box-shadow: var(--shadow-xs);
  transition: background 0.11s, color 0.11s;
  &:active {
    background: var(--color-primary-light);
    color: #fff;
  }
  &:focus-visible {
    outline: 2px solid var(--color-primary);
  }
`;

// ---- Global JSON Viewer Panel -----
export const GlobalJsonPanelWrap = styled.section`
  margin: 48px 0 0 0;
  padding: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: var(--shadow-xs);
  max-width: 470px;
`;

export const GlobalJsonHeader = styled.div`
  font-weight: 700;
  color: var(--color-accent-josh);
  font-size: 1.1rem;
  padding: 14px 20px 7px 19px;
  background: var(--color-neutral-200);
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid var(--color-neutral-200);
`;
export const GlobalJsonBody = styled.pre`
  background: #fff;
  padding: 14px 16px 12px 18px;
  color: var(--color-neutral-900);
  font-size: 1.04rem;
  min-height: 60px;
  margin: 0;
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  border-radius: 0 0 7px 7px;
  overflow: auto;
`;
export const GlobalJsonFooter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 9px 0 11px 19px;
`;

// ---- Viz Node Builder (mini step workflow) -----
export const VizBuilderWrap = styled.div`
  margin: 0 0 0 11px;
  padding: 22px 5px 19px 11px;
  display: flex;
  gap: 17px;
  min-height: 66px;
  align-items: center;
`;
export const VizNode = styled.div<{
    color: string;
    selected?: boolean;
    error?: boolean;
}>`
  background: ${(p) => (p.selected ? "var(--color-accent-josh)" : "#fff")};
  color: ${(p) => (p.selected ? "#fff" : "#45404a")};
  border: 3px solid ${(p) => (p.error ? "var(--color-error)" : p.color)};
  box-shadow: ${(p) =>
    p.selected ? "0 5px 19px #8f4fd443" : "0 0.5px 4px var(--color-primary)10"};
  border-radius: 22px;
  padding: 9px 19px;
  min-width: 66px;
  min-height: 45px;
  font-weight: 700;
  font-size: 1.23rem;
  letter-spacing: 0.06em;
  transition: background 0.11s, color 0.13s;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: relative;
  outline: none;
  &:focus-visible {
    outline: 2.5px solid var(--color-primary);
    outline-offset: 2.5px;
  }
`;
export const VizNodeInitial = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background: #fff1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.39rem;
  font-weight: 900;
`;
export const VizNodeStatusBadge = styled.span<{ color: string }>`
  background: ${(p) => p.color};
  border-radius: 8px;
  color: #fff;
  font-size: 0.79rem;
  font-weight: 500;
  padding: 1.5px 8px;
  margin-left: 8px;
  letter-spacing: 0.04em;
`;

// ---- Section/Labels/Etc -----
export const SectionLabel = styled.div`
  margin: 15px 0 8px 14px;
  font-size: 1.09rem;
  color: var(--color-neutral-700);
  font-weight: 800;
  letter-spacing: 0.03em;
`;

// ---------- Chat Sidebar ----------
export const ChatPanelSidebar = styled.aside`
  min-width: 280px;
  max-width: 290px;
  padding: 0 2.5px 0 0;
  background: #fff;
  border-left: 2.5px solid var(--color-neutral-200);
  box-shadow: -1px 0 11px #884fd018;
  display: flex;
  flex-direction: column;
`;
// Top section:
export const ChatHeader = styled.div`
  font-weight: 800;
  color: var(--color-accent-josh);
  padding: 17px 21px 8.5px 23px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 1.02rem;
  background: #fff;
  border-bottom: 1.5px solid var(--color-neutral-200);
`;
// Message history (auto scrolls vertical)
export const ChatMessagesPanel = styled.div`
  flex: 1 1 auto;
  padding: 22px 13px 13px 18px;
  overflow-y: auto;
  min-height: 144px;
`;
// Single chat bubble
export const ChatBubble = styled.div<{ you: boolean }>`
  background: ${(p) =>
    p.you
        ? "linear-gradient(90deg, var(--color-primary) 35%, var(--color-accent-josh) 100%)"
        : "var(--color-neutral-200)"};
  color: ${(p) => (p.you ? "#fff" : "var(--color-accent-josh)")};
  border-radius: 18px 16px 18px 7px;
  padding: 7px 13px 8px 14px;
  margin: 0 0 7.5px 0;
  font-size: 1.03rem;
  align-self: ${(p) => (p.you ? "flex-end" : "flex-start")};
  box-shadow: 0 2px 11px #a58ee820;
  font-weight: 500;
  max-width: 88%;
  word-break: break-word;
`;
// Bottom input bar
export const ChatInputBar = styled.div`
  padding: 10px 14px 12px 16px;
  background: #fff;
  border-top: 1.5px solid var(--color-neutral-200);
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ChatInput = styled.input`
  flex: 1 1 auto;
  padding: 8px 11px;
  border-radius: 7px;
  border: 1.5px solid var(--color-neutral-200);
  background: var(--color-neutral-200);
  font-size: 1rem;
  transition: border 0.12s;
  &:focus-visible {
    border: 2.5px solid var(--color-primary-light);
    outline: none;
  }
`;

export const ChatSendBtn = styled.button`
  background: var(--color-accent-josh);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  padding: 6.5px 19px;
  margin-left: 2px;
  cursor: pointer;
  transition: background 0.11s;
  box-shadow: var(--shadow-xs);
  &:hover,
  &:focus-visible {
    background: var(--color-primary-light);
  }
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
    font-weight: 600;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-accent-josh);
    `;