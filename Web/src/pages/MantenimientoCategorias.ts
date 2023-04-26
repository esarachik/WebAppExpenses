
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


