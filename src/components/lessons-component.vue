<template>
    <v-parallax :src="parallaxSrc">
        <p id="h3-text">Προγράμματα</p>
      <div class="children">
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon
          class="icon-btn lessons-icons"
          color="var(--clr-lpink)"
        >mdi-rocket-launch</v-icon>
        </span>
        <h1 class="lesson-title">Μαθήματα Δημοτικού και Γυμνασίου</h1>
        <hr />
        <p> Μαθήματα με επίκεντρο στην χρήση της ελληνικής γλώσσας για μαθητές δημοτικού και γυμνασίου. Πέρα από την υποστήριξη σε σημαντικά μαθήματα όπως ελληνικά, ιστορία ή κείμενα δίνεται ιδιαίτερη έμφαση στην χρήση της γλώσσας, την επιχειρηματολογία και τις γενικές γνώσεις. </p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon
          class="icon-btn lessons-icons"
          color="var(--clr-lpink)"
        >mdi-book-open-page-variant</v-icon>
        </span>
        <h1 class="lesson-title">Προετοιμασία πανελλαδικών εξετάσεων</h1>
        <hr />
        <p> Μαθήματα με επίκεντρο στην χρήση της ελληνικής γλώσσας για μαθητές δημοτικού και γυμνασίου. Πέρα από την υποστήριξη σε σημαντικά μαθήματα όπως ελληνικά, ιστορία ή κείμενα δίνεται ιδιαίτερη έμφαση στην χρήση της γλώσσας, την επιχειρηματολογία και τις γενικές γνώσεις. </p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon
          class="icon-btn lessons-icons"
          color="var(--clr-lpink)"
        >mdi-school</v-icon>
      </span>
        <h1 class="lesson-title">Μαθήματα καθηγητών</h1>
        <hr />
        <p> Μαθήματα με επίκεντρο στην χρήση της ελληνικής γλώσσας για μαθητές δημοτικού και γυμνασίου. Πέρα από την υποστήριξη σε σημαντικά μαθήματα όπως ελληνικά, ιστορία ή κείμενα δίνεται ιδιαίτερη έμφαση στην χρήση της γλώσσας, την επιχειρηματολογία και τις γενικές γνώσεις. </p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
    </div>
    <div class="location">
      <h1 id="h3-text">Τo γραφείο</h1>
        <iframe id="gmap" src="https://maps.google.com/maps?q=platanias,%20chania&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
  </div> 
  </v-parallax>
</template>
<script>
export default { 
    name: "lessons-component", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg"
        }
    }
    };
</script>
<style scoped></style>
