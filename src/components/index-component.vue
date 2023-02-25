<template>
  <v-parallax :src="parallaxSrc">
    <p id="h1">{{ $t("t_index_header") }}</p>
  <div class="about-part">
      <img :src="meSrc" class="me-image" alt="Logo" />
    <h1 class="about-title">{{ $t("t_about_header") }}</h1>
    <hr />
    <p>{{ $t("t_index_about") }}</p>
  </div>

  <!--Timeline-->
    <v-timeline direction="vertical" side="end" class="index-timeline">
      <v-timeline-item
        v-for="item in items"
        :key="item.id"
        dot-color="var(--clr-purple)"
        size="small"
      >
        <v-alert
          class="index-alert"
          :value="true"
          color="var(--clr-lpink)"
          :text="$t(`t_tml_text_${item.id}`)"
          :title="$t(`t_tml_title_${item.id}`)"
        >
        </v-alert>
      </v-timeline-item>
    </v-timeline>
    <div class="d-flex flex-column justify-center align-center text-white instagram-container">
    <p id="h1">Tell Your Kid A Story</p>
      <iframe class="instagram-frame" src="https://www.instagram.com/p/Cmr7wmGL2vq/embed" frameborder="0"></iframe>
    </div>
  </v-parallax>
</template>
<script>
export default {
  name: "index-component",
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
      meSrc: "images/me.jpg",
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
