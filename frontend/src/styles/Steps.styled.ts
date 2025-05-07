// ---------- Step Details Panel + n8n Panel ----------
import styled, {css} from "styled-components";

export const StepDetailsPanelWrap = styled.div`
    min-width: 320px;
    background: var(--color-surface-light);
    border-radius: var(--border-radius-large);
    box-shadow: var(--shadow-md);
    padding: 21px 20px 19px 24px;
    margin: 17px 0 0 0;
    display: flex;
    flex-direction: column;
    flex: 1 1 330px;
`;

export const StepLabel = styled.div`
    color: var(--color-josh-primary);
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
    color: var(--color-text-dark);
    font-weight: 600;
    margin-left: 5px;
`;
export const StepDevNotes = styled.div`
    margin: 2.5px 0 9px 5px;
    padding: 4.5px 7px;
    background: var(--color-neutral-200);
    border-radius: var(--border-radius-small);
    color: var(--color-josh-primary);
    font-size: 0.97rem;
    font-style: italic;
`;
export const StepDesc = styled.div`
    color: var(--color-text-muted);
    font-size: 0.99rem;
    margin-bottom: 1.5px;
`;
export const StepDetailHint = styled.div`
    color: var(--color-text-hint);
    margin-top: 38px;
    text-align: center;
    font-size: 1.07rem;
    font-weight: 600;
    opacity: 0.83;
`;

export const StepStatusDot = styled.span<{ color: string; error?: boolean }>`
    margin-left: var(--spacing-xs);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: ${(p) => p.color};
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    ${(p) =>
            p.error &&
            css`
                background: var(--color-neutral-200);
                border-radius: var(--border-radius-sm);
                padding: var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-xxs);
            `}
`;
