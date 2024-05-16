import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState.tsx";

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
        window.matchMedia("(prefers-color-scheme: dark)").matches,
        "isDarkMode"
    );

    useEffect(() => {
        const classList = document.documentElement.classList;
        if (isDarkMode) {
            classList.add("dark-mode");
            classList.remove("light-mode");
        } else {
            classList.add("light-mode");
            classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode((isDark: boolean) => !isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
}

export { DarkModeProvider, useDarkMode };
