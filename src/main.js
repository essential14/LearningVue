import { createApp } from "vue";
import App from "./App.vue";
import CustomButton from "./global-components/CustomButton";

createApp(App).component("CustomButton", CustomButton).mount("#app");
