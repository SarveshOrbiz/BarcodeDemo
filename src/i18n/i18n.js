import i18n from 'i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng:"en",
    /*
    debug:true, //Console logs the translation.json after every toggle

    // Used to detect the user's preferred language from the browser.
    detection:{
        // The order of detection from sources.
        order:['queryString','cookie'],
        // Used to store the cookie.
        cache:['cookie']
    },

    // Used to determine whether special characters and HTML markups must be escaped or not.
     interpolation:{ 
        escapeValue:false, // By default React already does escaping.
    } 
    */
})

export default i18n;