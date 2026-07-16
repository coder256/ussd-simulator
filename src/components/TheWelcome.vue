<template>
  <h3>Welcome screen</h3>
  <ul class="list-unstyled">
    <li
      class="list-item border border-1 border-secondary-subtle p-3"
      v-for="(s, i) in services"
      :key="s.id"
      @click="select(s)"
    >
      <span>{{ i + 1 }}: </span>
      {{ s.label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Service } from '@/types'

defineProps<{
  services: Service[]
}>()

const emit = defineEmits(['selected'])

const select = (service: Service) => emit('selected', service)
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
