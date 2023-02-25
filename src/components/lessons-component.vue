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
    <p id="h1">Για τους νεαρούς μου μαθητές</p>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item>
        <v-sheet color="rgba(0,0,0,0)" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h5"> Η γλώσσα είναι ένα εργαλείο </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet color="rgba(0,0,0,0)" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h5"> Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet color="rgba(0,0,0,0)" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h5"> Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-parallax>
</template>
<script>
export default {
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
    };
  },
};
</script>
<style scoped></style>
