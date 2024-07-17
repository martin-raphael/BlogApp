"use client";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ Children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  return <ThemeContext.Provider value={theme}>{Children}</ThemeContext.Provider>;
};
