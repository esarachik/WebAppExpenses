import { createRouter, createWebHistory } from 'vue-router';
import IngresoGasto from './IngresoGasto.vue';
import Home from './Home.vue'
import MantenimientoCategorias from './MantenimientoCategorias.vue';
import MantenimientoMonedas from './MantenimientoMonedas.vue';

const routes = [
  // {
  //   path: '/',
  //   redirect: '/ingreso-gasto'
  // },
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