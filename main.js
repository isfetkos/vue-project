import { createApp } from "vue/dist/vue.esm-bundler.js";
import "./src/assets/style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import LessonsComponent from "./src/components/lessons-component.vue"
import IndexComponent from "./src/components/index-component.vue"
import TalesComponent from "./src/components/tales-component.vue"
import ContactComponent from "./src/components/contact-component.vue"


const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp({
  components: {
    LessonsComponent,
    TalesComponent,
    ContactComponent, 
    IndexComponent
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
    };
  },
  methods: {
    changeSite(site) {
      console.log(site)
      this.siteComponent=site
    }
  },
});

app.use(vuetify);
app.mount("#main");

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
    logo.style.display = "none";
    navList.style.flexDirection = "column";
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
