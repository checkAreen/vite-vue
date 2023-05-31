<script setup>
  import { ref } from 'vue';
  import { useScreen } from 'vue-screen';
  import { useFooterStore } from '../stores/FooterStore';
  const screen = useScreen();
  const socialMedia = useFooterStore().socialMedia;
  const menu = useFooterStore().menu;
  const utilityPages = useFooterStore().utilityPages;
</script>

<template>
  <div class="footer mt-xl-9 mt-7 px-xl-5 px-3">
    <div class="footer__inner pb-xl-6 pb-4">
      <div class="container position-relative">
        <!-- newslatter -->
        <div class="newslatter position-absolute top-0 translate-middle-y mx-xxl-0 mx-md-5 mx-0" id="newslatter">
          <div class="container">
            <div class="newslatter__title row py-xl-5 py-sm-4 py-3 px-xxl-5 px-0 gap-xxl-7 justify-content-sm-evenly justify-content-center mx-auto">
              <h2 class="title-h2 m-sm-0 mb-3 p-0 col-xl-5 col-sm-6 col-12 text-sm-start text-center align-self-center">Take control of your personal <span class="text-white">finances today</span></h2>
              <div class="col-xxl-5 col-sm-4 col-8 p-0 align-self-center">
                <form action="" class="row gap-xl-3 gap-2" method="post">
                  <input type="email" class="form-control rounded-pill col" placeholder="Enter your e-mail">
                  <button class="btn-blue col-xxl-4 col-xl-5 col-12 p-3" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- newslatter -->
        <div class="row pt-xxl-9 pt-xl-7 pt-sm-6 pt-7 px-xxl-0 px-lg-6 px-3">
          <div class="footer__company col-xxl-4 col-xl-5 col-12 d-block border-xl-end mb-xl-0 mb-sm-5 mb-4">
            <div v-if="screen.width > 1200" class="footer__company-name d-flex flex-xl-row flex-column mb-4">
              <img src="/images/Icon.png" alt="PrimePay" class="me-2">
              <h4 class="title-h4 pt-2 m-0">PrimePay.</h4>
            </div>
            <p class="paragraph text-xl-start text-center mb-xl-4 mb-3">
              Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non sagittis aliquam bibendum.
            </p>
            <div class="d-flex justify-content-xl-between justify-content-around align-items-center me-xxl-8 me-xl-6">
              <a v-for="item in socialMedia" href="#" :key="item.id" class="social fs-4" v-html="item.icon"></a>
            </div>
          </div>
          <div class="footer__lists text-xl-start text-center col-xxl-8 col-xl-7 col-12 mb-xl-0 mb-4">
            <div class="row justify-content-around">
              <div class="footer__lists-menu col-xxl-3 col-sm-4 col-8 pb-sm-0 pb-2 mb-sm-0 mb-3">
                <h4 class="title-h4">Menu</h4>
                <div v-for="item in menu" :key="item.id" class="footer__menu-item d-flex justify-content-xl-start justify-content-center mb-2">
                  <p class="paragraph mb-0 me-2">{{ item.link }}</p>
                  <div v-if="item.label.length > 0" class="label px-2 align-self-center text-uppercase text-white rounded-pill">{{ item.label }}</div>
                </div>
              </div>
              <div class="footer__lists-utility col-xxl-3 col-sm-4 col-8 pb-sm-0 pb-2 mb-sm-0 mb-3">
                <h4 class="title-h4">Utility pages</h4>
                <div class="d-flex flex-column">
                  <a v-for="item in utilityPages" :key="item.id" href="#" class="paragraph mb-2">{{ item.link }}</a>
                </div>
              </div>
              <div class="footer__lists-address col-xxl-3 col-sm-4 col-12 pe-xxl-0 p-0">
                <h4 class="title-h4">Address</h4>
                <div class="d-flex flex-column">
                  <p class="paragraph mb-xxl-5 mb-xl-4 mb-2">1700 W Blancke St, kiyev port south USA, America</p>
                  <p class="paragraph">+3255 456 789 mail@primpay.com</p>
                </div>
                <button class="btn btn-primary py-3 px-4">Get a Quote</button>
              </div>
            </div>
          </div>
          <div v-if="screen.width <= 1200" class="footer__company-name d-flex flex-column align-items-center">
            <img src="/images/Icon.png" alt="PrimePay" class="me-2">
            <h4 class="title-h4 pt-2 m-0">PrimePay.</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    <div class="container">
      <p class="paragraph my-sm-4 my-2 text-center">
        Copyright © <b style="color: #000">Primarily</b> | Designed by VictorFlow Templates
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .newslatter__title{
    background: url('/images/footer-bg.png') no-repeat;
    background-size: auto;
    @include responsive-size('border-radius', 'px', 30, 15);
    & h2{
      text-transform: none;
    }
  }
  .footer{
    &__inner{
      background-color: $bg-color;
      @include responsive-size('border-radius', 'px', 30, 10);
    }
    &__company{
      height: 79%;
      &-name img{
        @include responsive-size('width', 'px', 44, 34);
      }
    }
    &__lists-utility a{
      text-decoration: none;
      text-transform: none;
    }
    &__menu-item{
      cursor: pointer;
    }
  }
  .paragraph{
    text-transform: none;
  }
  .title-h4{
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .label{
    background: #2FCF3F;
    font-size: 14px;
    font-weight: 600;
    font-family: $open-sans;
  }
  @media screen and (max-width: 576px){
    .newslatter{
      width: 100%;
      left: 0 !important;
    }
    .footer__lists{
      &-menu, &-utility{
        border-bottom: 1px solid #D8D8D8;
      }
    }
  }
</style>