<template>
    <v-parallax :src="parallaxSrc">
        <p id="h3-text">{{ $t("t_lesson_header") }}</p>
      <div class="children">
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon
          class="icon-btn lessons-icons"
          color="var(--clr-lpink)"
        >mdi-rocket-launch</v-icon>
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header1") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text1") }}</p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon
          class="icon-btn lessons-icons"
          color="var(--clr-lpink)"
        >mdi-book-open-page-variant</v-icon>
        </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header2") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text2") }}</p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
      <div class="lesson-part">
        <span class="lesson-circle">
          <v-icon
          class="icon-btn lessons-icons"
          color="var(--clr-lpink)"
        >mdi-school</v-icon>
      </span>
        <h1 class="lesson-title">{{ $t("t_lesson_header3") }}</h1>
        <hr />
        <p>{{ $t("t_lesson_text3") }}</p>
        <a href="#" class="product__btn btn">Μάθε περισσοτερα</a>
      </div>
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
