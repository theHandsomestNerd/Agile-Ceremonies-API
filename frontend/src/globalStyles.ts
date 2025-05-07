import {createGlobalStyle} from "styled-components";

/**
 * =========================
 * GLOBAL THEME & RESET
 * =========================
 * A comprehensive styling system for the THN Multi-Agent Network
 * Each agent has a personalized color identity
 */
export const GlobalStyles = createGlobalStyle`
  :root {
    /* ====================
     * BRAND COLORS
     * ==================== */
    --color-primary: #7E22CE;         /* Core brand color */
    --color-primary-light: #9333EA;   /* Lighter variation */
    --color-primary-dark: #6B21A8;    /* Darker variation */
    
    /* ====================
     * AGENT COLOR SYSTEM - Each agent with unique yet harmonious palette
     * ==================== */
    
    /* NAT - CEO/AI PM - Royal purple with gold */
    --color-nat-primary: #6D28D9;     /* Royal purple */
    --color-nat-secondary: #F59E0B;   /* Gold */
    --color-nat-surface: #F5F3FF;     /* Light violet surface */
    --color-nat-gradient: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%);
    
    /* BRIAN - Product Manager - Deep blue-violet with teal */
    --color-brian-primary: #4F46E5;   /* Indigo */
    --color-brian-secondary: #0D9488;  /* Teal */
    --color-brian-surface: #EEF2FF;   /* Light indigo surface */
    --color-brian-gradient: linear-gradient(135deg, #4F46E5 0%, #818CF8 100%);
    
    /* REQQY - Requirements Agent - Sky blue with navy accents */
    --color-reqqy-primary: #0EA5E9;   /* Vibrant sky blue */  
    --color-reqqy-secondary: #1E40AF; /* Navy */
    --color-reqqy-surface: #E0F2FE;   /* Light sky blue surface */
    --color-reqqy-gradient: linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 100%);
    
    /* JOSH - Graphic Design - Vibrant purple with pink */
    --color-josh-primary: #8B5CF6;    /* Vibrant purple */
    --color-josh-secondary: #EC4899;  /* Pink */
    --color-josh-surface: #F3E8FF;    /* Light purple surface */  
    --color-josh-gradient: linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%);
    
    /* JAMES & TERRELL - Twin Dev Agents - Deep violet with electric blue */
    --color-twin-primary: #7C3AED;    /* Deep violet */
    --color-twin-secondary: #2563EB;  /* Electric blue */
    --color-twin-surface: #EDE9FE;    /* Light violet surface */
    --color-twin-gradient: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
    
    /* ANTOSH - Testing & Analytics - Teal with orange */
    --color-antosh-primary: #14B8A6;  /* Teal */
    --color-antosh-secondary: #F97316; /* Orange */
    --color-antosh-surface: #CCFBF1;  /* Light teal surface */
    --color-antosh-gradient: linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%);
    
    /* MAN-MAN - Maintenance - Emerald green with blue */
    --color-manman-primary: #10B981;  /* Emerald green */
    --color-manman-secondary: #3B82F6; /* Blue */
    --color-manman-surface: #D1FAE5;  /* Light emerald surface */
    --color-manman-gradient: linear-gradient(135deg, #10B981 0%, #34D399 100%);
    
    /* LIA - Social Media - Rose with purple */
    --color-lia-primary: #F43F5E;     /* Rose */
    --color-lia-secondary: #A855F7;   /* Purple */
    --color-lia-surface: #FEE2E2;     /* Light rose surface */
    --color-lia-gradient: linear-gradient(135deg, #F43F5E 0%, #FB7185 100%);
    
    /* COMPASS - HR/Router - Slate with amber */
    --color-compass-primary: #64748B; /* Slate */
    --color-compass-secondary: #F59E0B; /* Amber */
    --color-compass-surface: #F1F5F9; /* Light slate surface */
    --color-compass-gradient: linear-gradient(135deg, #64748B 0%, #94A3B8 100%);
    
    /* Legacy agent variables (maintained for backward compatibility) */
    --color-accent-josh: var(--color-josh-primary);
    --color-accent-nat: var(--color-nat-secondary);
    --color-accent-reqqy: var(--color-reqqy-primary);
    --color-accent-lia: var(--color-lia-primary);
    --color-accent-manman: var(--color-manman-primary);
    --color-accent-antosh: var(--color-antosh-primary);
    --color-accent-twin: var(--color-twin-primary);
    
    /* ====================
     * SEMANTIC COLORS
     * ==================== */
    --color-success: #10B981;         /* Success green - slightly adjusted */
    --color-error: #EF4444;           /* Error red */
    --color-warning: #F59E0B;         /* Warning amber */
    --color-info: #3B82F6;            /* Info blue */
    
    /* ====================
     * NEUTRAL COLORS
     * ==================== */
    --color-neutral-900: #121212;     /* Almost black - slightly darkened for better contrast */
    --color-neutral-800: #262626;     /* Added for more gradation */
    --color-neutral-700: #404040;     /* Darkened for better contrast */
    --color-neutral-600: #606060;     /* Added for more gradation */
    --color-neutral-500: #808080;     /* Neutral gray */
    --color-neutral-400: #A0AEC0;     /* Added for more gradation */
    --color-neutral-300: #CBD5E1;     /* Added for more gradation */
    --color-neutral-200: #E2E8F0;     /* Light gray */
    --color-neutral-100: #F8FAFC;     /* Almost white */
    
    /* ====================
     * TYPOGRAPHY
     * ==================== */
    --font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --line-height-tight: 1.25;
    --line-height-normal: 1.5;
    --line-height-loose: 1.75;
    
    /* ====================
     * SPACING SYSTEM
     * ==================== */
    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-base: 16px;
    --spacing-md: 24px;
    --spacing-lg: 32px;
    --spacing-xl: 48px;
    --spacing-2xl: 64px;
    --spacing-gap: 8px;
    
    /* ====================
     * NEUROMORPHIC SHADOWS & EFFECTS
     * ==================== */
    --shadow-card: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.04);
    --shadow-xs: 0px 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-sm: 0px 2px 4px rgba(0, 0, 0, 0.06);
    --shadow-md: 0px 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0px 8px 16px rgba(0, 0, 0, 0.12);
    --shadow-inner: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
    
    /* Neuromorphic shadows */
    --shadow-neuro-sm: 6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8);
    --shadow-neuro-md: 10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.8);
    --shadow-neuro-pressed: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
    
    /* ====================
     * BORDERS & RADIUS
     * ==================== */
    --border-width-thin: 1px;
    --border-width-medium: 2px;
    --border-width-thick: 4px;
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-xl: 16px;
    --border-radius-full: 9999px;
    
    /* ====================
     * TRANSITIONS & ANIMATIONS
     * ==================== */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;
    --transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
    
    /* ====================
     * Z-INDEX SCALE
     * ==================== */
    --z-index-dropdown: 1000;
    --z-index-sticky: 1100;
    --z-index-fixed: 1200;
    --z-index-modal-backdrop: 1300;
    --z-index-modal: 1400;
    --z-index-popover: 1500;
    --z-index-tooltip: 1600;
  }
  
  /* ====================
   * GLOBAL STYLES & RESETS
   * ==================== */
  html, body, #root {
    min-height: 100vh;
    background: var(--color-neutral-100);
    font-family: var(--font-family),sans-serif;
    color: var(--color-neutral-900);
    line-height: var(--line-height-normal);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  *:focus-visible {
    outline: var(--border-width-medium) solid var(--color-primary);
    outline-offset: 2px;
    border-radius: var(--border-radius-sm);
  }
  
  ::selection {
    background: var(--color-josh-primary);
    color: white;
  }
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  a:hover {
    color: var(--color-primary-dark);
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  img, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  /* Utility classes */
  .visually-hidden { 
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
    clip-path: inset(50%) !important;
  }
  
  /* Neuromorphic elements base class */
  .neuro {
    border-radius: var(--border-radius-md);
    background: var(--color-neutral-100);
    box-shadow: var(--shadow-neuro-md);
    transition: all var(--transition-normal);
  }
  
  .neuro:active {
    box-shadow: var(--shadow-neuro-pressed);
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    :root {
      --color-neutral-100: #121212;
      --color-neutral-200: #1E1E1E;
      --color-neutral-300: #2D2D2D;
      --color-neutral-400: #404040;
      --color-neutral-500: #737373;
      --color-neutral-600: #A3A3A3;
      --color-neutral-700: #D4D4D4;
      --color-neutral-800: #E5E5E5;
      --color-neutral-900: #F5F5F5;
      
      --shadow-neuro-sm: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.04);
      --shadow-neuro-md: 10px 10px 20px rgba(0, 0, 0, 0.3), -10px -10px 20px rgba(255, 255, 255, 0.04);
      --shadow-neuro-pressed: inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.04);
    }
    
    /* Agent surface colors need to be darkened */
    :root {
      --color-nat-surface: #2D1B69;
      --color-brian-surface: #1E1A5E;
      --color-reqqy-surface: #0B2F5A;
      --color-josh-surface: #2E1F5A;
      --color-twin-surface: #2A1A69;
      --color-antosh-surface: #0B3B36;
      --color-manman-surface: #0B3A2A;
      --color-lia-surface: #4A141E;
      --color-compass-surface: #1F2937;
    }
  }
`;