<template>
  <v-parallax :src="parallaxSrc">
    <p id="h1">{{ $t("t_lesson_header") }}</p>
    <div class="children">
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon class="icon-btn lessons-icons" color="var(--clr-lpink)"
            >mdi-rocket-launch</v-icon
          >
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header1") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text1") }}</p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon class="icon-btn lessons-icons" color="var(--clr-lpink)"
            >mdi-book-open-page-variant</v-icon
          >
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header2") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text2") }}</p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon class="icon-btn lessons-icons" color="var(--clr-lpink)"
            >mdi-school</v-icon
          >
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header3") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text3") }}</p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
    </div>
    <p id="h1">Για τα νέα ταλέντα</p>
    <v-carousel height="600" hide-delimiters progress="primary">
      <v-carousel-item>
        <div class="carousel-container">
          <div class="carousel-text-field">
            <p class="carousel-title">Γνώση με παιχνίδι</p>
            <hr>
          
          <img class="img-lessons" src="/images/undraw_doll_play_evbw.svg" />
        </div>
      </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="carousel-container">
          <img class="img-lessons" src="/images/undraw_online_learning_re_qw08.svg" />
        </div>
      </v-carousel-item>
    </v-carousel>
    <p id="h1">Λίγο πριν το πανεπιστήμειο</p>
    <img class="img-lessons" src="/images/undraw_education_f8ru.svg" />
    <p id="h1">Θα βρεις τον δάσκαλο σου..</p>
    <img class="img-lessons" src="/images/undraw_professor_re_mj1s.svg" />
  </v-parallax>
</template>
<script>
export default {
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
      lesson1: "images/undraw_online_learning_re_qw08.svg",
    };
  },
};
</script>
<style scoped></style>
