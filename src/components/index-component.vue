<template>
    <v-parallax :src="parallaxSrc">
        <p id="h3-text">Η ιστορία μου</p>
        <div class="about-container">
          <img :src="meSrc" class="me-image" alt="Logo">
          <div class="about-text">
            <p>Καλώς ήρθατε στην ιστοσελίδα μου, αγαπητοί μου φίλοι. Είμαι ενθουσιασμένη να γνωρίσω νέους ανθρώπους
              που
              μοιράζονται τα ενδιαφέροντά μου. Ποια είναι αυτά;
              Η πλούσια γλώσσα μας και τα καταπληκτικά έργα που γίνονται με αυτήν.
              Βιβλία, παραμύθια, έργα τέχνης και πολλά άλλα.
              .</p>
          </div>
        </div>
      </v-parallax>
</template>
<script>
export default { 
    name: "index-component", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg",
            meSrc:"images/me.jpg"
        }
    }
    };
</script>
<style scoped></style>
