<template>
  <div class="row pt-5">
    <div class="col-md-6  offset-md-3">

      <form @submit.prevent="agregarCategoria">
        <div class="row">         
          <div class="col-md-4 offset-md-7">
            <input type="text" id="nombre" v-model="nuevaCategoria" class="form-control" required placeholder="Nombre Categoria">
          </div>
          <div class="col-md-1">
            <button type="submit" class="btn" @click.prevent="agregarCategoria()"> <vue-feather type="plus-circle" size="20"></vue-feather></button>
          </div>
        </div>        
      </form>

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
                  <button @click="eliminarCategoria(categoria.id)" class="btn">
                    <vue-feather type="trash-2" size="20" stroke="red"></vue-feather>
                  </button>
                  <button @click="editarCategoria(categoria)" class="btn">
                    <vue-feather type="edit" size="20"></vue-feather>
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