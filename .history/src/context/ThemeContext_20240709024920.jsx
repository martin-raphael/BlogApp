import { Children, createContext } from "react";

export default ThemeContext = createContext();

export const ThemeContextProvider = ({ Children }) => {
  return <ThemeContext.Provider>{Children}</ThemeContext.Provider>;
};
