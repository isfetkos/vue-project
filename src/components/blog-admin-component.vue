<template>
    <v-parallax :src="parallaxSrc">
            <p id="h3-text">{{ $t("t_tales_header") }}</p>
            Components /
            Article Gallery v3
            
            Theme: 
            default
            Info page
            Framework: 
            No framework
            Copy:
            
            HTML
            
            CSS
            View code
            
            Download
            
            
            
            
            
            
            <section class="articles-v3">
              <div class="cd-container cd-max-width-adaptive-lg">
                <ul class="articles-v3__list-grid">
                  <li class="articles-v3__item-grid">
                    <a href="#0" class="articles-v3__img-wrapper">
                      <img src="img/article-gallery-v3-img-1.jpg" alt="Image description">
                    </a>
              
                    <div>
                      <h2 class="articles-v3__headline"><a href="#0">Strength does not come from winning</a></h2>
                      
                      <p class="articles-v3__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, fugit minus! Quisquam repellat, odio maxime velit temporibus eum dignissimos quae.</p>
              
                      <div class="articles-v3__author">
                        <a href="#0" class="articles-v3__author-img">
                          <img src="img/article-gallery-v3-author-img-1.jpg" alt="Author picture">
                        </a>
                  
                        <div class="articles-v3__author-info">
                          <p><a href="#0" class="articles-v3__author-name" rel="author">Olivia Gribben</a></p>
                          <p class="articles-v3__date"><time>Oct 4, 2050</time>, &mdash; 5 min read</p>
                        </div>
                      </div>
                    </div>
                  </li>
            
                  <li class="articles-v3__item-grid">
                    <a href="#0" class="articles-v3__img-wrapper">
                      <img src="img/article-gallery-v3-img-1.jpg" alt="Image description">
                    </a>
              
                    <div>
                      <h2 class="articles-v3__headline"><a href="#0">Pills and potions</a></h2>
                      
                      <p class="articles-v3__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor labore, nobis impedit alias sint consequuntur sed! Excepturi delectus voluptatum laboriosam recusandae eaque ex cupiditate facilis. Autem, labore cumque. Provident beatae perferendis aperiam.</p>
              
                      <div class="articles-v3__author">
                        <a href="#0" class="articles-v3__author-img">
                          <img src="img/article-gallery-v3-author-img-1.jpg" alt="Author picture">
                        </a>
                  
                        <div class="articles-v3__author-info">
                          <p><a href="#0" class="articles-v3__author-name" rel="author">Olivia Gribben</a></p>
                          <p class="articles-v3__date"><time>Oct 4, 2050</time>, &mdash; 5 min read</p>
                        </div>
                      </div>
                    </div>
                  </li>
            
                  <li class="articles-v3__item-grid">
                    <a href="#0" class="articles-v3__img-wrapper">
                      <img src="img/article-gallery-v3-img-1.jpg" alt="Image description">
                    </a>
              
                    <div>
                      <h2 class="articles-v3__headline"><a href="#0">I can’t possibly be beat</a></h2>
                      
                      <p class="articles-v3__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nihil rem aliquid perferendis delectus in esse praesentium necessitatibus rerum consectetur!</p>
              
                      <div class="articles-v3__author">
                        <a href="#0" class="articles-v3__author-img">
                          <img src="img/article-gallery-v3-author-img-1.jpg" alt="Author picture">
                        </a>
                  
                        <div class="articles-v3__author-info">
                          <p><a href="#0" class="articles-v3__author-name" rel="author">Olivia Gribben</a></p>
                          <p class="articles-v3__date"><time>Oct 4, 2050</time>, &mdash; 5 min read</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            
            Copy HTML
      </v-parallax>
</template>
<script>
export default { 
    name: "blogAdminCompoment", 
    data() {
        return {
            parallaxSrc:"images/bitmap.svg"
        }
    }
    };
</script>

<style scoped></style>
