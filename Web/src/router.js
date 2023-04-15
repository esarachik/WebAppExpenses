import { createRouter, createWebHistory } from 'vue-router';
import IngresoGasto from './pages/IngresoGasto.vue';
import Home from './pages/Home.vue'
import MantenimientoCategorias from './pages/MantenimientoCategorias.vue';
import MantenimientoMonedas from './pages/MantenimientoMonedas.vue';

const routes = [
 
  {
    path: '/',
    component: Home
  },
  {
    path: '/ingreso-gasto',
    component: IngresoGasto
  },
  {
    path: '/mantenimiento-categorias',
    component: MantenimientoCategorias
  },
  {
    path: '/mantenimiento-monedas',
    component: MantenimientoMonedas
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;