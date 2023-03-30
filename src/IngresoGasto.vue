<template>
    <div>
      <h1 class="display-5 fw-bold">Ingreso de gasto</h1>
      <form>
        <div class="form-group">
          <label for="monto">Monto:</label>
          <input type="number" class="form-control" id="monto" v-model="monto">
        </div>
        <div class="form-group">
          <label for="categoria">Categoría:</label>
          <select class="form-control" id="categoria" v-model="categoria">
            <option v-for="categoria in categorias" :key="categoria">{{ categoria }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="moneda">Moneda:</label>
          <select class="form-control" id="moneda" v-model="moneda">
            <option v-for="moneda in monedas" :key="moneda">{{ moneda }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="guardarGasto()">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        monto: 0,
        categoria: '',
        moneda: '',
        categorias: ['Comida', 'Transporte', 'Entretenimiento'],
        monedas: ['USD', 'EUR', 'ARS']
      }
    },
    methods: {
      guardarGasto() {
        // Aquí iría la lógica para guardar el gasto en la base de datos o en algún otro lugar
        console.log(`Gasto guardado: ${this.monto} ${this.moneda} en ${this.categoria}`)
        // Luego de guardar el gasto, limpiamos los campos
        this.monto = 0
        this.categoria = ''
        this.moneda = ''
      }
    }
  }
  </script>
  