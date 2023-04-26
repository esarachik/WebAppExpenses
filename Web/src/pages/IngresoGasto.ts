
import { mapStores } from 'pinia'
import { useCategoriesStore } from '../stores/useCategoriesStore.js'

export default {
  data() {
    return {
      monto: 0,
      categoria: '',
      moneda: '',
      monedas: ['USD', 'EUR', 'ARS']
    }
  },
  computed: {
    ...mapStores(useCategoriesStore)
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
