import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "vue-transitions-css";
Vue.use(Vuetify);
const opts = {
  rtl: localStorage.getItem('language') == 'AR',
  theme: {
    customProperties: true,
    themes: {
      light: {
        primary: "#333333",
        secondary: "#72a2d1",
      },
    },
  },
};

export default new Vuetify(opts);
