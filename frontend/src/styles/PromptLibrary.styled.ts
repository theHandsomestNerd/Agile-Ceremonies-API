import styled, {css, keyframes} from 'styled-components';
import thnTheme from './globalStyles';

// ============== TOP NAV ==========================
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 62px;
  height: 4.5rem;
  padding: 0 ${thnTheme.spacing.lg};
  background: ${thnTheme.colors.surface.dark};
  box-shadow: ${thnTheme.shadows.md};
  border-bottom: 2px solid ${thnTheme.colors.neutral[200]};
  z-index: 30;
`;

export const LogoSvg = styled.svg`
  width: 44px; 
  height: 44px; 
  margin-right: ${thnTheme.spacing.md}; 
  user-select: none;
`;

export const NavBrand = styled.div`
  display: flex; 
  align-items: center; 
  gap: ${thnTheme.spacing.base};
`;

export const NavTitle = styled.span`
  font-size: 1.55rem;
  font-weight: 700;
  color: ${thnTheme.colors.josh.primary};
  letter-spacing: -0.03em;
`;

export const NavAvatar = styled.div`
  min-width: 44px;
  min-height: 44px;
  background: ${thnTheme.colors.neutral[200]};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${thnTheme.colors.text.light};
  border: 2px solid ${thnTheme.colors.josh.primary};
  box-shadow: ${thnTheme.shadows.xs};
`;

// ================== APP LAYOUT ===============
export const AppOuter = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppMain = styled.main`
  width: 100vw;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${thnTheme.darkBG};
  padding-bottom: 8rem;
`;

// =============== DASHBOARD ===============
export const DashOuter = styled.section`
  width: 98vw;
  max-width: 112em;
  margin-top: 2.7rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 1.5vw;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 2.2rem;
  align-items: center;
  justify-content: flex-start;
  background: ${thnTheme.cardGlass};
  border-radius: 16px;
  min-height: 56px;
  margin-bottom: 2.3rem;
  box-shadow: 0 0 9px 1.5px #8b5cf655;
  padding: 14px 12px 14px 2.2vw;
`;

export const SearchSVG = styled.svg`
  display: block;
  position: absolute;
  left: 13px;
  top: 8px;
  pointer-events: none;
`;

export const SearchInputWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 246px;
  max-width: 99vw;
`;

export const FilterSearch = styled.input`
  width: 100%;
  padding: 7.5px 13px 7.5px 33px;
  border-radius: 9px;
  border: none;
  background: #222244;
  font-size: 1.1rem;
  color: #fff;
  outline: none;
  transition: border 0.13s, box-shadow 0.13s;
  &:focus {
    box-shadow: ${thnTheme.focusBox};
    border: 2px solid ${thnTheme.neonTeal};
  }
`;

export const FilterLabel = styled.label`
  font-size: 1.02em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.4em;
  min-width: 40px;
  user-select: none;
`;

export const FilterDropdown = styled.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 0.38em 0.82em;
  margin-left: 0.5em;
  transition: box-shadow 0.11s;
  &:focus {
    box-shadow: ${thnTheme.focusBox};
    border: 2.5px solid ${thnTheme.neonTeal};
  }
`;

export const DomainMulti = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25em;
  margin-left: 0.51em;
  max-width: 270px;
  user-select: none;
`;

export const DomainChip = styled.button<{ selected: boolean }>`
  background: ${(p) => p.selected ? thnTheme.gradientMain : thnTheme.cardGlass};
  color: ${(p) => (p.selected ? "#11151f" : "#fff")};
  border: none;
  border-radius: 33px;
  padding: 0.25em 0.87em;
  font-size: 0.98em;
  font-weight: 600;
  margin-bottom: 1.3px;
  box-shadow: ${(p) => p.selected ? "0 1.5px 9px #06d6a044" : "none"};
  outline: none;
  transition: box-shadow 0.13s, background 0.13s;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2.7px #ff00cc99;
    z-index: 1;
  }
`;

export const DomainLogicToggle = styled.button<{ selected: boolean }>`
  margin-left: 0.95em;
  font-weight: 900;
  font-size: 1.05em;
  background: ${(p) => p.selected ? thnTheme.gradientAlt : thnTheme.cardGlass};
  color: ${(p) => (p.selected ? "#15151e" : "#fff")};
  padding: 2.5px 17px;
  border-radius: 19px;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  &:focus {
    box-shadow: 0 0 0 2.8px #9333EA99;
  }
`;

export const DomainLogicHint = styled.span`
  display: block;
  font-size: 0.91em;
  margin-left: 0.7em;
  color: #8b5cf6cc;
  font-weight: 500;
`;

export const ToggleViewBtns = styled.div`
  display: flex;
  gap: 0.32em;
  align-items: center;
  margin-left: 1.9em;
`;

export const ViewBtn = styled.button<{ active: boolean }>`
  background: ${(p) => (p.active ? thnTheme.gradientAlt : thnTheme.glassMain)};
  color: ${(p) => (p.active ? "#fff" : "#9b8cff")};
  border: none;
  outline: none;
  border-radius: 7px;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  box-shadow: ${(p) => p.active ? "0 0 11px #ff00cc77" : "none"};
  transition: box-shadow 0.11s, background 0.13s;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2.2px #9333EA88;
  }
`;

export const CreateBtn = styled.button`
  margin-left: 2.2em;
  font-size: 1.13em;
  font-weight: 700;
  background: ${thnTheme.gradientMain};
  color: #fff;
  border: none;
  border-radius: 8.5px;
  min-height: 38px;
  min-width: 142px;
  box-shadow: 0 1px 14px #06d6a044;
  transition: transform 0.11s, box-shadow 0.12s;
  cursor: pointer;
  &:hover {
    transform: scale(1.038);
    box-shadow: 0 0 24px #9333EA66;
  }
  &:focus {
    box-shadow: 0 0 0 3px #06d6a099;
  }
`;

export const NoResults = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
  font-size: 1.24em;
  font-weight: 500;
`;

// =============== PROMPT GRID & CARD ==========================
export const PromptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
  gap: 2.4rem 1.5rem;
  margin-top: 1.95rem;
  padding-bottom: 3rem;
`;

// ---- Card Glow Animation (for copy/active states) ------------
export const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 #06d6a0,0 0 17px 4px #9333EA66;}
  47%{box-shadow:0 0 0 7px #06d6a077,0 0 27px 10px #8b5cf688;}
  98%,100%{box-shadow:0 0 0 0 #06d6a0,0 0 20px 7px #9333EA55;}
`;

export const CardShell = styled.div<{ $copied: boolean }>`
  background: ${thnTheme.cardGlass};
  border-radius: 1.45rem;
  box-shadow: 0 0 24px 4px #8b5cf655;
  border: 1px solid #271666;
  padding: 2rem 1.22rem 1.18rem 1.48rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 285px;
  user-select: text;
  transition: box-shadow 0.18s, border 0.18s;
  ${(p) => p.$copied && css`
    animation: ${glowPulse} 1.015s 1;
    border: 2.5px solid ${thnTheme.neonTeal};
  `}
  &:hover {
    box-shadow: 0 0 44px 8px #06d6a066;
    border-color: #06d6a0;
  }
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
  font-size: 1.24rem;
  font-weight: bold;
  background: ${thnTheme.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.18em 0 0.6em 0;
  line-height: 1.14em;
  letter-spacing: -0.025em;
  user-select: text;
`;

export const CardDesc = styled.p`
  color: #e3e9ff;
  font-size: 0.98em;
  margin: 0 0 0.51em 0;
  user-select: text;
`;

export const CardDomains = styled.div`
  margin-bottom: 0.61em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
`;

export const DomainCardChip = styled.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 19px;
  font-size: 0.8em;
  font-weight: 700;
  padding: 0.3em 0.7em;
  margin-bottom: 0.07em;
  display: inline-block;
`;

export const CardAgent = styled.div`
  color: #8b5cf6;
  font-size: 0.91em;
  font-weight: 600;
  margin-top: -0.11em;
  margin-bottom: 1.19em;
  letter-spacing: 0.02em;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.93rem;
`;

export const ActionButton = styled.button<{ $copied?: boolean }>`
  background: ${(p) => p.$copied ? thnTheme.gradientMain : thnTheme.gradientAlt};
  color: #fff;
  border: none;
  border-radius: 5.5px;
  font-weight: 700;
  font-size: 1em;
  padding: 0.38em 1.16em;
  box-shadow: 0 0 8px #8b5cf644;
  transition: transform 0.08s, box-shadow 0.12s, background 0.09s;
  cursor: pointer;
  &:hover, &:focus {
    transform: scale(1.049);
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

