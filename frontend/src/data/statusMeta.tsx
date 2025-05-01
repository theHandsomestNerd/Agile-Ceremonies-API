import {StatusType} from "../App.types";
import {AlertCircleIcon} from "../components/CustomIcons";
import {BulletStyled} from "../App.styled";


export const statusMeta: Record<StatusType, { label: string; icon: JSX.Element; color: string }> = {
    complete: {
        label: "Complete",
        icon: <AlertCircleIcon/>,
        color: "var(--color-success)",
    },
    active: {
        label: "Active",
        icon: <BulletStyled>●</BulletStyled>,
        color: "var(--color-accent-josh)"
    },
    todo: {
        label: "Planned",
        icon: <BulletStyled>●</BulletStyled>,
        color: "var(--color-neutral-500)",
    },
    error: {
        label: "Error",
        icon: <AlertCircleIcon/>,
        color: "var(--color-error)",
    },
};
