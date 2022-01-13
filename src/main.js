import "./assets/style/main.scss";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
// Plugin
import VueScroll from "vuescroll";
// Install
Vue.use(VueScroll);
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "red",
  },
};
new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
