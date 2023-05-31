import { defineStore} from 'pinia';
import { ref } from 'vue';

export const usePricingStore = defineStore('pricingStore', () => {
  const pricing = ref([
    {
      id: 1,
      label: '',
      title: 'Basic',
      titleBg: 'basic-bg.png',
      titleColor: 'rgba(61, 50, 105, 1)',
      price: '10.00',
      featureList: [
        {id: 1, feature: 'Modern Design'},
        {id: 2, feature: 'Easy to Customize'},
        {id: 3, feature: 'Quickly Set Up A Website'},
        {id: 4, feature: 'Another Feature'},
        {id: 5, feature: '24/7 Customer Support'}
      ],
      buttonTextColor: '#231656',
      buttonClass: 'btn-grey-huge',
      open: false
    },
    {
      id: 2,
      label: 'Popular',
      title: 'Standard',
      titleBg: 'standard-bg.png',
      titleColor: 'rgba(255, 255, 255, 1)',
      price: '19.00',
      featureList: [
        {id: 1, feature: 'Modern Design'},
        {id: 2, feature: 'Easy to Customize'},
        {id: 3, feature: 'Quickly Set Up A Website'},
        {id: 4, feature: 'Another Feature'},
        {id: 5, feature: '24/7 Customer Support'}
      ],
      buttonTextColor: '#FFF',
      buttonClass: 'btn-blue-huge',
      open: false
    },
    {
      id: 3,
      label: '',
      title: 'Premium',
      titleBg: 'premium-bg.png',
      titleColor: 'rgba(61, 50, 105, 1)',
      price: '35.00',
      featureList: [
        {id: 1, feature: 'Modern Design'},
        {id: 2, feature: 'Easy to Customize'},
        {id: 3, feature: 'Quickly Set Up A Website'},
        {id: 4, feature: 'Another Feature'},
        {id: 5, feature: '24/7 Customer Support'}
      ],
      buttonTextColor: '#231656',
      buttonClass: 'btn-grey-huge',
      open: false
    }
  ]);

  return {
    pricing
  }
})