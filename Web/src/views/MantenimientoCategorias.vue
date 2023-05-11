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
  
  <script>

import { mapStores } from 'pinia'
import { useCategoriesStore } from '../stores/useCategoriesStore.js'

export default {
  data() {
    return {
      nuevaCategoria: '',
    }
  },
  computed: {
    ...mapStores(useCategoriesStore)
  },
  methods: {
    agregarCategoria() {
      if (this.nuevaCategoria.trim() !== '') {
        this.categoriesStore.addCategory(this.nuevaCategoria.trim())
        this.nuevaCategoria = ''
      }
    },
    // eliminarCategoria(index) {
    //   this.categorias.splice(index, 1)
    // }
  }
}

</script>
  
  
  