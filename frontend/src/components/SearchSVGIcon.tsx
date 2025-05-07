import {SearchSVG} from "../styles/PromptLibrary.styled";
import React from "react";

export function SearchSVGIcon() {
    return <SearchSVG width={23} height={23} aria-hidden>
        <circle
            cx={10}
            cy={10}
            r={7.8}
            stroke="#fff"
            strokeWidth={2}
            fill="none"
            opacity={0.7}
        />
        <line
            x1={16.1}
            y1={16.2}
            x2={21.2}
            y2={21.3}
            stroke="#06d6a0"
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.85}
        />
    </SearchSVG>;
}