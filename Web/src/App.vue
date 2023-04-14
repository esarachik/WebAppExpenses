<!-- <template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
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
</template> -->
  

<template>


    
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>
  
  <div class="container-fluid">
    <div class="row">
      <side-bar></side-bar>
  
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>        
      </main>
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
  .bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
  
        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
          }
        }
  </style>
  
  
  
  
  
  