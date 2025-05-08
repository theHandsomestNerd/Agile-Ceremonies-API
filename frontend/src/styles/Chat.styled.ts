
// ---------- Chat Sidebar ----------
import styled from "styled-components";

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