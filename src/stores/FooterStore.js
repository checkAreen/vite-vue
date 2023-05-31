import { defineStore} from 'pinia';
import { ref } from 'vue';

export const useFooterStore = defineStore('footerStore', () => {
  const socialMedia = ref([
    {id: 1, icon: '<i class="fa-brands fa-instagram"></i>'},
    {id: 2, icon: '<i class="fa-brands fa-facebook"></i>'},
    {id: 3, icon: '<i class="fa-brands fa-twitter"></i>'},
    {id: 4, icon: '<i class="fa-brands fa-linkedin"></i>'},
    {id: 5, icon: '<i class="fa-brands fa-youtube"></i>'}
  ]);
  const menu = ref([
    {id: 1, link: 'About', label: ''},
    {id: 2, link: 'Features', label: ''},
    {id: 3, link: 'Pricing', label: 'Offer'},
    {id: 4, link: 'Blog', label: ''},
    {id: 5, link: 'How it Work', label: ''}
  ]);
  const utilityPages = ref([
    {id: 1, link: 'Style guide'},
    {id: 2, link: 'Password protected'},
    {id: 3, link: '404 Not found'},
    {id: 4, link: 'Licenses'},
    {id: 5, link: 'Changelog'}
  ]);

  return {
    socialMedia,
    menu,
    utilityPages
  }
})