
// ---- Card Glow Animation (for copy/active states) ------------
import styled, {css, keyframes} from "styled-components";
import thnTheme from "./globalStyles";

export const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 #06d6a0,0 0 17px 4px #9333EA66;}
  47%{box-shadow:0 0 0 7px #06d6a077,0 0 27px 10px #8b5cf688;}
  98%,100%{box-shadow:0 0 0 0 #06d6a0,0 0 20px 7px #9333EA55;}
`;

export const expandCard = keyframes`
  from { transform: scale(1); z-index: 1; }
  to { transform: scale(1.1); z-index: 10; }
`;

export const collapseCard = keyframes`
  from { transform: scale(1.1); z-index: 10; }
  to { transform: scale(1); z-index: 1; }
`;

export const CardShell = styled.div<{ $copied: boolean; $expanded: boolean }>`
  background: ${thnTheme.cardGlass};
  border-radius: 1.45rem;
  box-shadow: 0 0 24px 4px #8b5cf655;
  border: 1px solid #271666;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 280px;
  user-select: text;
  cursor: pointer;
  transition: box-shadow 0.18s, border 0.18s;
  margin: 12px; /* Added margin to ensure glow is fully visible */
  animation: ${props =>
      props.$expanded ?
          css`${expandCard} 0.25s forwards` :
          props.$copied ?
              css`${glowPulse} 1.015s 1` :
              css`${collapseCard} 0.25s`
  };

  ${(p) => p.$copied && css`
    border: 2.5px solid ${thnTheme.neonTeal};
  `}

  &:hover {
    box-shadow: 0 0 44px 8px #06d6a066;
    border-color: #06d6a0;
  }

  ${props => props.$expanded && css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    height: auto;
    min-height: 380px;
    width: 350px;
    max-width: 90vw;
    max-height: 80vh;
    box-shadow: 0 0 60px 12px #06d6a099;
    border: 2px solid #06d6a0;
    cursor: default;
    z-index: 10;
    overflow-y: auto;
    margin: 0; /* Reset margin when expanded */
  `}
`;

export const CardContent = styled.div<{ $expanded: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: ${props => props.$expanded ? 'auto' : 'hidden'};
  position: relative;
  z-index: 6;
`;

export const CardPromptText = styled.pre`
  background: #161234;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  padding: 1rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  max-height: 200px;
  margin: 0.5rem 0 1.2rem 0;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #2a2356;
  line-height: 1.4;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #0f0c1e;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${thnTheme.colors.josh.primary}80;
    border-radius: 4px;

    &:hover {
      background: ${thnTheme.colors.josh.primary};
    }
  }
`;

export const CardOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 5;
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45em;
`;

export const StatusBadge = styled.span<{ status: "active" | "archived" }>`
  background: ${(p) => p.status === "active"
      ? thnTheme.gradientMain
      : "linear-gradient(90deg,#48445a,#a90042)"};
  color: #fff;
  border-radius: 2em;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.22em 1.05em;
  letter-spacing: 0.06em;
`;

export const CardUsage = styled.span`
  display: flex;
  align-items: center;
  gap: 0.24em;
  font-size: 0.98em;
`;

export const UsageSvg = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

export const CardTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: bold;
  background: ${thnTheme.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.18em 0 0.4em 0;
  line-height: 1.14em;
  letter-spacing: -0.025em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: text;
`;

export const CardDesc = styled.p<{ $expanded: boolean }>`
  color: #e3e9ff;
  font-size: 0.9em;
  margin: 0 0 0.51em 0;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.$expanded ? 'unset' : '2'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: height 0.3s ease;
  user-select: text;
`;

export const CardDomains = styled.div<{ $expanded: boolean }>`
  margin-bottom: 0.61em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  max-height: ${props => props.$expanded ? 'none' : '3.5em'};
  overflow: ${props => props.$expanded ? 'visible' : 'hidden'};
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
              box-shadow 0.3s ease,
              width 0.3s ease, 
              max-width 0.3s ease,
              max-height 0.3s ease;
  will-change: transform, width, position;
  backface-visibility: hidden;
  
  &:hover {
    transform: ${(p) => (!p.$expanded ? "translateY(-3px)" : "translate(-50%, -50%)")};
    box-shadow: ${(p) => (!p.$expanded ? "0 6px 16px rgba(0, 0, 0, 0.16)" : "0 10px 30px rgba(0, 0, 0, 0.3)")};
  }
`;

export const DomainCardChip = styled.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 19px;
  font-size: 0.75em;
  font-weight: 700;
  padding: 0.25em 0.5em;
  margin-bottom: 0.07em;
  display: inline-block;
`;

export const CardAgent = styled.div`
  color: #8b5cf6;
  font-size: 0.85em;
  font-weight: 600;
  margin-top: -0.11em;
  margin-bottom: 0.5em;
  letter-spacing: 0.02em;
`;

export const CardActions = styled.div<{ $expanded: boolean }>`
  display: flex;
  gap: 0.8rem;
  margin-top: ${props => props.$expanded ? '1rem' : 'auto'};
  margin-bottom: 0.2em;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ActionButton = styled.button<{ $copied?: boolean; $expanded?: boolean }>`
  background: ${(p) => p.$copied ? thnTheme.gradientMain : thnTheme.gradientAlt};
  color: #fff;
  border: none;
  border-radius: 5.5px;
  font-weight: 700;
  font-size: ${(p) => p.$expanded ? '0.95em' : '0.85em'};
  padding: ${(p) => p.$expanded ? '0.38em 1.16em' : '0.32em 0.7em'};
  box-shadow: 0 0 8px #8b5cf644;
  transition: transform 0.08s, box-shadow 0.12s, background 0.09s;
  cursor: pointer;
  flex: ${(p) => p.$expanded ? '0 0 auto' : '1 1 0'};
  min-width: ${(p) => p.$expanded ? 'auto' : '60px'};
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 18px 4px #8b5cf655;
  }

  &:active {
    transform: translateY(1px);
  }

  ${(p) => p.$copied && css`
    background: ${thnTheme.gradientMain};
    box-shadow: 0 0 20px #06d6a0cc;
  `}
`;
export const CopyGlow = styled.span`
  color: #06d6a0;
  font-weight: 900;
  font-size: 1.27em;
  text-shadow: 0 0 10px #06d6a0,0 0 4px #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${thnTheme.gradientAlt};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  opacity: 0.8;
  z-index: 11;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;