<script setup>
  import { ref } from 'vue';
  import { useScreen } from 'vue-screen';
  const screen = useScreen();
  const content = ref([
    {id: 1, text: 'All your transaction'},
    {id: 2, text: 'Receipts transaction'},
    {id: 3, text: 'Experience Smart App'},
    {id: 4, text: 'Control your Budget'},
    {id: 5, text: 'Find your expenses'}
  ]);
</script>

<template>
  <div class="bank py-lg-7 pt-5 pb-0 mt-5" style="background-color: #303030">
    <div class="container">
      <div class="row gx-sm-5 gx-3">
        <div class="bank__info col-sm-6 col-7 d-flex flex-column px-lg-4 pe-0">
          <h2 class="title-h2  pe-xl-8 pe-lg-6 mb-4" style="color: #8C8C8C">
            Credit is the Fastest Mobile <span style="color: #fff">Banking Solution.</span>
          </h2>
          <p class="paragraph pe-xl-7 pe-lg-5 mb-4">
            Feels great in low-light Mood for your eye Protection Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          </p>
          <div v-if="screen.width >= 768" class="bank__info-list d-flex flex-column flex-wrap pe-7">
            <div v-for="item in content" :key="item.id" class="d-flex align-items-center border-0 mb-3">
              <img src="/images/checkmark.png" alt="list-item" class="img-fluid me-2">
              <p class="paragraph mb-0">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-5">
          <img v-if="screen.width >= 768" src="/images/cards.png" alt="bank_cards" class="img-fluid">
          <div v-else class="bank__info-list d-flex flex-row flex-wrap">
            <div v-for="item in content" :key="item.id" class="d-flex align-items-center border-0 mb-3">
              <img src="/images/checkmark.png" alt="list-item" class="img-fluid me-2">
              <p class="paragraph mb-0">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style.scss';
  .paragraph{
    color: #fff;
  }
  .bank__info-list{
    height: 32%;
  }
  @media screen and (max-width: 992px){
    .bank__info-list{
      height: 40%;
    }
  }
</style>