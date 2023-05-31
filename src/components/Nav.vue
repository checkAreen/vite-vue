<script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue';
  import { useNavStore } from '../stores/NavStore.js';

  let isActive = ref(false);
  let isScrolled = ref(false);

  const nav = useNavStore().nav;

  const scrollTo = useNavStore().scrollTo;

  const closeMenu = () => {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    toggleButton.classList.add('collapsed');
    toggleButton.setAttribute('aria-expanded', 'false');
    navbarCollapse.classList.remove('show');
    isActive.value = false;
  }

  const handleScroll = () => {
    isScrolled.value = window.scrollY >= 160;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    const overlay = document.querySelector('.overlay');
    if (overlay) {
      watch(isActive, (value) => {
        document.body.style.overflow = value ? 'hidden' : 'auto';
        overlay.style.display = value ? 'block' : 'none';
        overlay.style.opacity = value ? '0.7' : '0';
      });
    }
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg" :class="{'navbar-scroll p-0': isScrolled}">
    <div class="container navbar__inner">
        <a @click="$router.push({name: 'Home'})" class="navbar-brand py-0 col-6 d-flex" href="#">
          <img src="/images/Icon.png" alt="Logo" class="d-inline-block me-2 me-sm-1">
          <h4 class="title-h4 align-self-end m-0">PrimePay.</h4>
        </a>
        <button @click="isActive = !isActive" class="navbar-toggler d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="toggler-icon top-bar" :class="{'top-bar-show' : isActive}"></span>
          <span class="toggler-icon middle-bar" :class="{'middle-bar-show' : isActive}"></span>
          <span class="toggler-icon bottom-bar" :class="{'bottom-bar-show' : isActive}"></span>
        </button>
        <div class="navbar-nav collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-lg-0 mb-3 col-7 justify-content-between align-items-center">
            <li v-for="link in nav" :key="link.id" class="nav-item">
              <a v-if="link.section != 'blogs'" @click.prevent="scrollTo(link.section); closeMenu()" class="nav-link" href="#">{{ link.linkText }}</a>
              <a v-else @click.prevent="$router.push({name: 'Blogs'}); closeMenu()" class="nav-link" href="#">{{ link.linkText }}</a>
            </li>
          </ul>
          <button class="btn-blue btn-login">Login</button>
        </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  nav{
    width: 100vw;
    background-color: #fff;
  }
  .navbar{
    transition: padding-top .3s linear,
                padding-bottom .3s linear,
                box-shadow .3s linear;
    &__inner{
      @include responsive-size('margin-top', 'px', 22, 10);
      @include responsive-size('margin-bottom', 'px', 22, 10);
    }
    &-scroll{
      box-shadow: 2px 2px 5px #B5B5B5;
    }
    &-brand img{
      @include responsive-size('width', 'px', 44, 34);
    }
    &-toggler{
      @include responsive-size('width', 'px', 19.8, 40);
        height: 1.1rem;
        position: relative;
        transition: .5s ease-in-out;
        &, &:focus, &:active, &-icon:focus{
          outline: none;
          box-shadow: none;
          border: 0;
        }
        & span{
          margin: 0;
          padding: 0;
        }
        & .top-bar{
          margin-top: -20px;
          transform: rotate(0deg);
          &-show{
            margin-top: 0px;
            transform: rotate(135deg);
          }
        }
        & .middle-bar{
          opacity: 1;
          filter: alpha(opacity=100);
          &-show{
            opacity: 0;
            filter: alpha(opacity=0);
          }
        }
        & .bottom-bar{
          margin-top: 20px;
          transform: rotate(0deg);
          &-show{
            margin-top: 0px;
            transform: rotate(-135deg);
          }
        }
      }
  }
  .toggler-icon{
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: $primary-color;
    border-radius: 1px;
    opacity: 1;
    left: 0px;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  .middle-bar{
    margin-top: 0px;
  }
  .nav-link{
    position: relative;
    font-family: $inter;
    color: $primary-color;
    font-size: 18px;
    font-weight: 500;
    padding: 0px !important;
    position: relative;
    &::after{
      position: absolute;
      bottom: -5px;
      left: 50%;
      display: block;
      content: "";
      background: $primary-color;
      height: 2px;
      width: 0%;
      transition: left .2s linear,
      width .2s linear;
    }
    &:hover{
      &::after{
        left: 0%;
        width: 100%;
      }
    }
  }
  .btn-login{
    @include responsive-size('padding', 'px', 19.8, 41.4, 15, 30);
    margin-left: auto;
    &:hover{
      @extend .btn-login
    }
  }
  @media screen and (max-width: 1200px){
    .nav-link{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 992px){
    .nav-link{
      margin-top: 30px;
      &::after{
        display: none;
      }
    }
    .btn-login{
      border-radius: 5px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 375px){
    .toggler-icon{
      width: 70%;
    }
  }
</style>