<script setup>
  import { useBlogStore } from '../stores/BlogStore.js';
  import { useRoute } from 'vue-router';
  import ArticleItem from '../components/ArticleItem.vue';

  const articles = useBlogStore().articles;
</script>

<template>
  <ArticleItem :articles="articles"></ArticleItem>
</template>

<style lang="scss" scoped>
</style>