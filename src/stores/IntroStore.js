import { defineStore} from 'pinia';
import { ref } from 'vue';

export const useIntroStore = defineStore('introStore', () => {
  const intro = ref([
    {
      id: 1,
      icons: ['<i class="fa-regular fa-user"></i>', '<i class="fa-thin fa-plus"></i>'],
      colors: ['#7544FF', '#E5DFF4'],
      fontSize: 1.7,
      classes: 'd-flex justify-content-center align-items-start',
      title: 'Create an account',
      text: 'Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business'

    },
    {
      id: 2,
      icons: ['<i class="fa-solid fa-building-columns"></i>', '<i class="fa-regular fa-user"></i>'],
      colors: ['#FF6CD3', '#FCD7FF'],
      fontSize: 1.1,
      classes: 'd-flex justify-content-center align-items-center',
      title: 'Attach bank accounts',
      text: 'Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business'
    },
    {
      id: 3,
      icons: ['<i class="fa-solid fa-money-bill-1"></i>', '<i class="fa-solid fa-dollar-sign"></i>'],
      colors: ['#F9B867', '#F9E2C0'],
      fontSize: 1.2,
      classes: 'd-flex justify-content-center align-items-center',
      title: 'Send money',
      text: 'Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business'
    }
  ]);

  return {
    intro
  }
})