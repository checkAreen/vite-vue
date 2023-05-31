<script setup>
  import { useScreen } from 'vue-screen';
  import { defineComponent } from 'vue';
  import { Carousel, Pagination, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import { useTestimonialStore } from '../stores/TestimonialStore';
  const content = useTestimonialStore().feedback;
  const awardsContent = useTestimonialStore().awards;
  let screenWidth = useScreen();
</script>

<template>
  <div class="testimonials mt-md-7 mt-5">
    <div class="container">
      <div class="testimonials__inner col-12">
        <h2 class="title-h2 text-center pt-xxl-7 pt-lg-6 pt-sm-5 pt-3 mx-auto" style="color: #FFF">
          “Say goodbye to clutter and <span class="text-primary-emphasis">bounce rates.</span>
        </h2>
        <div v-if="screenWidth.width >= 992" class="testimonials__list">
          <div v-for="item in content" :key="item.id" class="testimonials__list-item bg-white mx-xl-8 mx-lg-6 mb-4 p-lg-5">
            <div class="item__inner">
              <div class="item__inner-person d-flex justify-content-between border-bottom pb-4 mb-4">
                <div class="item__person-details d-flex flex-row">
                    <img :src="`/images/${item.photo}`" :alt="item.name" class="img-fluid align-items-center">
                  <div class="d-block ms-3 align-self-center">
                    <h3 class="title-h3">{{ item.name }}</h3>
                    <h6 class="title-h6 text-primary">{{ item.job }}</h6>
                  </div>
                </div>
                <div class="item__person-stars align-self-center">
                  <i v-for="star in item.stars" class="fa-sharp fa-solid fa-star text-warning fs-3"></i>
                </div>
              </div>
              <div class="item__inner-feedback">
                <p class="paragraph m-0">{{ item.feedback }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="carousel">
          <Carousel :autoplay="5000" :wrap-around="true">
            <Slide v-for="item in content.length" :key="item.id">
              <div class="carousel__item">
                <div class="testimonials__list-item bg-white text-center mx-xl-8 mx-lg-6 mx-md-5 mx-sm-4 mx-2 mb-4 p-sm-4 p-2">
                  <div class="item__inner">
                    <div class="item__inner-person border-bottom pb-sm-4 mb-sm-4 pb-2 mb-2">
                      <div class="item__person-details d-block">
                          <img
                            :src="`/images/${content[item - 1].photo}`"
                            :alt="content[item - 1].name"
                            class="img-fluid">
                        <h3 class="title-h3">{{ content[item - 1].name }}</h3>
                        <h6 class="title-h6 text-primary">{{ content[item - 1].job }}</h6>
                        <div class="item__person-stars align-self-center">
                          <i v-for="star in content[item - 1].stars" class="fa-sharp fa-solid fa-star text-warning fs-lg-3 fs-6"></i>
                        </div>
                      </div>
                    </div>
                    <div class="item__inner-feedback">
                      <p class="paragraph m-0">{{ content[item - 1].feedback }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Pagination class="p-0 m-0" />
            </template>
          </Carousel>
        </div>
      </div>
      <div class="d-flex flex-lg-row flex-column justify-content-between mt-xxl-6 mt-5">
        <div class="awards d-flex flex-row align-items-center justify-content-between mb-4">
          <img
            v-for="item in awardsContent.awards"
            :key="item.id"
            :src="`/images/${item.image}`"
            :alt="item.image">
        </div>
        <div class="rating d-flex flex-lg-row flex-column text-center align-items-center">
          <div v-for="item in awardsContent.rating" :key="item.id" class="rating__item mb-lg-0 mb-3">
            <h1 :class="item.class">{{ item.rate }}/5</h1>
            <div class="mb-2">
              <i v-for="star in Math.ceil(item.rate)" class="fa-sharp fa-solid fa-star text-warning fs-3"></i>
            </div>
            <h6 class="title-h6 fw-semibold">{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .testimonials{
    &__inner{
      @include responsive-size('border-radius', 'px', 30, 15);
      background: url('/images/testimonials-bg.png') no-repeat;
      background-position: center center;
      background-size: cover;
      height: 1650px;
    }
    &__list-item{
        @include responsive-size('border-radius', 'px', 30, 15);
    }
  }

  .title{
    &-h2{
      width: 50%;
      margin-bottom: 40px;
    }
    &-h3{
      font-weight: 500;
    }
    &-h6{
      font-family: $open-sans;
      font-weight: 400;
      @include responsive-size('font-size', 'px', 20, 16);
    }
  }
  .paragraph{
    text-transform: none;
    @include responsive-size('font-size', 'px', 25, 18);
  }
  .awards{
    width: 585px;
    background-color: #F3F3F3;
    @include responsive-size('padding', 'px', 38, 79, 10, 20);
    @include responsive-size('border-radius', 'px', 30, 15);
    & img{
      @include responsive-size('width', '%', 100, 40);
    }
  }
  .rating__item:first-child{
    margin: 0 90px;
  }
  @media screen and (max-width: 1400px){
    .testimonials__inner{
      height: 1550px;
    }
    .rating__item:first-child{
      margin: 0 13px;
    }
  }
  @media screen and (max-width: 992px){
    .testimonials__inner{
      height: 700px;
    }
    .title-h2{
      width: 75%;
    }
    .awards{
      width: 100%;
    }
  }
  @media screen and (max-width: 768px){
    .testimonials__inner{
      height: 620px;
    }
    .title-h2{
      margin-bottom: 20px;
    }
  }
</style>