
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
export const ChatBubble = styled.div<{ isUser: boolean }>`
    background: ${(p) =>
    p.isUser
        ? "linear-gradient(90deg, var(--color-josh-primary) 35%, var(--color-josh-secondary) 100%)"
        : "var(--color-neutral-200)"};
    color: ${(p) => (p.isUser ? "var(--color-neutral-100)" : "var(--color-neutral-900)")};
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) var(--border-radius-sm);
    padding: var(--spacing-xs) var(--spacing-base) var(--spacing-xs) var(--spacing-base);
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-base);
    align-self: ${(p) => (p.isUser ? "flex-end" : "flex-start")};
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

export const UUIDContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    background: var(--color-neutral-100);
    border-radius: 4px;
    font-size: 12px;
    color: var(--color-neutral-600);
`;

export const EditableUUID = styled.input`
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    padding: 2px;
    width: 200px;
    &:hover:not(:focus) {
        background: var(--color-neutral-200);
    }
    &:focus {
        outline: none;
        background: white;
        border: 1px solid var(--color-neutral-300);
        border-radius: 2px;
    }
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    color: var(--color-neutral-600);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    
    &:hover {
        background: var(--color-neutral-200);
        color: var(--color-neutral-800);
    }
`;

export const MenuContainer = styled.div`
    position: relative;
`;

export const MenuDropdown = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: ${props => props.isOpen ? 'block' : 'none'};
    z-index: 1000;
`;

export const MenuItem = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 16px;
    border: none;
    background: none;
    color: var(--color-neutral-700);
    cursor: pointer;
    text-align: left;
    
    &:hover {
        background: var(--color-neutral-100);
    }
    
    svg {
        width: 18px;
        height: 18px;
    }
`;
