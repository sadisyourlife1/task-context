import { createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactNode }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
