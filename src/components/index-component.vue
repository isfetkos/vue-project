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
        <v-timeline direction="vertical" side="end" class="index-timeline">
          <v-timeline-item
            v-for="item in items"
            :key="item.id"
            dot-color="var(--clr-purple)"
            size="small"
          >
            <v-alert class="index-alert"
              :value="true"
              color="var(--clr-lpink)"
              :text="item.text"
              :title="item.title"
              
            >
            </v-alert>
          </v-timeline-item>
        </v-timeline>
      </v-parallax>
</template>
<script>
export default { 
    name: "index-component", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg",
            meSrc:"images/me.jpg",  
      items: [
        {
          id: 1,
          text: "Στο Tell Your Kid A Story προσπαθούμε να ανακαλύψουμε τον φανταστικό κόσμο των παιδικών παραμυθιών. Κάντε κλικ εδώ για να μάθετε περισσότερα και να ταξιδέψετε μαζί μας. ",
          title: "Παραμύθια",
        },
        {
          id: 2,
          title: "Μαθήματα",
          text: "Ως λάτρης της ελληνικής γλώσσας και μακροχρόνια εκπαιδευτικός είχα τη χαρά να βλέπω και να συμβάλλω στην ανάπτυξη πολλών μαθητών μου. Βρείτε περισσότερες πληροφορίες για τη διδακτική μου φιλοσοφία εδώ.",
        },
        {
          id: 3,
          title: "Θέατρο",
          text: "'Λένε ότι το θέατρο είναι η τέχνη του βιώματος' - Μάθετε περισσότερα για την πλούσια θεατρική μας σκηνή στην Κρήτη κάνοντας κλικ εδώ"
        },
        {
          id: 4,
          title: "Πολιτιστικός Σύλλογος Πλατανιά",
          text: "Εκδρομές, εκδηλώσεις, τέχνες και διασκέδαση, στον Πολιτιστικό Σύλλογο του Πλατανιά προσπαθούμε καθημερινά να βάλουμε χρώμα στην καθημερινότητα μας.",
        },

      ],
    
        }
    }
    };
</script>
<style scoped></style>

