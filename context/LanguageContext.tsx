import React, {createContext, ReactNode, useState} from "react";

export type LanguageType = 'en' | 'he' | 'ru';
type LanguageContextType = {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
};
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
})

export const LanguageContextProvider = ({ children }: {children: ReactNode}) => {
  const [language, setLanguage] = useState<LanguageType>('en');

  return (
  <LanguageContext.Provider value={{ language, setLanguage }}>
    {children}
  </LanguageContext.Provider>
);
};
