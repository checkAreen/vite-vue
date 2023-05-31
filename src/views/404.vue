<template>
  <div class="not-found">
    <div class="container text-center">
      <h1 class="title-h1 not-found__num m-0">404</h1>
      <h1 class="title-h1 mt-0 mb-3">Oops! Page not found</h1>
      <p class="paragraph px-lg-10 px-sm-5 px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.
      </p>
      <button @click.prevent="$router.push({name: 'Home'})" class="btn-blue">Go To Homepage</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .not-found{
    @include responsive-size('margin-top', 'px', 205, 115);
    &__num{
      @include responsive-size('font-size', 'px', 200, 100);
    }
  }
  .paragraph{
    margin-bottom: 2rem;
  }
</style>