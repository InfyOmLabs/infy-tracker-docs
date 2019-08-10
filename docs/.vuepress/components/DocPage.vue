<template>
  <div class="home">
    <div class="home__container">
      <img :src="$withBase('/assets/img/'+data.heroImage+'.jpg')" :alt="data.heroImage" class="home__hero-img">
      <div class="home__header-row">
        <div class="d-flex item-center">
        <img :src="$withBase(`/assets/img/${data.timerLogoImg}.png`)" :alt="data.timerLogoImg"
             :title="data.timerLogoImg" class="home__header-logo"/>
        <h1 class="text-center">{{data.header}}</h1>
        </div>
        <p class="home__title-desc text-center">{{data.description}}</p>
      </div>
    </div>
    <div class="home__feature-container">
      <h2 class="text-center home__feature-title">Features</h2>
      <div class="home__feature-row" v-for="item in data.feature">
        <div class="home__feature-thumb">
          <img :src="$withBase(`/assets/img/${item.img}.${item.type}`)" :alt="item.img" class="home__feature-img"
               :title="item.img" />
        </div>
        <div class="home__feature-detail">
          <h3 class="home__feature-heading">{{item.heading}}</h3>
          <p class="home__feature-desc">{{item.description}}</p>
        </div>
      </div>
      <!-- todo slider-->
<!--      <div class="home__slider">-->
<!--        <hooper :autoPlay="true" :playSpeed="3000">-->
<!--          <slide v-for="(slide, index) in data.sliderImages" :key="indx" :index="index">-->
<!--            <img :src="$withBase(`/assets/img/${slide.img}+.${slide.type}`)" :alt="slide.img" class="img-fluid" :title="slide.img">-->
<!--            <h1>111</h1>-->
<!--          </slide>-->
<!--          <hooper-navigation slot="hooper-addons"></hooper-navigation>-->
<!--          <hooper-pagination slot="hooper-addons"></hooper-pagination>-->
<!--          <hooper-progress slot="hooper-addons"></hooper-progress>-->
<!--        </hooper>-->
<!--      </div>-->
      <div class="text-center">
        <router-link :to="data.actionLink" class="home__btn">{{data.actionText}}</router-link>
      </div>
    </div>
    <footer class="footer" v-if="data.footer">
      © 2015-{{ new Date().getFullYear() }} {{ data.footer }}.
    </footer>
  </div>
</template>

<script>
    import {
        Hooper,
        Slide, Navigation as HooperNavigation,
        Pagination as HooperPagination,
        Progress as HooperProgress
    } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination,
      HooperProgress
    },

    computed: {
      data() {
        return this.$page.frontmatter;
      }
    }
  };
</script>
