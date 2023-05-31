<script setup>
  import { useIntroStore } from '../stores/IntroStore.js';
  import { useNavStore } from '../stores/NavStore';
  const scrollHomePage = useNavStore().scrollHomePage;
  const workContent = useIntroStore().intro;
</script>

<template>
  <div class="intro px-1 px-sm-3 px-lg-5 mx-auto">
    <div class="intro__banner position-relative text-center">
      <h1 class="title-h1 mx-auto">Ready to launch your<br>Online <span class="text-white">Payment</span> App</h1>
      <h6 class="title-h6 col-10 offset-1">A simple yet modern solution to showcase your app</h6>
      <button @click.prevent="scrollHomePage('newslatter')" class="btn-blue">Get Started</button>
      <img class="intro__banner-img d-block col-12 offset-1 col-lg-8 offset-lg-2 position-absolute z-3" src="/images/Phone.png" alt="phone-img">
    </div>
    <div class="intro__work mx-auto" id="intro-work">
      <div class="container">
        <ul class="list-group d-flex flex-lg-row pt-xxl-11 pb-xxl-7 pt-xl-8 pt-lg-7 pt-md-9 pt-sm-6 pt-6 pb-4">
          <li v-for="item in workContent" :key="item.id" class="list-group-item border-0 text-center">
            <div class="intro__work-icons position-relative d-flex justify-content-center mx-auto mb-2">
              <div class="icon-main" v-html="item.icons[0]"></div>
              <div :style="{color:item.colors[0], backgroundColor: item.colors[1], fontSize: item.fontSize + 'rem'}" class="icon-mini" :class="item.classes" v-html="item.icons[1]">
              </div>
            </div>
            <h6 class="title-h6 mb-2">{{ item.title }}</h6>
            <div class="paragraph col-10 offset-1 col-lg-12 offset-lg-0">{{ item.text }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .intro{
    @include responsive-size('padding-top', 'px', 140, 80);
    &__banner{
      @include responsive-size('height', 'px', 1070, 400);
      background: url('/images/Background.png') no-repeat;
      background-size: cover;
      @include responsive-size('border-radius', 'px', 30, 10);
      background-position-x: center;
      @include responsive-size('margin-bottom', 'px', 80, 20);
      &-img{
        @include responsive-size('top', 'px', 440, 230);
      }
    }
    &__work{
      background-color: $bg-color;
      @include responsive-size('border-radius', 'px', 30, 10);
      width: 100%;
    }
  }
  .title{
    &-h1{
      @include responsive-size('padding-top', 'px', 129, 45);
      @include responsive-size('margin-bottom', 'px', 27, 20);
    }
    &-h6{
      font-weight: 600;
      @include responsive-size('margin-bottom', 'px', 30, 20);
    }
  }
  .btn-blue{
    @include responsive-size('font-size', 'px', 18, 12);
  }

  .list-group-item{
    background-color: $bg-color;
  }
  .icon{
    &-main{
      @include responsive-size('font-size', 'px', 61.2, 45);
      color:#DEDEDE;
      margin-right: 16px;
      @include responsive-size('padding-left', 'px', 60, 45);
    }
    &-mini{
      border-radius: 50%;
      @include responsive-size('width', 'px', 50.4, 35);
      @include responsive-size('height', 'px', 50.4, 35);
    }
  }
  @media screen and (max-width: 992px){
    .intro{
      &__banner-img{
        width: 83%;
      }
      &__work-icons{
        @include responsive-size('width', 'px', 395, 255);
      }
    }
    .list-group{
      & .title-h6{
        @include responsive-size('font-size', 'px', 25, 20);
      }
      &-item:first-child .icon-mini{
        align-items: end !important;
      }
    }
  }
  @media screen and (max-width: 321px){
    .title{
      &-h1{
        font-size: 24px;
      }
      &-h6{
        font-size: 18px;
        margin-bottom: 15px;
      }
    }
    .list-group{
      padding-top: 5rem !important;
    }
  }
</style>