import { defineStore} from 'pinia';
import { ref } from 'vue';

export const useTestimonialStore = defineStore('testimonialStore', () => {
  const feedback = ref([
    {
      id: 1,
      photo: 'nattasha.png',
      name: 'Nattasha',
      job: 'Designer',
      stars: 5,
      feedback: "“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking."
    },
    {
      id: 2,
      photo: 'joe.png',
      name: 'Joe Cook',
      job: 'Developer',
      stars: 5,
      feedback: "“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking."
    },
    {
      id: 3,
      photo: 'jessica.png',
      name: 'Jessica Jobs',
      job: 'Product Designer at Uber.INC',
      stars: 5,
      feedback: "“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking."
    }
  ]);
  const awards = ref({
    awards:[{id: 1, image: 'award-1.png', class: 'img-fluid align-self-center'}, {id: 2, image: 'award-2.png', class: 'img-fluid'}],
    rating:[{id: 1, rate: 4.5, title: 'On the iOS App Store', class: 'title-h1 mx-lg-0 mx-4'}, {id: 2, rate: 4.8, title: 'On the Android Play Store.', class: 'title-h1 mx-lg-4 mx-5'}]
  })

  return{
    feedback,
    awards
  }
})