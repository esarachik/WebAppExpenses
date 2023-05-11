<template>   
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Spend-Track</a>
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


  <style lang="scss">
  /* Reset de estilos */
/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cfff60
  }
  
  .menu ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    margin: 0 1em;
  }
  
  .menu a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    transition: color 0.2s;
  }
  
  .menu a:hover {
    color: #0077ff;
  }
  
  /* Estilos para el contenido 
  .contenido {
    margin: 2rem;
    text-align: center;
  }
  
  .contenido h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .contenido p {
    font-size: 1.5rem;
  }
   */
   body {
    font-size: .875rem;
  }
  
  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }
  
  /*
   * Sidebar
   */
  
  .sidebar {
    position: fixed;
    top: 0;
    /* rtl:raw:
    right: 0;
    */
    bottom: 0;
    /* rtl:remove */
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  
  @media (max-width: 767.98px) {
    .sidebar {
      top: 5rem;
    }
  }
  
  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  
  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }
  
  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #727272;
  }
  
  .sidebar .nav-link.active {
    color: #2470dc;
  }
  
  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }
  
  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
  
  /*
   * Navbar
   */
  
  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }
  
  .navbar .navbar-toggler {
    top: .25rem;
    right: 1rem;
  }
  
  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }
  
  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }
  
  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }
  


  </style>