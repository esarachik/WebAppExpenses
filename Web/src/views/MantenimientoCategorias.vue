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

<script src="./MantenimientoCategorias"></script>