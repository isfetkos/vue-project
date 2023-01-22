<template>
  <v-parallax :src="parallaxSrc">
    <p id="h3-text">Επικοινωνία</p>

    <form ref="form" @submit.prevent="sendEmail">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              class="contact"
              type="text"
              :rules="nameRules"
              :counter="10"
              name="user_name"
              label="Το μικρό σου"
              variant="outlined"
              color="var(--clr-white)"
              bg-color="var(--clr-pink)"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              class="contact"
              type="text"
              :rules="nameRules"
              :counter="10"
              name="user_name1"
              label="Το επίθετο σου"
              color="var(--clr-white)"
              bg-color="var(--clr-pink)"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              class="contact"
              type="email"
              :rules="emailRules"
              name="user-email"
              label="Το E-mail σου"
              variant="outlined"
              color="var(--clr-white)"
              bg-color="var(--clr-pink)"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea
              class="contact"
              color="var(--clr-white)"
              variant="outlined"
              bg-color="var(--clr-pink)"
              name="message"
              label="Το μήνυμά σου"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <div
        class="d-flex flex-column justify-center align-center button-contact"
      >
        <v-btn
          class="button-hover"
          variant="outlined"
          bg-color="var(--clr-pink)"
          size="large"
        >
          <v-icon
            class="icon-btn"
            color="var(--clr-gray)"
            icon="mdi-checkbox-marked-circle"
          ></v-icon
          ><input type="submit" value="Send" />
          <v-overlay
          activator="parent"
          location-strategy="connected"
          scroll-strategy="none"
        >
          <v-card class="pa-5" color="var(--clr-purple)">
            ❤ Σε ευχαριστώ πολύ για το μήνυμά σου ❤ 
          </v-card>
        </v-overlay>
        </v-btn>
      </div>
    </form>
    <div class="location">
      <h1 id="h3-text">Τo γραφείο</h1>
        <iframe id="gmap" src="https://maps.google.com/maps?q=platanias,%20chania&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
  </div> 
  </v-parallax>
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  name: "contact-component",
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_1utjm6j123",
          "template_3txq4fm",
          this.$refs.form,
          "5Hd2nYrMoYQlJSgcH"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
<style scoped></style>
