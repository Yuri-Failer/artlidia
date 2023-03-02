import React from 'react';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguage('ru');
  };

  return (
    <div>
      <button className="m-3 outline-4 outline-amber-700 out" type="button" onClick={handleChange} value="ru">RU</button>
      {/*<p>Value: {language}</p>*/}
    </div>
  );
}

export default LanguageSwitcher;
