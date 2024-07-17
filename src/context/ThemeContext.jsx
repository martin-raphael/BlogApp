"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // default value if window is undefined
};

export const ThemeContextProvider = ({ children }) => { // changed Children to children
  const [theme, setTheme] = useState(getFromLocalStorage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);


  const toggle = ()=>{
    setTheme(theme==="light"?"dark":"light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
