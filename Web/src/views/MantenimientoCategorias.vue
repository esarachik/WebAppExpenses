<template>
  <div class="row pt-5">
    <div class="col-md-6">
      <h5>Ingreso de Categorías</h5>

      <form @submit.prevent="agregarCategoria">
        <div class="form-group pb-5">
          <label for="nombre">Nombre de la categoría:</label>
          <input type="text" id="nombre" v-model="nuevaCategoria" class="form-control" required>
        </div>
         <div class="text-right">
          <button type="submit" class="btn btn-secondary" @click.prevent="agregarCategoria()">Agregar Categoría</button>
        </div>
      </form>
    </div>

    <div class="col-md-6">
      <h5>Lista de Categorías</h5>

      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>           
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categoriesStore.categories" :key="categoria.id">
            <td>
              <div> 
              {{ categoria.name }}            
              <div class="float-end">
                <button @click="eliminarCategoria(categoria.id)" class="btn btn-light">
                  <vue-feather type="trash-2" size="20" stroke="red"></vue-feather>
                </button>
                <button @click="editarCategoria(categoria)" class="btn btn-light">
                    <vue-feather type="edit" size="20" ></vue-feather>
                </button>
              </div>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
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
    async mounted() {
      await this.categoriesStore.fetchCategories()
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
  
  
  
<!--
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
  
  -->
  