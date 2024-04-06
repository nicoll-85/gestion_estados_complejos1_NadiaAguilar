import React, { useContext } from "react";
import { CurrentLanguageContext } from "./CurrentLanguageContext";

const Header = () => {
  const { toggleLanguage } = useContext(CurrentLanguageContext);

  return (
    <header>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </header>
  );
};

export default Header;
