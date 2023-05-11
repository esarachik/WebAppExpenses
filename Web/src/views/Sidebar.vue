<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                <li><router-link class="nav-link" to="/">
                    <vue-feather type="home" size="12"></vue-feather>Home</router-link></li>
                </li>
                <li class="nav-item">
                <li><router-link class="nav-link" to="/ingreso-gasto">
                    <vue-feather type="credit-card" size="12"></vue-feather> Ingreso de gasto</router-link></li>
                </li>
                <li class="nav-item">
                <li><router-link class="nav-link" to="/mantenimiento-categorias">
                    <vue-feather type="list" size="12"></vue-feather> Mantenimiento de categorías</router-link></li>
                </li>
                <li class="nav-item">
                <li><router-link class="nav-link" to="/mantenimiento-monedas">
                    <vue-feather type="dollar-sign" size="12"></vue-feather>Mantenimiento de monedas </router-link></li>
                </li>
            </ul>
        </div>
    </nav>
</template>
