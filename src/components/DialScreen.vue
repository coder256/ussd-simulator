<template>
  <div class="alert alert-primary fs-3 text-break">
    <span class="" v-if="!dialCode">Dial Code:</span>
    {{ dialCode }}
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUssdStore } from '@/stores/ussd'

const ussdStore = useUssdStore()
const { dialCode } = storeToRefs(ussdStore)
</script>

<style scoped>
div {
  border-left-width: 5px;
}
</style>
