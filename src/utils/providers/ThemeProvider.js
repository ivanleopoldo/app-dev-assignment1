import { ThemeContext } from "../contexts";
import { useState } from "react";
import { Colors } from "../../config/colors";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Colors.dark);
  const [key, setKey] = useState("dark");
  const switchTheme = () => {
    setTheme((curr) => (curr === Colors.dark ? Colors.light : Colors.dark));
    setKey((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, key, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
