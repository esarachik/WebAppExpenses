import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
          categories:['Comida', 'Transporte', 'Entretenimiento']
        }),  
    actions: {
      addCategory(category) {
        this.categories.push(category)
      },
    },
  })