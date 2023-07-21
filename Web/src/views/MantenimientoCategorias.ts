
import { mapStores } from 'pinia'
import { useCategoriesStore } from '../stores/useCategoriesStore'
import { defineComponent } from 'vue';

export default defineComponent({
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
      if (this.nuevaCategoria.trim() === ''){
        alert("Ingrese Nombre Categoria")
        return;
      }
      this.categoriesStore.addCategory(this.nuevaCategoria.trim())
      this.nuevaCategoria = ''
    },
    // eliminarCategoria(index) {
    //   this.categorias.splice(index, 1)
    // }
  }
})

