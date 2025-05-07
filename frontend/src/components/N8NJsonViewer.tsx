import {
    N8nCollapsibleToggle,
    N8nJsonBody,
    N8nJsonHeader,
    N8nPanelBtn,
    N8nPanelFooter,
    N8nWrapper
} from "../styles/N8N.styled";
import {ChevronDownIcon, ChevronUpIcon, CopyIcon, EditIcon} from "./CustomIcons";
import ReactJson from "react-json-view";
import React, {useState} from "react";


const N8NJsonViewer = ({step}: { step: any }) => {
    const [n8nOpen, setN8nOpen] = useState(true);
    const [n8nCopied, setN8nCopied] = useState(false);
    const [ariaStatus, setAriaStatus] = useState("");

    // TODO: Get the n8n JSON from the n8n collection for this {workflowId}/{stepId}

    function handleN8nCopy() {
        if (step) {
            navigator.clipboard.writeText(JSON.stringify(step.n8nJson, null, 2));
            setN8nCopied(true);
            setTimeout(() => setN8nCopied(false), 1100);
            setAriaStatus("Copied step n8n node JSON.");
        }
    }

    return <N8nWrapper
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
}

export default N8NJsonViewer