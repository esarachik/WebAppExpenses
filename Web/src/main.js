import { createApp, Vue } from 'vue';
import App from "./App.vue";
import router from "./router";
import SideBar from "../src/views/SideBar.vue"
import vueFeather from "vue-feather"
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.component('side-bar',SideBar)
app.component('vue-feather',vueFeather)

app.use(pinia)
app.mount("#app")

