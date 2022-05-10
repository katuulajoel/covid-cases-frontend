import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "assets/locales/en.json";

const resources = {
  en: enTranslations,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: false,
  saveMissing: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
