<template>
  <div>
    <h1 class="display-5 fw-bold">Mantenimiento de categorías</h1>
    <form>
      <div class="form-group">
        <label for="categoria">Nueva categoría:</label>
        <input type="text" class="form-control" id="categoria" v-model="nuevaCategoria">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="agregarCategoria()">Agregar</button>
    </form>
    <ul>
      <li v-for="(categoria, index) in categoriesStore.categories" :key="index">
        {{ categoria }} <button class="btn btn-danger btn-sm" @click="eliminarCategoria(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template> 

<script src="./MantenimientoCategorias.ts"></script>


