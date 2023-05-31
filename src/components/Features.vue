<script setup>
  import { ref } from 'vue';
  import { useScreen } from 'vue-screen';
  import { useFeatureStore } from '../stores/FeatureStore.js';
  const features = useFeatureStore().features;
  const closedAccordion = ref('fa-chevron-down');
  const openAccordion = ref('fa-chevron-up');
  let screenWidth = useScreen();
</script>

<template>
  <div class="features mt-md-6 mt-5">
    <div class="container">
      <div class="row">
        <h1 class="title-h1 col-12 w-50 mx-auto text-center" style="color: #B5B5B5">
          Why it is Worth Choosing <span class="text-primary-emphasis">PrimePay.</span>
        </h1>
      </div>
      <div v-if="screenWidth.width > 576" class="row d-flex flex-wrap justify-content-between gy-4">
        <div v-for="item in features" :key="item.id" class="card">
          <div v-if="item.order == 'row'" :class="item.order" class="g-0">
            <div class="col-md-8">
              <div class="card-body" :class="item.bodyClass">
                <h3 class="title-h3 card-title" :class="item.titleClass">{{ item.title }}</h3>
                <p class="paragraph card-text">
                  {{ item.text }}
                </p>
              </div>
            </div>
            <div class="col-md-4 my-auto">
              <img :src="`/images/${item.image}`" :alt="item.title" class="img-fluid rounded-start mb-md-0 mb-3">
            </div>
          </div>
          <div v-else :class="item.order">
            <img :src="`/images/${item.image}`" :alt="item.title" class="card-img-top p-5">
            <div class="card-body" :class="item.bodyClass">
              <h3 class="title-h3 card-title">{{ item.title }}</h3>
              <p class="paragraph card-text pb-4">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="accordion px-3 pt-4 pb-3">
        <div v-for="item in features" :key="item.id" class="accordion__item p-2 border-bottom" :style="{ background: item.color }">
          <div @click="item.open = !item.open" class="accordion__item-header d-flex flex-row justify-content-between">
            <h3 class="title-h3">{{ item.title }}</h3>
            <i class="fa-solid text-primary-emphasis pt-1" :class="[item.open ? openAccordion : closedAccordion]"></i>
          </div>
          <Transition>
            <div v-if="item.open" class="accordion__item-body">
              <p class="paragraph py-2 mb-0" :style="{color: item.textColor}">{{ item.text }}</p>
              <img :src="`/images/${item.image}`" :alt="item.title" class="img-fluid w-100">
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .title{
    &-h1{
      @include responsive-size('font-size', 'px', 55, 25);
      margin-bottom: 40px;
      text-transform: none;
    }
    &-h3{
      font-weight: 500;
    }
  }
  .card{
    cursor: pointer;
    background-color: $bg-color;
    @include responsive-size('border-radius', 'px', 30, 15);
    border: none;
    width: 32%;
    &:first-child{
      width: 66%;
    }
    &-img-top{
      padding-bottom: 30px !important;
    }
  }
  .paragraph{
    text-transform: none;
  }
  .v{
    &-enter-active,
    &-leave-active{
    transition: all 0.5s ease-in-out;
  }
  &-enter-from,
  &-leave-to{
    transform: translateY(30px);
    opacity: 0;
    }
  }
  .accordion{
    background-color: $bg-color;
    @include responsive-size('border-radius', 'px', 30, 15);
    &__item{
      box-shadow: 3px 1px 15px #B5B5B5;
      &:first-child{
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
      }
      &:last-child{
        border: none !important;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
      }
    }
  }
  @media screen and (max-width: 992px){
    .row:nth-child(2){
      margin-right: auto;
      margin-left: auto;
    }
    .img-fluid{
      width: 70%;
    }
    .card{
      width: 47%;
      text-align: center;
      &:first-child{
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .img-fluid{
      width: 50%;
    }
  }
  @media screen and (max-width: 576px){
    .title-h1{
      width: 100% !important;
    }
    .card{
      width: 100%;
    }
  }
</style>