<template>
  <v-parallax :src="parallaxSrc">
    <p id="h3-text">Admin Login</p>
    <component :is="siteComponent"></component>
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
      <v-btn class="admin-btn" variant="tonal">Login</v-btn>
    </div>
      <p id="h4-text">{{ $t("t_easter") }}</p>
    
  </div>
  </div>
  </v-parallax>
</template>
<script>
export default {
  name: "login-component",
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
    };
  },
};
</script>
<style scoped></style>
