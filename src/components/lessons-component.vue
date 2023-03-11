<template>
  <v-parallax :src="parallaxSrc">
    <p class="hh1">{{ $t("t_lesson_header") }}</p>
    <div class="children">
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon class="icon-btn lessons-icons" color="var(--clr-lpink)">mdi-rocket-launch</v-icon>
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header1") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text1") }}</p>
        <a href="#kids" class="product__btn btn">{{ $t("t_lesson_button") }}</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon class="icon-btn lessons-icons" color="var(--clr-lpink)">mdi-book-open-page-variant</v-icon>
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header2") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text2") }}</p>
        <a href="#student" class="product__btn btn">{{ $t("t_lesson_button") }}</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon class="icon-btn lessons-icons" color="var(--clr-lpink)">mdi-school</v-icon>
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header3") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text3") }}</p>
        <a href="#teacher" class="product__btn btn">{{ $t("t_lesson_button") }}</a>
      </div>
    </div>
    <!-- Carousel -->
    <div class="carousel-margin">
      <p class="hh1" id="kids">{{ $t("t_lesson_header_kids") }}</p>
      <v-carousel hide-delimiters progress="#8d629c">
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_kids2") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_book_lover_re_rwjy.svg" />
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_kids3") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_online_learning_re_qw08.svg" />
          </div>
        </v-carousel-item>
        <v-carousel-item>

          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_kids1") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_doll_play_evbw.svg" />
          </div>
        </v-carousel-item>
      </v-carousel>
      <p class="hh1" id="student">{{ $t("t_lesson_header_students") }}</p>
      <v-carousel hide-delimiters progress="#8d629c">
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_student1") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_career_progress_ivdb.svg" />
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_student2") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_teamwork_hpdk.svg" />
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_student3") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_my_files_swob.svg" />
          </div>
        </v-carousel-item>
      </v-carousel>
      <p class="hh1" id="teacher">{{ $t("t_lesson_header_teacher") }}</p>
      <v-carousel hide-delimiters progress="#8d629c">
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_teacher1") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_in_no_time_-6-igu.svg" />
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_teacher2") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_teaching_re_g7e3.svg" />
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="carousel-text-field">
            <p class="carousel-title">{{ $t("t_lesson_teacher3") }}</p>
            <hr>
            <img class="img-lessons" src="/images/undraw_innovative_re_rr5i.svg" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>

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
