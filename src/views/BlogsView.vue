<script setup>
  import { useBlogStore } from '../stores/BlogStore.js';
  import { useScreen } from 'vue-screen';
  const articleStore = useBlogStore().articles;
  const screen = useScreen();
</script>

<template>
  <div class="blog mt-lg-7 mt-5 mx-5">
    <div class="blog__banner text-center">
      <h1 class="title-h1 py-md-7 py-sm-6 py-5">Blog</h1>
    </div>
    <div class="container mt-lg-7 mt-sm-3 mt-0">
      <div class="d-flex flex-sm-row flex-column justify-content-between align-items-center mx-lg-5 mx-0 mb-lg-6 mb-3">
        <h2 class="title-h2" style="color: #B5B5B5">News <span style="color: #231656">Articles</span></h2>
        <div class="form p-0">
          <form action="" class="d-flex flex-lg-row flex-column justify-content-between" method="post">
            <input type="email" class="form-control rounded-pill ps-lg-4 ps-sm-3 ps-0 mb-lg-0 mb-3" placeholder="Enter your email">
            <button class="btn-blue p-lg-4 p-2" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div class="articles d-flex flex-column justify-content-between align-items-center flex-wrap mb-lg-7 mb-5">
        <div v-for="article in articleStore.slice(0, 4)" :key="article.id" v-if="screen.width >= 991" class="articles__item d-flex justify-content-lg-between">
          <div @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="position-relative overflow-hidden mx-0">
            <img :src="`/images/${article.image}`" :alt="article.title" class="position-absolute">
          </div>
          <div class="articles__item-info">
            <div class="label mb-3">{{ article.label }}</div>
            <h3 @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="title-h3">{{ article.title }}</h3>
            <div class="subinfo d-flex align-items-center pt-3 mt-3 mx-lg-0 mx-auto mb-lg-0 mb-3">
              <div class="subinfo-date me-2">{{ article.info[0] }}</div>
              <div class="me-2"></div>
              <div>{{ article.info[1] }}</div>
            </div>
          </div>
        </div>
        <div v-else v-for="article in articleStore.slice(0, 2)" :key="article.id" class="articles__item d-flex flex-column align-items-center">
          <div @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="position-relative overflow-hidden mx-0">
            <img :src="`/images/${article.image}`" :alt="article.title" class="position-absolute">
          </div>
          <div class="articles__item-info">
            <div class="label mb-3">{{ article.label }}</div>
            <h3 @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="title-h3">{{ article.title }}</h3>
            <div class="subinfo d-flex justify-content-center align-items-center pt-3 mt-3 mx-lg-0 mx-auto mb-lg-0 mb-3">
              <div class="subinfo-date me-2">{{ article.info[0] }}</div>
              <div class="me-2"></div>
              <div>{{ article.info[1] }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h2 class="title-h2 mb-5"><span style="color: #B5B5B5">Latest</span> News</h2>
        <div class="latest-articles row g-5">
          <div v-if="screen.width >= 991" v-for="article in articleStore.slice((articleStore.length - 4))" :key="article.id" class="latest-articles__item col-6 d-flex flex-column align-items-center">
            <div @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="position-relative overflow-hidden mb-5 w-100">
              <img :src="`/images/${article.image}`" :alt="article.title" class="position-absolute start-50 top-50 translate-middle">
            </div>
            <div class="label mb-3">{{ article.label }}</div>
            <h3 @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="title-h3 px-6">{{ article.title }}</h3>
            <div class="subinfo d-flex align-items-center justify-content-center pt-3 mt-3 w-100">
              <div class="subinfo-date me-2">{{ article.info[0] }}</div>
              <div class="me-2"></div>
              <div>{{ article.info[1] }}</div>
            </div>
          </div>
          <div v-else v-for="article in articleStore.slice((articleStore.length - 4), (articleStore.length - 2))" :key="article.id" class="latest-articles__item col-12 d-flex flex-column align-items-center">
            <div @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="position-relative overflow-hidden mb-5 w-100">
              <img :src="`/images/${article.image}`" :alt="article.title" class="position-absolute start-50 top-50 translate-middle">
            </div>
            <div class="label mb-3">{{ article.label }}</div>
            <h3 @click.prevent="$router.push({name: 'Article', params: {id: article.id}})" class="title-h3 px-6">{{ article.title }}</h3>
            <div class="subinfo d-flex align-items-center justify-content-center pt-3 mt-3 w-100">
              <div class="subinfo-date me-2">{{ article.info[0] }}</div>
              <div class="me-2"></div>
              <div>{{ article.info[1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .blog__banner{
    background: url('/images/blog-banner.jpg') no-repeat;
    background-size: contain;
    background-position: center center;
  }
  .title{
    &-h2{
      @include responsive-size('font-size', 'px', 55, 24);
      font-weight: 600;
    }
    &-h3{
      font-family: $jost;
      @include responsive-size('font-size', 'px', 25, 18);;
      font-weight: 500;
      text-transform: none;
      cursor: pointer;
    }
  }
  .form{
    width: 50%;
    &-control{
      filter: drop-shadow(5px 3px 5px rgba(0, 0, 0, 0.25));
      width: 65%;
    }
  }
  .btn-blue{
    @include responsive-size('padding', 'px', 19.8, 41.4, 15, 30);
    &:hover{
      @extend .btn-blue;
    }
  }
  .position-relative{
    @include responsive-size('border-radius', 'px', 30, 15);
    cursor: pointer;
  }
  .articles{
    height: 675px;
    &__item{
      &:first-child{
        flex-direction: column;
        align-items: center;
        justify-content: start !important;
        text-align: center;
        height: 100%;
        width: 48%;
        & .position-relative{
          height: 60%;
          width: 100%;
          margin-bottom: 2.7rem;
          & img{
            top: 50%;
            right: 0%;
            transform: translateY(-50%) translateX(-70%);
            height: auto;
          }
        }
        & .articles__item-info{
          width: 100%;
          & .label{
            align-self: center;
          }
          & .title-h3{
            padding: 0% 10%;
          }
          & .subinfo{
            justify-content: center;
            width: 100%;
          }
        }
      }
      width: 48%;
      flex-direction: row;
      align-items: center;
      & .position-relative{
        height: 100%;
        width: 33%;
        & img{
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-info{
        &:first-child{
          width: 100%;
          & .label{
            align-self: center;
          }
        }
        display: flex;
        flex-direction: column;
        width: 62%;
        & .label{
          align-self: self-start;
        }
      }
    }
  }
  .latest-articles{
    &__item{
      & .position-relative{
        @include responsive-size('height', 'px', 397, 150);
        @include responsive-size('border-radius', 'px', 30, 15);
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 992px){
    .title-h3{
      padding: 0 !important;
    }

    form{
      align-items: end;
      & button{
        width: 65%;
      }
    }
    .articles{
      height: 1000px;
      &__item{
        &:first-child{
          width: 100%;
          height: 48%;
          flex-direction: row;
          align-items: center;
          & .position-relative{
            width: 100%;
            margin-bottom: 1rem;
            & img{
              width: auto;
              height: auto;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
            }
          }
        }
        height: 48%;
        width: 100%;
        text-align: center;
        & .position-relative{
            width: 100%;
            margin-bottom: 1rem;
            & img{
              width: 100%;
              height: auto;
              left: 50%;
              transform: translateX(-50%) translateY(0%);
            }
          }
        & .articles__item-info{
          width: 100%;
        }
        & .label{
          align-self: center;
        }
        & .subinfo {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 576px){
    .form{
      width: 100%;
      & form{
        align-items: center;
      }
      &-control{
        text-align: center;
        font-size: 0.7rem;
      }
    }
    .articles{
      height: 700px;
      &__item{
        &:first-child{
          & .position-relative{
            & img{
              width: 100%;
            }
          }
        }
        & .position-relative{
          & img{
            transform: translateX(-50%) translateY(-30%);
          }
        }
      }
    }
    .latest-articles{
      &__item{
        & .position-relative{
          & img{
            transform: translateX(-50%) translateY(-50%) scale(0.7) !important;
          }
        }
      }
    }
  }
</style>