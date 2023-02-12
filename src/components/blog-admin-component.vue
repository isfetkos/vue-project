<template>
    <v-parallax :src="parallaxSrc">
            <p id="h3-text">{{ $t("t_adminblog_header") }}</p>
            <div class="admin-container">
            <v-textarea rows="1" label="Title"></v-textarea>
            <v-textarea auto-grow label="Label"></v-textarea>
            <v-file-input label="File input"></v-file-input>
            <v-btn class="admin-btn" variant="tonal">Submit</v-btn>
            </div>
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
