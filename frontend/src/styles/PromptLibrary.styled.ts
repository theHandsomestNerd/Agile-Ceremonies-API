import styled, { keyframes, css } from 'styled-components';
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
  width: 100%;
  max-width: 1440px;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 1.5rem;
  height: calc(100vh - 62px - 2rem); /* Subtract header height and top margin */
  box-sizing: border-box;
  overflow: hidden; /* Prevent outer scrolling */
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 1rem;
    height: calc(100vh - 62px - 1rem);
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    height: calc(100vh - 62px - 0.75rem);
  }
`;

export const DashContent = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  padding-right: 0.5rem;
  
  @media (max-width: 768px) {
    padding-right: 0.25rem;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.25rem;
  align-items: center;
  justify-content: flex-start;
  background: ${thnTheme.cardGlass};
  border-radius: 16px;
  min-height: 48px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 9px 1.5px #8b5cf655;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  
  @media (max-width: 991px) {
    padding: 0.75rem 1.25rem;
    gap: 0.6rem 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    gap: 0.6rem 0.75rem;
    flex-direction: column;
    align-items: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    border-radius: 12px;
  }
`;

export const SearchSVG = styled.svg`
  display: block;
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  
  @media (max-width: 480px) {
    left: 10px;
  }
`;

export const SearchInputWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 300px;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 50px;
  overflow-y: hidden;
  padding: 0.25rem;
  border-radius: 0.5rem;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.5);
    border-radius: 4px;
  
    &:hover {
      background: rgba(139, 92, 246, 0.8);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    flex-basis: 100%;
  }
`;

export const FilterSearch = styled.input`
  width: 100%;
  padding: 10px 13px 10px 38px;
  border-radius: 9px;
  border: none;
  background: #222244;
  font-size: 1rem;
  color: #fff;
  outline: none;
  transition: border 0.13s, box-shadow 0.13s;
  
  &:focus {
    box-shadow: ${thnTheme.focusBox};
    border: 2px solid ${thnTheme.neonTeal};
  }
  
  @media (max-width: 480px) {
    padding: 8px 10px 8px 32px;
    font-size: 0.95rem;
  }
`;

export const FilterLabel = styled.label`
  font-size: 1em;
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.4em;
  min-width: 40px;
  user-select: none;
  
  /* Domains filter should be full width to prevent shifts */
  &[style*="flex-grow: 1"] {
    width: 100%;
    height: auto;
    min-height: 200px; /* Fixed height for domains section */
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(139, 92, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95em;
  }
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
  
  @media (max-width: 768px) {
    flex-grow: 1;
  }
  
  @media (max-width: 480px) {
    padding: 0.3em 0.6em;
    font-size: 0.9em;
  }
`;

export const DomainMulti = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  margin-left: 0.5em;
  max-width: 350px;
  user-select: none;
  
  @media (max-width: 991px) {
    max-width: 320px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.25rem;
    max-width: 100%;
    width: 100%;
  }
`;

export const DomainChip = styled.button<{ selected: boolean }>`
  background: ${(p) => p.selected ? thnTheme.gradientMain : thnTheme.cardGlass};
  color: ${(p) => (p.selected ? "#11151f" : "#fff")};
  border: none;
  border-radius: 33px;
  padding: 0.25em 0.75em;
  font-size: 0.9em;
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
  
  @media (max-width: 480px) {
    padding: 0.2em 0.6em;
    font-size: 0.85em;
  }
`;

export const DomainLogicToggle = styled.button<{ selected: boolean }>`
  margin-left: 0.6em;
  font-weight: 900;
  font-size: 1em;
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
  
  @media (max-width: 480px) {
    padding: 2px 12px;
    font-size: 0.9em;
    margin-left: 0.4em;
  }
`;

export const DomainLogicHint = styled.span`
  display: block;
  font-size: 0.9em;
  margin-left: 0.7em;
  color: #8b5cf6cc;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.85em;
    margin-left: 0.5em;
  }
`;

export const ToggleViewBtns = styled.div`
  display: flex;
  gap: 0.32em;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const ViewControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

export const ViewControlsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ViewControlsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
  
  @media (max-width: 480px) {
    min-width: 32px;
    min-height: 32px;
    font-size: 1.1em;
  }
`;

export const CreateBtn = styled.button`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  background: ${thnTheme.gradientMain};
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 38px;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 1px 14px #06d6a044;
  transition: transform 0.11s, box-shadow 0.12s;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    transform: scale(1.038);
    box-shadow: 0 0 24px #9333EA66;
  }
  
  &:focus {
    box-shadow: 0 0 0 3px #06d6a099;
  }
  
  @media (max-width: 991px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    align-self: flex-end;
    margin-top: 0.5rem;
  }
  
  @media (max-width: 480px) {
    height: 34px;
    padding: 0 0.85rem;
    font-size: 0.85rem;
  }
`;

export const NoResults = styled.div`
  padding: 2rem;
  text-align: center;
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  width: 100%;
  background: ${thnTheme.cardGlass};
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 1.1em;
  }
`;

// =============== PROMPT GRID & CARD ==========================
export const PromptContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 1rem;
  box-sizing: border-box;
  position: relative;
  margin-top: 1rem;
`;

export const PromptGridWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(20, 20, 40, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.4);
    border-radius: 4px;
    
    &:hover {
      background: rgba(139, 92, 246, 0.6);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const PromptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(304px, 1fr)); /* Increased to account for card margins */
  gap: 0.5rem; /* Reduced gap since cards have their own margin */
  width: 100%;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ScrollArrow = styled.button<{ direction: 'left' | 'right' }>`
  position: fixed;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: ${thnTheme.gradientMain};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  z-index: 4;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

export const PromptCard = styled.div`
  flex: 0 0 auto;
  width: 100%;
  background: ${thnTheme.cardGlass};
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: ${thnTheme.shadows.md};
  transition: transform 0.15s, box-shadow 0.15s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
  }
`;

