// ----- n8n Node JSON panel -----
import styled from "styled-components";

export const N8nWrapper = styled.section`
    min-width: 385px;
    background: var(--color-surface-light);
    border-radius: var(--border-radius-large);
    margin: 17px 0 0 0;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.13s;
`;

export const N8nJsonHeader = styled.div`
    padding: 13px 17px 10px 17px;
    font-weight: 700;
    color: var(--color-josh-primary);
    background: var(--color-neutral-200);
    cursor: pointer;
    font-size: 1.02rem;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;

    &:focus-visible {
        outline: 2px solid var(--color-josh-primary);
        outline-offset: -1.5px;
    }
`;
export const N8nCollapsibleToggle = styled.span`
    position: relative;
    top: 1.5px;
    font-size: 1.19em;
    color: var(--color-josh-primary);
    opacity: 0.86;
`;

export const N8nJsonBody = styled.div`
    background: var(--color-surface-light);
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
    color: var(--color-josh-primary);
    padding: 5px 13px 4px 11px;
    border-radius: var(--border-radius-small);
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
    transition: background 0.11s, color 0.11s;

    &:active {
        background: var(--color-josh-muted);
        color: var(--color-text-light);
    }

    &:focus-visible {
    }
`;
