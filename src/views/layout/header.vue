<template>
  <div class="header">
    <swiper :options="swiperOption">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <swiper-slide class="slide-6"></swiper-slide>
      <swiper-slide class="slide-7"></swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
    </swiper>
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          @click="$router.push(item.path)"
        >
          <sy-icon class="db" :name="item.icon"></sy-icon>
          <div :class="{ active: item.path === $route.path }">
            {{ item.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import syIcon from '@/components/sy-icon/index.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      navList: [
        {
          label: '家',
          path: '/index',
          icon: '#iconhome'
        },
        {
          label: '挑战',
          path: '/challage/index',
          icon: '#iconhot-air-balloon'
        },
        {
          label: '照片',
          path: '/photo/index',
          icon: '#iconpictures'
        },
        {
          label: '喵柴',
          path: '/cat/index',
          icon: '#iconcat'
        },
        {
          label: '美食',
          path: '/food/index',
          icon: '#icondinner'
        },
        {
          label: '书影',
          path: '/book/index',
          icon: '#iconfilm-strip'
        },
        {
          label: '服装',
          path: '/clothes/index',
          icon: '#icondress'
        },
        {
          label: '关于',
          path: '/about/index',
          icon: '#iconpadlock'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide,
    syIcon
  }
}
</script>

<style lang="scss" scoped>
$header-height: 200px;
$nav-header: 50px;

.header {
  position: relative;
  margin: 0 auto;
  width: 100%;
  background: #ddd;
  box-shadow: 1px 1px 2px 3px #cdd;
  .logo {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 200px;
    float: left;
    a img {
      margin-top: 35px;
      width: 90px;
      height: 60px;
    }
    z-index: 10001;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    height: 0;
    box-shadow: 1px 4px 4px 2px #cdd;
    padding-bottom: 30%;
    &.slide-1 {
      background-image: url('../../assets/images/l1.jpg');
    }
    &.slide-2 {
      background-image: url('../../assets/images/l2.jpg');
    }
    &.slide-3 {
      background-image: url('../../assets/images/l3.jpg');
    }
    &.slide-4 {
      background-image: url('../../assets/images/l4.jpg');
    }
    &.slide-5 {
      background-image: url('../../assets/images/l5.jpg');
    }
    &.slide-6 {
      background-image: url('../../assets/images/l6.jpg');
    }
    &.slide-7 {
      background-image: url('../../assets/images/l7.jpg');
    }
  }
  .nav {
    font-family: '华文细黑';
    width: 96%;
    height: 64px;
    margin-left: 2%;
    ul {
      padding-top: 10px;
      font-size: 14px;
      background: #ddd;
      li {
        cursor: pointer;
        width: 12.5%;
        float: left;
        text-align: center;
        div {
          font-size: 12px;
          color: #666;
          &.active {
            color: #ff5959;
          }
        }
      }
    }
  }
}
</style>
