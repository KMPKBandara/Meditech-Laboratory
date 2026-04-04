"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../public/locales/en/common.json";
import si from "../public/locales/si/common.json";

const resources = {
  en: {
    translation: en,
  },
  si: {
    translation: si,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
