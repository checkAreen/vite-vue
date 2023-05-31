import { defineStore} from 'pinia';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useNavStore = defineStore('navStore', () => {
  const route = useRoute();
  const router = useRouter();

  const nav = ref([
    {id: 1, linkText: 'About Us', section: 'about'},
    {id: 2, linkText: 'Features', section: 'features'},
    {id: 3, linkText: 'Pricing', section: 'pricing'},
    {id: 4, linkText: 'Blog', section: 'blogs'}
  ]);

  const scrollHomePage = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
  }

  const scrollFromAnotherPage = (sectionId) => {
    return new Promise((resolve, reject) => {
      router.push({ name: 'Home' })
        .then(() => {
          return router.isReady();
        })
        .then(() => {
          scrollHomePage(sectionId);
          resolve();
        })
        .catch((error) => {
          console.error(error);
          router.push({ name: 'Not Found' });
          reject(error);
        });
    });
  }

  const scrollTo = (sectionId) => {
    if(route.path == '/'){
      scrollHomePage(sectionId);
    } else {
      scrollFromAnotherPage(sectionId);
    }
  };

  return {
    nav,
    scrollTo,
    scrollHomePage
  }
});