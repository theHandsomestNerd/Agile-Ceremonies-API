// ---- Viz Node Builder (mini step workflow) -----
import styled from "styled-components";

export const VizBuilderWrap = styled.div`
    margin: 0 0 0 var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-xs) var(--spacing-md) var(--spacing-sm);
    display: flex;
    gap: var(--spacing-md);
    min-height: 66px;
    align-items: center;
`;

export const VizNode = styled.div<{
    color: string;
    selected?: boolean;
    error?: boolean;
}>`
    background: ${(p) => (p.selected ? "var(--color-josh-primary)" : "var(--color-neutral-100)")};
    color: ${(p) => (p.selected ? "var(--color-neutral-100)" : "var(--color-neutral-900)")};
    border: var(--border-width-thick) solid ${(p) => (p.error ? "var(--color-error)" : p.color)};
    box-shadow: ${(p) =>
    p.selected ? "var(--shadow-lg)" : "var(--shadow-xs)"};
    border-radius: var(--border-radius-pill);
    padding: var(--spacing-xs) var(--spacing-md);
    min-width: 66px;
    min-height: 45px;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    letter-spacing: 0.06em;
    transition: background var(--transition-fast), color var(--transition-fast);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-xs);
    position: relative;
    outline: none;
    cursor: pointer;

    &:hover {
        box-shadow: var(--shadow-md);
    }

    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: var(--spacing-xxs);
    }
`;

export const VizNodeInitial = styled.span`
    width: 38px;
    height: 38px;
    border-radius: var(--border-radius-full);
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
`;

export const VizNodeStatusBadge = styled.span<{ color: string }>`
    background: ${(p) => p.color};
    border-radius: var(--border-radius-sm);
    color: var(--color-neutral-100);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-left: var(--spacing-xs);
    letter-spacing: 0.04em;
`;