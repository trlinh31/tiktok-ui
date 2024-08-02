import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "@/locales/en.json";
import vnTranslation from "@/locales/vn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    vn: {
      translation: vnTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
