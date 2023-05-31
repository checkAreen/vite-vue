import { defineStore} from 'pinia';
import { ref } from 'vue';

export const useFeatureStore = defineStore('featureStore', () => {
  const features = ref([
    {
      id: 1,
      order: 'row',
      bodyClass: 'py-md-6',
      title: 'Integration other',
      titleClass: 'pb-3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam bibendum.',
      textColor: '#000',
      image: 'integration.png',
      color: '#FFF',
      open: false
    },
    {
      id: 2,
      order: 'column',
      bodyClass: 'pt-0 px-md-5',
      title: 'Safe & Security',
      text: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
      textColor: '#fff',
      image: 'security.png',
      color: '#4CC1FF',
      open: false
    },
    {
      id: 3,
      order: 'column',
      bodyClass: 'pt-0 px-md-5',
      title: 'Merchant account',
      text: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
      textColor: '#fff',
      image: 'account-orange.png',
      color: '#FFC173',
      open: false
    },
    {
      id: 4,
      order: 'column',
      bodyClass: 'pt-0 px-md-5',
      title: 'Merchant account',
      text: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
      textColor: '#fff',
      image: 'account-blue.png',
      color: '#7D7AFF',
      open: false
    },
    {
      id: 5,
      order: 'column',
      bodyClass: 'pt-0 px-md-5',
      title: 'Fast get paid',
      text: 'Easily integrate with all your need favorite tools through and APIsing including automatic',
      textColor: '#fff',
      image: 'pay.png',
      color: '#FF6CD3',
      open: false
    }
  ]);

  return {
    features
  }
})