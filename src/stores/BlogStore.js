import { defineStore} from 'pinia';
import { ref } from 'vue';

export const  useBlogStore = defineStore('blogStore', () => {
  const articles = ref([
    {
      id: 1,
      title: 'Great productivity apps you can download for free this week on iPhone',
      label: 'Business',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '3 min'],
      image: 'magic-ball.png',
    },
    {
      id: 2,
      title: 'App X is now available on your wrist: Download watchOS...',
      label: 'Business',
      info: ['May 02, 2022', 'Joe Cook', 'Developer', '3 min'],
      image: 'pineapple.png',
    },
    {
      id: 3,
      title: 'Apps Integrations to Boost Your Productivity',
      label: 'Marketing',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '5 min'],
      image: 'chair.png',
    },
    {
      id: 4,
      title: 'Turn Emails & Attachments Into To-Dos with Apps',
      label: 'Creative',
      info: ['May 02, 2022', 'Jessica Jobs', 'Product Manager', '4 min'],
      image: 'aerostat.png',
    },
    {
      id: 5,
      title: 'The Best Productivity Apps for 2021 - Updated List',
      label: 'Designing',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '7 min'],
      image: 'orange.png',
    },
    {
      id: 6,
      title: 'Turn Emails & Attachments Into To-Dos with Apps',
      label: 'Development',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '4 min'],
      image: 'avocado.png',
    },
    {
      id: 7,
      title: 'The Best Productivity Apps for 2021 - Updated List',
      label: 'Designing',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '2 min'],
      image: 'blue-orange.png'
    },
    {
      id: 8,
      title: 'Turn Emails & Attachments Into To-Dos with Apps',
      label: 'Development',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '5 min'],
      image: 'social-media.png'
    },
    {
      id: 9,
      title: 'Why virtual experiences are going to be the next big thing in 2023',
      label: 'Designing',
      info: ['May 02, 2022', 'Nattasha', 'Designer', '8 min'],
      image: 'camera.png'
    },
    {
      id: 10,
      title: 'Is it smart to invest in crypto in 2022? What you need to know',
      label: 'Development',
      info: ['May 02, 2022', 'Jessica', 'Designer', '11 min'],
      image: 'cup.png'
    }
  ]);

  return {
    articles
  }
})