<template>
  <div id="app">
    <div class="menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/ingreso-gasto">Ingreso de gasto</router-link></li>
        <li><router-link to="/mantenimiento-categorias">Mantenimiento de categorías</router-link></li>
        <li><router-link to="/mantenimiento-monedas">Mantenimiento de monedas</router-link></li>
      </ul>
    </div>
    <div class="col-lg-6 mx-auto">
      <router-view></router-view>

    </div>
  </div>
</template>
  
<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>
  
<style lang="css">
#app {
  color: #56b983;
}
</style>