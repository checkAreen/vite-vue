<script setup>
  import { useScreen } from 'vue-screen';
  let screenWidth = useScreen();
  const list = [
    {id: 1, title: '12.000 +', text: 'Downloaded'},
    {id: 1, title: '$10 M', text: 'Transactions'},
    {id: 1, title: '1.000 +', text: 'Feedback'}
  ]
</script>

<template>
  <div class="about pt-lg-7 pt-5">
    <div class="container border-bottom pb-xxl-9 pb-xl-7 pb-lg-6 pb-4">
      <div class="row mx-sm-0 mx-auto">
        <div class="about__info col-6">
          <h2 class="title-h2 mb-md-4 mb-2 me-xl-7" style="color: #B5B5B5">
            Send and receive <span class="text-primary-emphasis">payments</span> easily
          </h2>
          <p class="paragraph me-xl-7 me-lg-3 mb-xl-5 mb-lg-4 mb-md-3 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          </p>
          <p v-if="screenWidth.width > 370" class="paragraph me-xl-7 me-lg-3 pb-md-4 pb-3 mb-md-4 mb-3 border-bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div v-if="screenWidth.width > 370" class="about__video d-flex flex-row">
            <button type="button" class="about__video-btn me-md-3 me-1">
              <img src="/images/Play.png" alt="play">
            </button>
            <div class="about__video-info d-flex flex-column pt-lg-3 pt-2">
              <h6 class="title-h6">Lorem ipsum dolor sit</h6>
              <div class="about__video-link d-flex flex-row">
                <a href="#" class="text-capitalize me-3">amet, consectetur</a>
                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="about__picture col-6 position-relative">
          <img src="/images/mobile.png" alt="mobile phone" class="img-fluid position-absolute start-50 translate-middle-x z-3">
        </div>
      </div>
      <div v-if="screenWidth.width <= 370" class="row mt-3 mx-auto">
        <p class="paragraph col-6 border-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="about__video col-6 d-flex flex-row">
          <button type="button" class="about__video-btn me-md-3 me-2">
            <img src="/images/Play.png" alt="play" class=" pb-sm-0 pb-1">
          </button>
          <div class="about__video-info d-flex flex-column">
            <h6 class="title-h6">Lorem ipsum dolor sit</h6>
            <div class="about__video-link d-flex flex-row pt-sm-0 pt-1">
              <a href="#" class="text-capitalize">amet, consectetur</a>
              <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-list mx-sm-0 mx-auto">
        <ul class="list-group d-flex flex-lg-row flex-column ps-2">
          <li v-for="item in list"
              :key="item.id"
              class="list-group-item position-relative
                    px-xxl-5 px-lg-4 px-0 py-0
                    mx-lg-0 mx-md-9 mx-7
                    border-dark-subtle border-top-0 border-bottom-0 border-start-0">
            <h2 class="title-h2">{{ item.title }}</h2>
            <p class="paragraph m-lg-0 mb-4">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .about{
    &__video{
      &-btn{
        border: none;
        background: #FFC173;
        border-radius: 50%;
        @include responsive-size('width', 'px', 100, 40);
        @include responsive-size('height', 'px', 100, 30);
      }
      &-link{
        @include responsive-size('font-size', 'px', 18, 13);
      }
    }
    &__picture{
      @include responsive-size('border-radius', 'px', 60, 15);
      background: rgb(246,197,170);
      background: linear-gradient(133deg, rgba(246,197,170,1) 0%, rgba(140,133,254,1) 100%);
      & img{
        @include responsive-size('top', '%', 17, 10);
        width: 62%;
      }
    }
  }
  .row{
    &:nth-child(2){
      @include responsive-size('border-radius', 'px', 30, 15);
      margin-top: 75px;
    }
    &-list{
      background-color: $bg-color;
    }
  }
  .title{
    &-h6{
      @include responsive-size('font-size', 'px', 20, 12);
      font-family: $open-sans;
    }
  }
  .paragraph{
    &:nth-child(2){
      margin-bottom: 50px;
    }
  }
  .list-group{
    &-item{
      margin-top: 80px;
      margin-bottom: 80px;
      background-color: $bg-color;
      &:last-child{
        border: none !important;
      }
    }
  }
  @media screen and (max-width: 1400px){
    .list-group-item{
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }
  @media screen and (max-width: 992px){
    .list-group-item{
      text-align: center !important;
      border-right: none;
      border-bottom: 1px solid #D8D8D8 !important;
      margin-top: 40px;
      margin-bottom: 0px;
    }
    .about__video-btn img{
      width: 40%;
    }
  }
  @media screen and (max-width: 576px){
    .about__picture{
      height: 200px;
    }
  }
  @media screen and (max-width: 510px){
    .list-group-item{
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
  }
</style>