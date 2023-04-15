import { createApp, Vue } from 'vue';
import App from './App.vue';
import IngresoGasto from './pages/IngresoGasto.vue'
import Home from './pages/Home.vue'
import MantenimientoMonedas from './pages/MantenimientoMonedas.vue'
import MantenimientoCategorias from './pages/MantenimientoCategorias.vue'
import SideBar from './pages/Sidebar.vue'
import router from './router';
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app
.component('home', Home)
.component('ingreso-gasto', IngresoGasto)
.component('mantenimiento-categorias', MantenimientoCategorias)
.component('mantenimiento-monedas', MantenimientoMonedas)
.component('side-bar',SideBar)

app.use(router)
app.use(pinia)
app.mount("#app")

feather.replace({ 'aria-hidden': 'true' })

