import React, { useContext } from "react";
import { CurrentLanguageContext } from "./CurrentLanguageContext";

const Content = () => {
  const { language, texts } = useContext(CurrentLanguageContext);

  return (
    <div>
      <p>{texts[language].text}</p>
    </div>
  );
};

export default Content;
