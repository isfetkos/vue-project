<template>
  <v-parallax :src="parallaxSrc">
    <p class="hh1">{{$t("t_contact_header")}}</p>
  
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
              :label="this.$t(`t_contact_name`)"
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
              :label="this.$t(`t_contact_surname`)"
              color="var(--clr-white)"
              bg-color="var(--clr-pink)"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              w-50
              class="contact"
              type="email"
              :rules="emailRules"
              name="user-email"
              :label="this.$t(`t_contact_email`)"
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
              :label="this.$t(`t_contact_message`)"
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
          <v-card class="card-submit" color="var(--clr-pink)">
            <p id="h2-letter">{{$t("t_contact_header3")}}</p>
            <div class="letter-container">
              <div class="letter-image">
                <div class="animated-mail">
                  <div class="back-fold"></div>
                  <div class="letter">
                    <div class="letter-border"></div>
                    <div class="letter-title"></div>
                    <div class="letter-context"></div>
                    <div class="letter-stamp">
                      <div class="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div class="top-fold"></div>
                  <div class="body"></div>
                  <div class="left-fold"></div>
                </div>
                <div class="shadow"></div>
              </div>
            </div>
          </v-card>
        </v-overlay>
        </v-btn>
      </div>
    </form>
    <div class="location">
      <p class="hh1">{{$t("t_contact_header2")}}</p>
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
