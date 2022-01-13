import Vue from "vue";
import VueI18n from "vue-i18n";
import AR from "./i18n/ar";
import EN from "./i18n/en";
Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("language") || "EN",
  fallbackLocale: "EN",
  messages: {
    EN: EN,
    AR: AR,
  },
});
