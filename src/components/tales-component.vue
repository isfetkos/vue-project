<template>
    <v-parallax :src="parallaxSrc">
        <div class="d-flex flex-column justify-center align-center text-white instagram-container">
            <p id="h3-text">{{ $t("t_tales_header") }}</p>
            <iframe class="instagram-frame" src="https://www.instagram.com/p/Cmr7wmGL2vq/embed" frameborder="0"></iframe>
          </div>
      </v-parallax>
</template>
<script>
export default { 
    name: "tales-component", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg"
        }
    }
    };
</script>
<style scoped></style>
