import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ru from "./ru.json";
import fr from "./fr.json";
import de from "./de.json";
import pl from "./pl.json";
import es from "./es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: "ru",
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
      fr: {
        translation: fr,
      },
      de: {
        translation: de,
      },
      pl: {
        translation: pl,
      },
      es: {
        translation: es,
      },
    },
  });

export default i18n;
