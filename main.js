import { createApp } from "vue/dist/vue.esm-bundler.js";
import "./src/assets/style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { createRouter, createWebHistory } from "vue-router";
import { createAuth0 } from '@auth0/auth0-vue';
import { authGuard } from "@auth0/auth0-vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import LessonsComponent from "./src/components/lessons-component.vue";
import IndexComponent from "./src/components/index-component.vue";
import blogComponent from "./src/components/blog-component.vue";
import ContactComponent from "./src/components/contact-component.vue";
import termsComponent from "./src/components/terms-component.vue";
import LoginComponent from "./src/components/login-component.vue";
import blogAdminComponent from "./src/components/blog-admin-component.vue";
import NotFoundComponent from "./src/components/not-found-component.vue";
import profile from "./src/components/profile.vue";
import { createI18n } from "vue-i18n";
import en from "./src/locales/lang_en.json";
import el from "./src/locales/lang_el.json";

const vuetify = createVuetify({
  components,
  directives,
});

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
    { path: "/", component: IndexComponent },
    { path: "/lessons", component: LessonsComponent },
    { path: "/blog", component: blogComponent },
    { path: "/contact", component: ContactComponent },
    { path: "/login", component: LoginComponent },
    { path: "/blogAdmin", component: blogAdminComponent, beforeEnter: authGuard, },
    { path: "/terms", component: termsComponent },
    { path: "/profile", component: profile },
    { path: '/:catchAll(.*)', component: NotFoundComponent }, // this route should be defined last

  ],
});

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "el", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: { en, el },
  // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const app = createApp({
  data() {
    return {
      siteComponent: "IndexComponent",
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      currentLanguage: "el",
    };
  },
  methods: {
    changeLanguage() {
      console.log("i am in");
      i18n.locale = "el";
      console.log(i18n.locale);
      this.$i18n.locale = "el";
    },
  },
  watch: {
    currentLanguage() {
      this.$i18n.locale = this.currentLanguage;
    },
  },
});

app.use(
  createAuth0({
    domain: "dev-4cav1l5curg7fa3a.us.auth0.com",
    clientId: "J3CZuHdqEeXWRQEZu4BDsBbHWbRURkEc",
    authorizationParams: {
      redirect_uri: '${window.location.origin}/blogAdmin'
    }
  })
);
app.use(router);
app.use(i18n);
app.use(vuetify);
app.mount("#app");

const toggleMenu = document.querySelector(".toggle-menu");
const navList = document.querySelector(".nav-list");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to the toggle button
toggleMenu.addEventListener("click", function () {
  // Toggle the display property of the nav list
  if (navList.style.display === "flex") {
    navList.style.display = "none";
    logo.style.display = "block";
    navList.style.flexDirection = "row";
  } else {
    navList.style.display = "flex";
    navList.style.flexDirection = "column";
    container.style.flexDirection = "column";
  }
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("collapsed");
});

// Add an event listener to the window
window.addEventListener("resize", function () {
  // Check the width of the window
  if (window.innerWidth > 1000) {
    // If the width is greater than 780 pixels, show the nav list
    navList.style.display = "flex";
    container.style.flexDirection = "row";
    navList.style.flexDirection = "row";
    logo.style.display = "block";
  } else {
    // If the width is less than or equal to 480 pixels, hide the nav list
    navList.style.display = "none";
  }
});

// Change windows when clicking to each section

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = event.target.href;
    window.location.assign(event.target.href);
  });
});
