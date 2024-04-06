import React, { createContext, useState } from "react";

const CurrentLanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const texts = {
    es: {
      text: "Hola, este es texto en español.",
      //   buttonText: "¡Haz clic!",
    },

    en: {
      text: "Hello, this is English text.",
      //   buttonText: "Click me!",
    },
  };

  return (
    <CurrentLanguageContext.Provider
      value={{ language, toggleLanguage, texts }}
    >
      {children}
    </CurrentLanguageContext.Provider>
  );
};

export { CurrentLanguageContext, LanguageProvider };
