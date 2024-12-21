import React, { createContext, useContext, useEffct, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, seTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );
};