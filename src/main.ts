import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './vuetify';
import 'vuetify/styles';

createApp(App).use(router).use(store).use(vuetify).mount('#app');
