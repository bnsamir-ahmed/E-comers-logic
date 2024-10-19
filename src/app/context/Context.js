"use client";

import { createContext, useState } from "react";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
// import I18NextHttpBackend from "i18next-http-backend";

// i18n
//   .use(initReactI18next)
//   .use(I18nextBrowserLanguageDetector)
//   .use(I18NextHttpBackend) // passes i18n down to react-i18next
//   .init({
//     fallbackLng: "en",
//     detection: {
//       order: [
//         "querystring",
//         "cookie",
//         "localStorage",
//         "sessionStorage",
//         "navigator",
//         "htmlTag",
//         "path",
//         "subdomain",
//       ],
//       caches: ["localStorage", "cookie"],
//     },
//     backend: {
//       loadPath: "/locales/{{lng}}/translation.json",
//     },

//   });
const langContext = createContext();
export const ProviderContext = ({ children }) => {
  const [language, setLanguage] = useState("en");
  return (

      <langContext.Provider value={{ language }}>
        {children}
      </langContext.Provider>
  
  );
};
export default langContext;
