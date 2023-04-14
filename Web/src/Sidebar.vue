<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
        <li><router-link class="nav-link" to="/">
            <span data-feather="home"></span> Home</router-link></li>
        </li>
        <li class="nav-item">
        <li><router-link class="nav-link" to="/ingreso-gasto">
            <span data-feather="credit-card"></span> Ingreso de gasto</router-link></li>
        </li>
        <li class="nav-item">
        <li><router-link class="nav-link" to="/mantenimiento-categorias">
            <span data-feather="list"></span> Mantenimiento de categorías</router-link></li>
        </li>
        <li class="nav-item">
        <li><router-link class="nav-link" to="/mantenimiento-monedas">
            <span data-feather="dollar-sign"></span> Mantenimiento de monedas </router-link></li>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>


</script>
