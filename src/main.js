import { createApp } from "vue";
import App from "./App.vue";
import CustomButton from "./global-components/CustomButton";
import store from './store'

createApp(App).use(store).component("CustomButton", CustomButton).mount("#app");
