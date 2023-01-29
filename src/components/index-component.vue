<template>
  <v-parallax :src="parallaxSrc">
    <p id="h3-text">{{ $t("t_index_header") }}</p>
    <div class="about-container1">
    <div class="about-container">
      <img :src="meSrc" class="me-image" alt="Logo" />   
        <p class="about-text">{{ $t("t_index_about") }}</p>
    </div>
  </div>

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
