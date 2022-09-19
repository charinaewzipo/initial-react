import { createContext, useState } from "react";
const themes = {
  blue: {
    background: "blue",
    color: "white",
  },
  red: {
    background: "red",
    color: "black",
  },
};
export const ThemeContext = createContext(themes.blue);
export function ThemeProvider({ children }) {
  // const [theme, setTheme] = useState("blue");
  const [darkmode, setDarkMode] = useState(true);
  const themeProviderData = {
    darkmode,
    theme: darkmode ? themes.blue : themes.red,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeProviderData}>
      {children}
    </ThemeContext.Provider>
  );
}
