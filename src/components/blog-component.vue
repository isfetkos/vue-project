<template>
    <v-parallax :src="parallaxSrc">
            <p id="h3-text">{{ $t("t_blog_header") }}</p>
            <transition-group tag="ul" class="blog__feed" name="preview">
                <li v-for="post in feed" :class="classes" :key="post.id">
                  <router-link :to="`/read/${post.id}`">
                    <figure class="preview__figure">
                      <img :src="post.image"/>
            
                      <transition name="fade">
                        <figcaption v-if="!reading" class="preview__title">
                            {{ post.title }}
                        </figcaption>
                      </transition>
                    </figure>
                  </router-link>
            
                  <transition name="fade">
                    <aside v-if="!reading" class="preview__details">
                      <h5 class="preview__meta">
                        <router-link class="preview__author"
                          :to="`/by/${ kebabify(post.author) }`"
                          @click.native="scrollTo(0)">
                          {{ post.author }}
                        </router-link>
            
                        <time class="preview__published">
                            {{ prettyDate(post.published) }}
                        </time>
                      </h5>
                    </aside>
                  </transition>
                </li>
              </transition-group>
      </v-parallax>
</template>
<script>
export default { 
    name: "blog-component", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg"
        }
    }
    };
</script>
<style scoped></style>
