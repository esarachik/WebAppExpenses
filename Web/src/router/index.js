import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import IngresoGasto from "../views/IngresoGasto.vue";
import MantenimientoCategorias from "../views/MantenimientoCategorias.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/ingreso-gasto',
    name: "IngresoGasto",
    component: IngresoGasto
  },
  {
    path: '/mantenimiento-categorias',
    name: "MantenimientoCategorias",
    component: MantenimientoCategorias
  },
  // {
  //   path: '/mantenimiento-monedas',
  //   name: "MantenimientoMonedas",
  //   component: MantenimientoMonedas
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;