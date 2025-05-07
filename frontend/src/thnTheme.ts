// Theme constants and types for the THN application
export interface ThnTheme {
    // Colors
    colors: {
        surface: {
            light: string;
            dark: string;
        };
        neutral: {
            100: string;
            200: string;
        };
        text: {
            dark: string;
            light: string;
            muted: string;
            hint: string;
        };
        josh: {
            primary: string;
            muted: string;
        };
        status: {
            active: string;
            archived: string;
        };
    };
    
    // Spacing
    spacing: {
        xs: string;
        base: string;
        md: string;
        lg: string;
    };
    
    // Border radius
    borderRadius: {
        small: string;
        md: string;
        large: string;
    };
    
    // Shadows
    shadows: {
        xs: string;
        md: string;
        card: string;
    };
    
    // Backgrounds
    darkBG: string;
    cardGlass: string;
    glassMain: string;
    
    // Gradients
    gradientMain: string;
    gradientAlt: string;
    
    // Utilities
    neonTeal: string;
    focusBox: string;
    
    // Flat aliases (for backward compatibility)
    surfaceLight: string;
    surfaceDark: string;
    neutral100: string;
    neutral200: string;
    textDark: string;
    textLight: string;
    textMuted: string;
    textHint: string;
    joshPrimary: string;
    joshMuted: string;
    spacingXs: string;
    spacingBase: string;
    spacingMd: string;
    spacingLg: string;
    borderRadiusSmall: string;
    borderRadiusMd: string;
    borderRadiusLarge: string;
    shadowXs: string;
    shadowMd: string;
    shadowCard: string;
    active: string;
    archived: string;
}

export const thnTheme: ThnTheme = {
    // Colors
    colors: {
        surface: {
            light: 'var(--color-surface-light)',
            dark: 'var(--color-surface-dark)'
        },
        neutral: {
            100: 'var(--color-neutral-100)',
            200: 'var(--color-neutral-200)'
        },
        text: {
            dark: 'var(--color-text-dark)',
            light: 'var(--color-text-light)',
            muted: 'var(--color-text-muted)',
            hint: 'var(--color-text-hint)'
        },
        josh: {
            primary: 'var(--color-josh-primary)',
            muted: 'var(--color-josh-muted)'
        },
        status: {
            active: '#22C55E',
            archived: '#EF4444'
        }
    },
    
    // Spacing
    spacing: {
        xs: 'var(--spacing-xs)',
        base: 'var(--spacing-base)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)'
    },
    
    // Border radius
    borderRadius: {
        small: 'var(--border-radius-small)',
        md: 'var(--border-radius-md)',
        large: 'var(--border-radius-large)'
    },
    
    // Shadows
    shadows: {
        xs: 'var(--shadow-xs)',
        md: 'var(--shadow-md)',
        card: 'var(--shadow-card)'
    },
    
    // Backgrounds
    darkBG: '#131125',
    cardGlass: 'rgba(40, 33, 77, 0.82)',
    glassMain: 'rgba(42, 33, 89, 0.92)',
    
    // Gradients
    gradientMain: 'linear-gradient(90deg, #06d6a0, #8b5cf6)',
    gradientAlt: 'linear-gradient(90deg, #8b5cf6, #ff00cc)',
    
    // Utilities
    neonTeal: '#06d6a0',
    focusBox: '0 0 0 3.3px #8b5cf6aa',
    
    // Flat aliases (for backward compatibility)
    surfaceLight: 'var(--color-surface-light)',
    surfaceDark: 'var(--color-surface-dark)',
    neutral100: 'var(--color-neutral-100)',
    neutral200: 'var(--color-neutral-200)',
    textDark: 'var(--color-text-dark)',
    textLight: 'var(--color-text-light)',
    textMuted: 'var(--color-text-muted)',
    textHint: 'var(--color-text-hint)',
    joshPrimary: 'var(--color-josh-primary)',
    joshMuted: 'var(--color-josh-muted)',
    spacingXs: 'var(--spacing-xs)',
    spacingBase: 'var(--spacing-base)',
    spacingMd: 'var(--spacing-md)',
    spacingLg: 'var(--spacing-lg)',
    borderRadiusSmall: 'var(--border-radius-small)',
    borderRadiusMd: 'var(--border-radius-md)',
    borderRadiusLarge: 'var(--border-radius-large)',
    shadowXs: 'var(--shadow-xs)',
    shadowMd: 'var(--shadow-md)',
    shadowCard: 'var(--shadow-card)',
    active: '#22C55E',
    archived: '#EF4444'
};

export default thnTheme;