<template>
  <v-parallax :src="parallaxSrc">
    <p id="h1">{{ $t("t_error") }}</p>
    <div class="center-container">
    <img class="error-gif"
      src="https://media1.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif?cid=ecf05e47ndoejtfzmlbn8457y21dw9uh202kgb0tjywd48tz&rid=giphy.gif&ct=g"
    >
</div>
  </v-parallax>
</template>
<script>
export default {
  name: "not-found-component",
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
    };
  },
};
</script>
<style scoped></style>
