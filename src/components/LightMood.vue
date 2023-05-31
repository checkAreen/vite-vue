<script setup>
  import { ref } from 'vue';
  import { useScreen } from 'vue-screen';
  import { defineComponent } from 'vue';
  import { Carousel, Pagination, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  let screen = useScreen();
  let isDark = ref(false);
  let isLight = ref(true);
  const content = ref([
    {id: 1, imageLight: 'light-mood-mobile-1.png', imageDark: 'dark-mood-mobile-1.png'},
    {id: 2, imageLight: 'light-mood-mobile-2.png', imageDark: 'dark-mood-mobile-2.png'},
    {id: 3, imageLight: 'light-mood-mobile-3.png', imageDark: 'dark-mood-mobile-3.png'}
  ]);
</script>

<template>
  <div class="light-mood mt-lg-7 mt-sm-5 mt-3">
    <div class="container">
      <h2 class="title-h2 text-center mx-auto mb-sm-5 mb-3" style="color: #8C8C8C">
        Feels great in low-light Mood for your
        <span class="text-primary-emphasis">
          eye Protection
        </span>
      </h2>
      <div v-if="screen.width >= 992" class="light-mood__wide">
        <TransitionGroup>
          <div v-if="isLight" class="mobiles-light d-flex flex-row justify-content-between mb-5 px-xxl-5 px-3">
            <img v-for="item in content" :key="item.id" :src="`/images/${item.imageLight}`" :alt="item.imageLight" class="img-fluid">
          </div>
          <div v-if="isDark" class="mobiles-dark d-flex flex-row justify-content-between mb-5 px-xxl-5 px-3">
            <img v-for="item in content" :key="item.id" :src="`/images/${item.imageDark}`" :alt="item.imageDark" class="img-fluid">
          </div>
        </TransitionGroup>
        <div class="light-mood__info d-flex flex-row justify-content-between">
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.
          </p>
          <div class="light-mood-buttons position-relative d-flex flex-row justify-content-around align-items-center mb-3">
            <button @click="isDark = true; isLight = false" class="btn-dark" :class="{'active' : isDark}">Dark</button>
            <button @click="isLight = true; isDark = false" class="btn-light" :class="{'active' : isLight}">Light</button>
            <div
              class="btn-switch position-absolute text-bg-warning"
              :class="[{'btn-switch-right' : isLight}, {'btn-switch-left' : isDark}]">
            </div>
          </div>
        </div>
      </div>
      <div v-else class="light-mood__narrow row mx-sm-0 mx-auto">
        <div class="carousel__inner col-sm-6 col-12 mb-sm-0 mb-4">
          <TransitionGroup>
            <Carousel v-if="isLight" :autoplay="5000" :itemsToShow="1" :wrapAround="true" :transition="500">
              <Slide v-for="item in content.length" :key="item.id">
                <img
                  :src="`/images/${content[item - 1].imageLight}`"
                  :alt="content[item - 1].imageLight"
                  class="w-50"
                  style="filter: drop-shadow(0px 42px 61px rgba(0, 0, 0, 0.25))">
              </Slide>
            </Carousel>
            <Carousel v-else :autoplay="5000" :itemsToShow="1" :wrapAround="true" :transition="500">
                <Slide v-for="item in content.length" :key="item.id">
                  <img
                    :src="`/images/${content[item - 1].imageDark}`"
                    :alt="content[item - 1].imageDark"
                    class="w-50"
                    style="filter: drop-shadow(0px 42px 61px rgba(0, 0, 0, 0.25))">
                </Slide>
            </Carousel>
          </TransitionGroup>
        </div>
        <div class="light-mood__info col-sm-6 col-12 d-block mx-sm-0 mx-auto">
          <p class="paragraph w-100 pt-md-5 pt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.
          </p>
          <div class="light-mood-buttons position-relative d-flex flex-row justify-content-around align-items-center mx-sm-0 mx-auto mb-sm-0 mb-2">
            <button @click="isDark = true; isLight = false" class="btn-dark" :class="{'active' : isDark}">Dark</button>
            <button @click="isLight = true; isDark = false" class="btn-light" :class="{'active' : isLight}">Light</button>
            <div
              class="btn-switch position-absolute text-bg-warning"
              :class="[{'btn-switch-right' : isLight}, {'btn-switch-left' : isDark}]">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';

  .v{
    &-enter-active,
    &-leave-active{
      transition: opacity 0.5s ease;
    }
    &-enter-from,
    &-leave-to{
      opacity: 0;
    }
  }
  .title{
    &-h2{
      text-transform: none;
      max-width: 590px;
    }
  }
  .light-mood-buttons{
    border-radius: 500px;
    border: 1px solid #686868;
    width: 15%;
    & button {
      cursor: pointer;
      background-color: transparent;
      color: $secondary-color;
      border: none;
      font-family: $open-sans;
      font-weight: 600;
      font-size: 18px;
      z-index: 1000;
      transition: color .3s linear;
    }
  }
  .active{
    color: #000 !important;
  }
  .paragraph{
    width: 45%;
  }
  .btn-switch{
    display: block;
    content: "";
    width: 50%;
    height: 92%;
    border-radius: 500px;
    transition: right .3s linear,
    left .3s linear;
    &-right{
      right: 2%;
    }
    &-left{
      right: 48%;
    }
  }
  .mobiles{
    &-light img, &-dark img{
      filter: drop-shadow(0px 42px 61px rgba(0, 0, 0, 0.25));
    }
  }
  @media screen and (max-width: 1400px){
    .mobiles{
      &-light img, &-dark img{
        width: 30%;
      }
    }
  }
  @media screen and (max-width: 992px){
    .light-mood{
      &__info{
        background: linear-gradient(133deg, rgb(246, 197, 170) 0%, rgb(140, 133, 254) 100%);
        @include responsive-size('border-radius', 'px', 30, 15);
      }
      &-buttons{
        width: 50%;
        height: 50px;
        background-color: #fff;
      }
    }
    .paragraph{
      color: #fff;
    }
  }
  @media screen and (max-width: 576px){
    .light-mood-buttons{
      width: 50%;
    }
    .paragraph{
      text-align: center;
    }
  }
</style>