import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueChartkick);
});
