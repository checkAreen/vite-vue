<script setup>
  import Nav from './components/Nav.vue';
  import Footer from './components/Footer.vue';
  import { ref, onMounted, onUnmounted } from 'vue';

  const showArrow = ref(false);
  const handleScroll = () => {
    showArrow.value = window.scrollY >= 1500;
  }

  onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

</script>

<template>
  <Nav></Nav>
  <div class="overlay"></div>
  <Transition>
    <button @click="scrollToTop" v-if="showArrow" class="scroll-up fs-1 position-fixed end-0 bottom-0 translate-middle z-3">
      <i class="fa-solid fa-circle-arrow-up"></i>
    </button>
  </Transition>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Jost:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap');
  @import './style.scss';

  .overlay{
    display: none;
    position: fixed;
    background: rgba(0, 0, 0, .5);
    opacity: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
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
  .scroll-up{
    border: none;
    background: transparent;
    & i{
      color: $secondary-color;
    }
  }
</style>