<script setup>
  import Intro from '../components/Intro.vue';
  import About from '../components/About.vue';
  import Features from '../components/Features.vue';
  import Testimonials from '../components/Testimonials.vue';
  import LightMood from '../components/LightMood.vue';
  import Bank from '../components/Bank.vue';
  import Pricing from '../components/Pricing.vue';
</script>

<template>
  <Intro></Intro>
  <About id="about"></About>
  <Features id="features"></Features>
  <Testimonials></Testimonials>
  <LightMood></LightMood>
  <Bank></Bank>
  <Pricing id="pricing"></Pricing>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
</style>