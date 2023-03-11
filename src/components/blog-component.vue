<template>
  <v-parallax :src="parallaxSrc">
    <p class="hh1">{{ $t("t_blog_header") }}</p>
    <div class="blog-container">
      <v-card width="344">
        <v-img
          src="https://images.unsplash.com/photo-1533561304446-88a43deb6229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          height="350px"
          cover
        ></v-img>

        <v-card-title> My favorite books of the month </v-card-title>

        <v-card-subtitle> New concepts! </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show1 = !show1"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show1">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
              
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card width="344">
        <v-img
          src="https://images.unsplash.com/photo-1502465771179-51f3535da42c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          height="350px"
          cover
        ></v-img>

        <v-card-title> How to learn fast </v-card-title>

        <v-card-subtitle> Are 8 hours too much? </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show2 = !show2"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show2">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card width="344">
        <v-img
          src="https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          height="350px"
          cover
        ></v-img>

        <v-card-title> Theater in Crete </v-card-title>

        <v-card-subtitle> So much talent </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :icon="show3 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show3 = !show3"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show3">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </v-parallax>
</template>
<script>
export default {
  name: "blog-component",
  data() {
    return {
      parallaxSrc: "images/bitmap.svg",
      show1: false,
      show2: false,
      show3: false,
    };
  },
};
</script>
<style scoped></style>
