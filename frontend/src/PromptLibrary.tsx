import React, {useState,} from "react";
import {AppMain, AppOuter} from "./styles/PromptLibrary.styled";

import PromptModal from "./components/PromptModal";
import {PromptProvider} from "./components/Prompt.ctx";
import {Prompt} from "./types/PromptLibrary.types";
import {TopNav} from "./components/TopNav";
import {PromptDashboard} from "./components/PromptDashboard";

interface PromptLibraryProps {
    onBackToWorkflow: () => void;
}

// ================ MAIN COMPONENT ===================
const PromptLibrary: React.FC<PromptLibraryProps> = ({onBackToWorkflow}) => {
    const [modal, setModal] = useState<{
        mode: "new" | "edit" | "view";
        prompt?: Prompt;
        open: boolean;
    }>({mode: "new", prompt: undefined, open: false});
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    return (
        <PromptProvider>
            <AppOuter>
                <TopNav/>
                <AppMain>
                    <PromptDashboard
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        openModal={setModal}
                    />
                </AppMain>
                {modal.open && (
                    <PromptModal
                        mode={modal.mode}
                        prompt={modal.prompt}
                        closeModal={() => setModal((m) => ({...m, open: false}))}
                    />
                )}
            </AppOuter>
        </PromptProvider>
    );
};

export default PromptLibrary;