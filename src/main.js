import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//bootstrap
import "bootstrap";

//custom abd bootstrap css
import "./assets/app.scss";

import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";

// import "./assets/style.css";
// import "./assets/css/dark.css";
// import "./assets/css/font-icons.css";
// import "./assets/css/responsive.css";
// import "./assets/css/fonts.css";

Vue.component("Navbar", require("./components/Navbar.vue").default);

Vue.component("Hero", require("./components/Hero.vue").default);
Vue.component("Login", require("./components/Login.vue").default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
