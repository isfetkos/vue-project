<template>
    <v-parallax :src="parallaxSrc">
        <p id="h3-text">Admin Login</p>
  </v-parallax>
</template>
<script>
export default { 
    name: "login-component", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg"
        }
    }
    };
</script>
<style scoped></style>
