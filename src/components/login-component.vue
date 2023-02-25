<template>
  <v-parallax :src="parallaxSrc">
    <p id="h1">Admin Login</p>
          <router-link to="/blogAdmin">
          <div class="center-container">
            <v-btn
            class="button-hover"
            variant="outlined"
            bg-color="var(--clr-pink)"
            size="large"
           @click="login">Log in</v-btn>
            </div>
          </router-link>
        <p class="about-title">{{ $t("t_easter") }}</p>
  </v-parallax>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "login-component",
  setup() {
    const auth0 = useAuth0();
    return {
      parallaxSrc: "images/bitmap.svg",
      login() {
        auth0.loginWithRedirect();
      },
    };
  },
};
</script>
<style scoped></style>

type="button"
id="btn-signup"
classs="btn btn-default btn-block">
Sign up
