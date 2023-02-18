<template>
  <v-parallax :src="parallaxSrc">
    <p id="h3-text">Admin Login</p>
    <div class="login-container">
    <div class="v_card">
      <v-text-field
        class="v_text"
        label="Username"
        type="name"
      ></v-text-field>
      <v-text-field
        class="v_text"
        label="Password"
        type="password"
      ></v-text-field>
      <div class="login-container2">
      <router-link to="/blogAdmin">    
      <!-- <v-btn @click="login" class="admin-btn" variant="tonal">Login</v-btn> -->
      <div>
        <button @click="login">Log in</button>
      </div>
    </router-link>
    </div>
      <p id="h5-text">{{ $t("t_easter") }}</p>
  </div>
  </div>
  </v-parallax>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue';
export default {
  name: "login-component",
setup() {
      const { loginWithRedirect } = useAuth0();

      return {
        parallaxSrc: "images/bitmap.svg",
        login: () => {
        loginWithRedirect();
         }
      };
    }
  };
</script>
<style scoped></style>
