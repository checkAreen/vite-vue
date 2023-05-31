<script setup>
  import { useRoute } from 'vue-router';

  const props = defineProps({
    articles: {
      type: Object,
      required: true,
      default: () => {}
    }
  });
  const route = useRoute();
  const arr = route.path.split('/');
  const currentIndex = parseInt(arr[arr.length - 1]);
  const article = props.articles[currentIndex - 1];

  let firstRelatedIndex, secondRelatedIndex;

  const randomIndex = () => {
    firstRelatedIndex = Math.floor(Math.random() * props.articles.length - 1);
    secondRelatedIndex = Math.floor(Math.random() * props.articles.length - 1);
    if(firstRelatedIndex == secondRelatedIndex ||
      firstRelatedIndex == props.articles.indexOf(article) ||
      secondRelatedIndex == props.articles.indexOf(article) ||
      firstRelatedIndex < 0 ||
      secondRelatedIndex < 0){
      randomIndex();
    }
  }
  randomIndex();
  let firstRelatedBlog = props.articles[firstRelatedIndex];
  let secondRelatedBlog = props.articles[secondRelatedIndex];
</script>

<template>
  <div class="article mt-lg-8 mt-md-7 mt-6">
    <div class="container">
      <div class="d-flex flex-column align-items-center text-center">
        <div class="label mb-3">{{ article.label }}</div>
        <h1 class="title-h1 px-lg-6 px-0 pb-3">{{ article.title }}</h1>
        <div class="subinfo d-flex justify-content-evenly align-items-center w-100 mb-5 pt-3 px-xl-11 px-lg-9 px-md-8 px-sm-6 px-2">
          <div class="subinfo-date">{{ article.info[0] }}</div>
          <div></div>
          <div>{{ article.info[3] }} read</div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="position-relative overflow-hidden w-100 mb-5">
          <img :src="`/images/${article.image}`" :alt="article.title" class="position-absolute w-100">
        </div>
        <div class="user d-flex flex-sm-row flex-column justify-content-between">
          <div class="d-flex flex-sm-row flex-column justify-content-between mb-sm-0 mb-3">
            <img :src="`/images/${article.info[1].split(' ')[0].toLowerCase()}.png`" :alt="article.info[1]">
            <div class="d-flex flex-column justify-content-center">
              <h3 class="title-h3 m-0">{{ article.info[1] }}</h3>
              <p class="paragraph m-0">{{ article.info[2] }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <a href="#" class="social">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="social">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" class="social">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="post paragraph mx-auto mb-xl-6 mb-lg-7 mb-sm-6 mb-8">
        <h2 class="title-h2">The Perfect Creativity</h2>
        <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        <ul style="height: 10%">
          <li>Efficiently myocardinate market-driven innovation.</li>
          <li>Idea-sharing with back end products.</li>
          <li>Ballpark value added activity to beta test.</li>
        </ul>
        <div class="blockquote-block">
          <div class="blockquote-text">“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking . Primchat was the modern what we were looking.”</div>
        </div>
        <h2 class="title-h2">Make real time a wireframes services</h2>
        <p class="mb-4">remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <ol style="height: 13%">
          <li>Efficiently myocardinate market-driven innovation.</li>
          <li>Idea-sharing with back end products.</li>
          <li>Ballpark value added activity to beta test.</li>
          <li>Voluptate at dolores ut dolor</li>
        </ol>
        <div class="testimonial d-flex flex-column">
          <div class="user d-flex justify-content-between">
            <div class="d-flex justify-content-between">
              <img :src="`/images/${article.info[1].split(' ')[0].toLowerCase()}.png`" :alt="article.info[1]" class="me-lg-3 me-0">
              <div class="d-flex flex-column justify-content-center mb-lg-0 mb-3">
                <h3 class="title-h3 m-0">{{ article.info[1] }}</h3>
                <p class="paragraph m-0">{{ article.info[2] }}</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <a href="#" class="social">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="social">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" class="social">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <p class="paragraph">
            “Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking.”Primchat was the modern what we were looking.”
          </p>
        </div>
      </div>
      <div class="blogs text-center">
        <h1 class="title-h1 fw-semibold mb-lg-5 mb-3"><span style="color:#B5B5B5;">Related</span> Blogs</h1>
        <div class="d-flex flex-lg-row flex-column justify-content-between">
          <div class="blogs__item d-flex flex-column align-items-center">
            <div @click.prevent="$router.push({name: 'Article', params: {id: firstRelatedBlog.id}})" class="position-relative overflow-hidden mb-lg-5 mb-3">
              <img :src="`/images/${firstRelatedBlog.image}`" :alt="firstRelatedBlog.title" class="position-absolute end-0 top-50 translate-middle-y">
            </div>
            <div class="label mb-3">{{ firstRelatedBlog.label }}</div>
            <h3 @click.prevent="$router.push({name: 'Article', params: {id: firstRelatedBlog.id}})" class="title-h3 mb-3">{{ firstRelatedBlog.title }}</h3>
            <div class="subinfo d-flex justify-content-evenly align-items-center w-100 pt-3 px-xl-7 px-md-5 px-0">
              <div class="subinfo-date">{{ firstRelatedBlog.info[0] }}</div>
              <div></div>
              <div>{{ firstRelatedBlog.info[1] }}</div>
            </div>
          </div>
          <div class="blogs__item d-flex flex-column align-items-center">
            <div @click.prevent="$router.push({name: 'Article', params: {id: secondRelatedBlog.id}})" class="position-relative overflow-hidden mb-lg-5 mb-3">
              <img :src="`/images/${secondRelatedBlog.image}`" :alt="secondRelatedBlog.title" class="position-absolute end-0 top-50 translate-middle-y">
            </div>
            <div class="label mb-3">{{ secondRelatedBlog.label }}</div>
            <h3 @click.prevent="$router.push({name: 'Article', params: {id: secondRelatedBlog.id}})" class="title-h3 mb-3">{{ secondRelatedBlog.title }}</h3>
            <div class="subinfo d-flex justify-content-evenly align-items-center w-100 pt-3 px-xl-7 px-md-5 px-0">
              <div class="subinfo-date">{{ secondRelatedBlog.info[0] }}</div>
              <div></div>
              <div>{{ secondRelatedBlog.info[1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .user{
    border-bottom: 2px dotted #CCCCCC;
    @include responsive-size('margin-bottom', 'px', 60, 20);
    @include responsive-size('padding-bottom', 'px', 50, 25);
    & > div{
      width: 20%;
      &:nth-child(2){
        width: 13%;
      }
    }
  }
  .title{
    &-h1{
      @include responsive-size('font-size', 'px', 55, 25);
      font-weight: 500;
      text-transform: none;
    }
    &-h2{
      @include responsive-size('font-size', 'px', 45, 24);
      text-transform: none;
      margin-bottom: 20px;
    }
    &-h3{
      font-weight: 500;
    }
  }
  .subinfo{
    width: 20%;
  }
  .position-relative{
    @include responsive-size('border-radius', 'px', 30, 15);
    height: 584px;
    width: 100%;
    & img{
      width: 100%;
    }
  }
  a{
    font-size: 1.5rem;
  }
  .post{
    width: 65%;
    height: 1547px;
    text-transform: none;
  }
  ul{
    margin-bottom: 40px;
  }
  ol{
    margin-bottom: 11%;
  }
  ul, ol{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li{
    text-transform: capitalize;
  }
  .blockquote-block{
    margin-bottom: 40px;
  }
  .testimonial{
    background: #F5F5F5;
    @include responsive-size('border-radius', 'px', 30, 15);
    @include responsive-size('padding', 'px', 47, 52, 10, 12);
  }
  .blogs{
    height: 762px;
    &__item{
      height: 84%;
      width: 48%;
      & .position-relative{
        cursor: pointer;
        height: 387px;
      }
      & h3{
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 1400px){
    .blogs__item .position-relative{
      height: 300px;
    }
  }
  @media screen and (max-width: 992px){
    .container > div:nth-child(2) .position-relative{
      height: 400px;
    }
    .user > div{
      width: 35%;
      &:nth-child(2){
        width: 25%;
      }
    }
    .testimonial{
      & .user{
        flex-direction: column;
        align-items: center;
        & > div{
          &:first-child{
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          width: 50%;
        }
      }
      & .paragraph{
        text-align: center;
      }
    }
    .blogs{
      height: 900px;
      & > div{
        align-items: center;
        height: 100%;
      }
      &__item .position-relative{
        height: 200px;
      }
    }
  }
  @media screen and (max-width: 768px){
    .container > div:nth-child(2) .position-relative{
      height: 280px;
    }
    .user > div{
      width: 40%;
      &:nth-child(2){
        width: 30%;
      }
    }
    .testimonial .user{
      flex-direction: column;
      align-items: center;
      & > div{
        width: 50%;
      }
    }
    .blogs{
      height: 800px;
      &__item .position-relative{
        height: 120px;
      }
    }
  }
  @media screen and (max-width: 576px){
    .title{
      &-h1, &-h2, &-h3{
        text-align: center;
      }
    }
    .container > div:nth-child(2) .position-relative{
      height: 150px;
    }
    .post{
      width: 80%;
    }
    .user{
      align-items: center;
      text-align: center;
      & > div:nth-child(2){
        width: 50%;
      }
    }
    .testimonial .user > div{
      width: 80%;
    }
    .blogs__item{
      width: 80%;
    }
  }
</style>