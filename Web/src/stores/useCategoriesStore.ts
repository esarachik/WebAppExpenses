import { defineStore } from 'pinia'
import { get, post } from '../utilities/httpClient'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as any,
    url: "http://localhost:9000/api/categories" as string
  }),
  actions: {
    addCategory(category:any) {
      this.categories.push(category)
      //post(this.url, )
    },
    async fetchCategories() {
      get(this.url,'')
        .then((response:any) => {          
            this.categories = response.data        
        })
        .catch((error: any) => {
          console.error('Error al realizar la solicitud:', error)
        })
    }
  }
})
