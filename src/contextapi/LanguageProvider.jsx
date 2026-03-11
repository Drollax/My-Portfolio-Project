import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isTurkish, setIsTurkish] = useState(true); // default language

  const toggleLanguage = () => setIsTurkish((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isTurkish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);