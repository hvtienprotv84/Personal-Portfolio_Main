import React, { useState, useEffect, createContext } from 'react';
import { languageOptions, dictionaryList } from '../languages';

// Tạo context cho ngôn ngữ
export const LanguageContext = createContext({
  userLanguage: 'vn',
  dictionary: dictionaryList.vn,
  userLanguageChange: () => {} // Thêm giá trị mặc định cho hàm đổi ngôn ngữ
});

// Cung cấp context ngôn ngữ cho ứng dụng
export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('vn');
  const [dictionary, setDictionary] = useState(dictionaryList.vn);

  useEffect(() => {
    // Code này chỉ chạy trên client-side
    const defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (defaultLanguage) {
      setUserLanguage(defaultLanguage);
      setDictionary(dictionaryList[defaultLanguage]);
    }
  }, []);

  const userLanguageChange = (selected) => { 
    setUserLanguage(selected);
    setDictionary(dictionaryList[selected]);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('rcml-lang', selected);
    }
  };

  const provider = {
    userLanguage,
    dictionary,
    userLanguageChange
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
// import { createContext } from 'react';
// import { languageOptions, dictionaryList } from '../languages';
// // create the language context with default selected language
// export const LanguageContext = createContext({
//   userLanguage: 'vn',
//   dictionary: dictionaryList.vn
// });

// // it provides the language context to app
// export function LanguageProvider({ children }) {
//   const defaultLanguage = window.localStorage.getItem('rcml-lang');
//   const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'vn');
//   const provider = {
//     userLanguage,
//     dictionary: dictionaryList[userLanguage],
//     userLanguageChange: (selected) => {
//       setUserLanguage(selected);
//       window.localStorage.setItem('rcml-lang', selected);
//     }
//   };
//   return (
//     <LanguageContext.Provider value={provider}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };