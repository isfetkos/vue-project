<template>
    <v-parallax :src="parallaxSrc">
            <p id="h3-text">{{ $t("t_tales_header") }}</p>
           
      </v-parallax>
</template>
<script>
export default { 
    name: "blogAdminCompoment", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg"
        }
    }
    };
</script>

<style scoped></style> 
