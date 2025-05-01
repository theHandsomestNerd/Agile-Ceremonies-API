import {createGlobalStyle} from "styled-components";

/**
 * =========================
 * GLOBAL THEME & RESET
 * =========================
 */
export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #9333EA;
    --color-primary-light: #A855F7;
    --color-primary-dark: #7928CA;
    --color-accent-josh: #7E4DD2;
    --color-accent-nat: #F2703E;
    --color-accent-reqqy: #5AB5F7;
    --color-accent-lia: #E25574;
    --color-accent-manman: #7FCF87;
    --color-accent-antosh: #64C9D9;
    --color-accent-twin: #A35BD6;
    --color-success: #22C55E;
    --color-error: #EF4444;
    --color-warning: #EAB308;
    --color-info: #3B82F6;
    --color-neutral-900: #1A1A1A;
    --color-neutral-700: #4A5568;
    --color-neutral-500: #A0AEC0;
    --color-neutral-200: #EDF2F7;
    --color-neutral-100: #F8F9FA;
    --spacing-base: 16px;
    --spacing-gap: 8px;
    --font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --shadow-card: 0px 4px 12px #BCB2ED20;
    --shadow-xs: 0px 1.5px 5px #A0AEC044;
  }
  html, body, #root {
    min-height: 100vh;
    background: var(--color-neutral-100);
    font-family: var(--font-family);
    color: var(--color-neutral-900);
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  *:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 1.5px;
  }
  ::selection {
    background: var(--color-accent-josh);
    color: #fff;
  }
  .visually-hidden { position: absolute !important; width: 1px !important; height: 1px !important; overflow: hidden !important; clip: rect(1px,1px,1px,1px); clip-path: inset(50%);}
`;