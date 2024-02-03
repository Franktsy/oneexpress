import { createApp } from 'vue';
//import Hello from './components/hello.vue';
import App from './components/vue-black-dashboard/src/App.vue'

const app = createApp(App);

if (module.hot) {
  module.hot.accept();
}

app.mount('#app');

// Define feature flags
app.config.devtools = true;
app.config.performance = true;
