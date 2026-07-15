import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUssdStore = defineStore('ussd', () => {
  const currentNode = ref(null)
  const history = ref(null)
})
