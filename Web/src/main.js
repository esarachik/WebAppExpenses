import { createApp, Vue } from 'vue';
import App from "./App.vue";
import router from "./router";
import SideBar from "../src/views/SideBar.vue"
import vueFeather from "vue-feather"
import { createPinia } from 'pinia'


const app = createApp(App)

app.use(router)
app
.component('side-bar',SideBar)
.component('vue-feather',vueFeather)

const pinia = createPinia()
app
.use(pinia)


app.mount("#app")

