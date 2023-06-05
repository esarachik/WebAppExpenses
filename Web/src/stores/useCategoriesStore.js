import { defineStore } from 'pinia'
import { get } from '../utilities/httpClient'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
    url: "http://localhost:9000/api/categories"
  }),
  actions: {
    addCategory(category) {
      this.categories.push(category)
    },
    async fetchCategories() {
      get(this.url)
        .then((response) => {          
            this.categories = response.data        
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error)
        })
    }
  }
})




