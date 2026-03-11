import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(()=>{
    const savedTheme = localStorage.getItem("darkMode")
    return savedTheme === "true"
  });

  const toggleDark = () => setDark(!dark);

  useEffect(() => {
  const root = window.document.documentElement;
  if (dark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  localStorage.setItem("darkMode", dark);
}, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);