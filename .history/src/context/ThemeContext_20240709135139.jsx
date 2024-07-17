"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => { // changed Children to children
  const [theme, setTheme] = useState(getFromLocalStorage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
