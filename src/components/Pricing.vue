<script setup>
  import { useScreen } from 'vue-screen';
  import { usePricingStore } from '../stores/PricingStore';
  const screen = useScreen();
  const pricing = usePricingStore().pricing
</script>

<template>
  <div class="pricing mt-lg-7 mt-5">
    <div class="container">
      <h2 class="title-h2 text-center mx-xl-10 mx-lg-9 mx-md-8 mx-4 mb-lg-3 mb-4" style="color: #B5B5B5">
        Our payment services <span style="color: #231656">worldwide</span>
      </h2>
      <div v-if="screen.width >= 992" class="pricing__content d-flex">
        <div v-for="item in pricing" :key="item.id" class="pricing__content-item d-flex flex-column mx-auto pt-4 px-xl-4 px-3" style="background-color: #F2F2F2">
          <div
            class="pricing__content-title mb-xl-4 mb-2 position-relative"
            style="background-repeat: no-repeat; background-size: contain; background-position: center center"
            :style="{backgroundImage: `url('/images/${item.titleBg}')`}">
            <h2 class="title-h2 py-xl-5 py-4 ps-4" :style="{color: item.titleColor}">{{ item.title }}</h2>
            <div v-if="item.label.length > 0" class="label title-h2 fs-6 py-1 px-3 rounded position-absolute top-0 start-50 translate-middle" style="background-color: #38CC47;">{{ item.label }}</div>
          </div>
          <div class="pricing__price d-flex justify-content-xl-between justify-content-around mb-xl-4 mb-2">
            <div class="pricing__price-amount">$ {{ item.price }}</div>
            <div class="pricing__price-period">Month</div>
          </div>
          <div class="pricing__features d-flex flex-column pt-4 ps-xl-5 ps-4 mb-4">
            <div v-for="feature in item.featureList" :key="feature.id" class="pricing__features-item mb-4">{{ feature.feature }}</div>
          </div>
          <button
            :class="item.buttonClass"
            class="mb-xl-5 mb-lg-3 mb-0"
            type="button">
            Get Started
          </button>
        </div>
      </div>
      <div v-else class="pricing__content d-flex flex-column mx-5 align-items-center">
        <div v-for="item in pricing" @click="item.open = !item.open" class="pricing__content-item border border-bottom-0 py-md-4 py-2 px-3 mb-3" style="background-color: #F2F2F2">
          <div
            class="pricing__content-title position-relative"
            :class="{'mb-3' : item.open}"
            :style="{backgroundImage: `url('/images/${item.titleBg}')`}"
            style="background-size: contain; background-repeat: no-repeat; background-position: center center">
            <h2 class="title-h2 pt-5 ps-3" :style="{color: item.titleColor}">{{ item.title }}</h2>
            <div v-if="item.label.length > 0" class="label title-h2 fs-6 py-sm-1 py-0 px-sm-3 px-2 rounded position-absolute top-0 start-50 translate-middle" style="background-color: #38CC47;">{{ item.label }}</div>
          </div>
          <div v-if="item.open" class="pricing__content-info">
            <div class="pricing__price d-flex justify-content-between mb-3">
              <div class="pricing__price-amount">$ {{ item.price }}</div>
              <div class="pricing__price-period">Month</div>
            </div>
            <div class="pricing__features d-flex flex-column pt-3 ps-4 mb-3">
              <div v-for="feature in item.featureList" :key="feature.id" class="pricing__features-item mb-3">{{ feature.feature }}</div>
            </div>
            <button
              class="w-100"
              :class="item.buttonClass"
              type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .pricing{
    &__content{
      &-item{
        @include responsive-size('border-radius', 'px', 30, 15);
        filter: drop-shadow(0px 42px 61px rgba(0, 0, 0, 0.25));
        cursor: pointer;
        transition: transform .2s linear;
        &:hover{
          transform: scale(1.02);
        }
      }
      &-title{
        width: 348px;
        height: 147px;
      }
    }
    &__price{
      &-amount, &-period{
        color: $primary-color;
        font-size: 35px;
        font-family: $jost;
        font-weight: 500;
      }
    }
    &__features{
      @include responsive-size('border-radius', 'px', 30, 15);
      background-color: #fff;
      &-item{
        color: $content-color;
      }
    }
  }
  @media screen and (max-width: 1400px){
    .pricing__content-title{
      width: 300px;
    }
  }
  @media screen and (max-width: 1200px){
    .pricing{
      &__content-title{
        width: 255px;
        height: 110px;
      }
      &__price{
        &-amount, &-period{
          font-size: 25px;
        }
      }
    }
  }
  @media screen and (max-width: 992px){
    .pricing__content{
      &-item:hover{
        transform: none;
      }
      &-title{
        @include responsive-size('width', 'px', 348, 200);
        @include responsive-size('height', 'px', 147, 90);
      }
    }
  }
</style>