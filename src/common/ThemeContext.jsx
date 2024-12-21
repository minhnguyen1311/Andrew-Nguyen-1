import React, { createContext, useContext, useEffct, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffct(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
};