<template>
  <main>
    <DialScreen />
    <ServiceScreen v-if="currentNode" />
    <TheWelcome v-else :services="services" @selected="selectedService" />

    <div class="mt-5 d-flex justify-content-between" v-if="history.length > 0">
      <button class="btn btn-outline-dark" @click="back">
        <span class="bi bi-arrow-left"></span> Back
      </button>
      <button class="btn btn-outline-dark" @click="reset">
        <span class="bi bi-arrow-clockwise"></span> Reset
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import DialScreen from '@/components/DialScreen.vue'
import { useUssdStore } from '@/stores/ussd'
import { storeToRefs } from 'pinia'
import type { Service } from '@/types'
import ServiceScreen from '@/components/ServiceScreen.vue'

const ussdStore = useUssdStore()
const { services, currentNode, history } = storeToRefs(ussdStore)
const { selectService, back, reset } = ussdStore

const selectedService = (service: Service) => {
  // console.log('selected service', service)
  selectService(service)
}
</script>
