// ============== TOP NAV ==========================
import React from "react";
import {LogoSvg, Nav, NavAvatar, NavBrand, NavTitle} from "../styles/PromptLibrary.styled";
import thnTheme from "../styles/globalStyles";

export const TopNav: React.FC = () => (
    <Nav>
        <NavBrand>
            <LogoSvg
                width={44}
                height={44}
                aria-label="THN AI Logo"
                focusable={false}
                role="img"
            >
                <defs>
                    <linearGradient id="logograd" x1="0" x2="1" y1="0" y2="1">
                        <stop stopColor={thnTheme.colors.josh.primary}/>
                        <stop offset="1" stopColor="#06d6a0"/>
                    </linearGradient>
                </defs>
                <circle cx={22} cy={22} r={21} fill="url(#logograd)"/>
                <text
                    x="22"
                    y="30"
                    fontFamily="'JetBrains Mono','SF Pro',sans-serif"
                    fontSize="19"
                    textAnchor="middle"
                    fontWeight={900}
                    fill="#fff"
                >
                    THN
                </text>
            </LogoSvg>
            <NavTitle>Prompt Library Manager</NavTitle>
        </NavBrand>
        <span style={{color: thnTheme.colors.josh.primary, fontWeight: 700, fontSize: 18}}>
      v1.0
    </span>
        <NavAvatar>
            <span aria-label="Profile">@</span>
        </NavAvatar>
    </Nav>
);