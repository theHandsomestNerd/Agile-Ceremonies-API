
// ---------- Chat Sidebar ----------
import styled from "styled-components";

export const ChatPanelSidebar = styled.aside`
    min-width: 280px;
    max-width: 290px;
    padding: 0 var(--spacing-xxs) 0 0;
    background: var(--color-neutral-100);
    border-left: var(--border-width-medium) solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
`;

// Top section:
export const ChatHeader = styled.div`
    font-weight: var(--font-weight-bold);
    color: var(--color-josh-primary);
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-xs) var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-size-base);
    background: var(--color-neutral-100);
    border-bottom: var(--border-width-medium) solid var(--color-neutral-200);
`;

// Message history (auto scrolls vertical)
export const ChatMessagesPanel = styled.div`
    flex: 1 1 auto;
    padding: var(--spacing-md) var(--spacing-base) var(--spacing-base) var(--spacing-md);
    overflow-y: auto;
    min-height: 144px;
`;

// Single chat bubble
export const ChatBubble = styled.div<{ you: boolean }>`
    background: ${(p) =>
    p.you
        ? "linear-gradient(90deg, var(--color-josh-primary) 35%, var(--color-josh-secondary) 100%)"
        : "var(--color-neutral-200)"};
    color: ${(p) => (p.you ? "var(--color-neutral-100)" : "var(--color-neutral-900)")};
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) var(--border-radius-sm);
    padding: var(--spacing-xs) var(--spacing-base) var(--spacing-xs) var(--spacing-base);
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-base);
    align-self: ${(p) => (p.you ? "flex-end" : "flex-start")};
    box-shadow: var(--shadow-sm);
    font-weight: var(--font-weight-medium);
    max-width: 88%;
    word-break: break-word;
`;

// Bottom input bar
export const ChatInputBar = styled.div`
    padding: var(--spacing-xs) var(--spacing-base) var(--spacing-sm) var(--spacing-md);
    background: var(--color-neutral-100);
    border-top: var(--border-width-medium) solid var(--color-neutral-200);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
`;

export const ChatInput = styled.input`
    flex: 1 1 auto;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    border: var(--border-width-medium) solid var(--color-neutral-200);
    background: var(--color-neutral-200);
    font-size: var(--font-size-base);
    transition: all var(--transition-fast);

    &:focus-visible {
        border: var(--border-width-medium) solid var(--color-josh-primary);
        outline: none;
        box-shadow: var(--shadow-sm);
    }
`;

export const ChatSendBtn = styled.button`
    background: var(--color-josh-primary);
    color: var(--color-neutral-100);
    font-weight: var(--font-weight-bold);
    border: none;
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-base);
    padding: var(--spacing-xs) var(--spacing-md);
    margin-left: var(--spacing-xxs);
    cursor: pointer;
    transition: background var(--transition-fast);
    box-shadow: var(--shadow-xs);

    &:hover {
        background: var(--color-josh-secondary);
        box-shadow: var(--shadow-sm);
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: var(--spacing-xxs);
        background: var(--color-josh-secondary);
    }
`;