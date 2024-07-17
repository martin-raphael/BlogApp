"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProviders = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  
    return <div className={theme}>{children}</div>;
 
};

export default ThemeProviders;
