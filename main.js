import { createApp } from "vue/dist/vue.esm-bundler.js";
import "./src/assets/style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; 
import LessonsComponent from "./src/components/lessons-component.vue";
import IndexComponent from "./src/components/index-component.vue";
import TalesComponent from "./src/components/tales-component.vue";
import ContactComponent from "./src/components/contact-component.vue";
import termsComponent from "./src/components/terms-component.vue";
import LoginComponent from "./src/components/login-component.vue"
import { createI18n } from 'vue-i18n';
import en from './src/locales/lang_en.json'
import el from './src/locales/lang_el.json'


const vuetify = createVuetify({
  components,
  directives,
});

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "el", // set locale
  fallbackLocale: 'en', // set fallback locale
  messages:{en, el}
  // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const app = createApp({
  components: {
    LessonsComponent,
    TalesComponent,
    ContactComponent,
    IndexComponent,
    termsComponent,
    LoginComponent,
  },
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
      currentLanguage: "el"
    };
  },
  methods: {
    changeSite(site) {
      console.log(site);
      this.siteComponent = site;
    },
    changeLanguage() {
      console.log("i am in")
      i18n.locale = 'el'
      console.log(i18n.locale)
      this.$i18n.locale = 'el'
    }
  },
  watch: {
    currentLanguage() {
      this.$i18n.locale = this.currentLanguage
    }
  }
});

app.use(i18n)
app.use(vuetify)
app.mount("#app")


const toggleMenu = document.querySelector(".toggle-menu");
const navList = document.querySelector(".nav-list");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelectorAll("nav a");
const text = document.querySelector("#h3-text");


// h3 linear gradient 

const letters = text.innerHTML.split("");
for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  letters[i] = `<span class="letter">${letter}</span>`;
}

text.innerHTML = letters.join("");


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
    container.style.flexDirection = "column"

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

