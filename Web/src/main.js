import { createApp, Vue } from 'vue';
import App from './App.vue';
import IngresoGasto from './IngresoGasto.vue'
import Home from './Home.vue'
import MantenimientoMonedas from './MantenimientoMonedas.vue'
import MantenimientoCategorias from './MantenimientoCategorias.vue'
import SideBar from './Sidebar.vue'
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

