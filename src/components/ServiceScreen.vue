<template>
  <div v-if="currentNode?.type == 'menu'">
    {{ currentNode.prompt }}
    <ul class="list-unstyled">
      <li
        v-for="(option, i) in currentNode.options"
        :key="option.digit"
        class="list-item border border-1 border-secondary-subtle p-3"
        @click="selectOption(option)"
      >
        <span>{{ i + 1 }}: </span>
        {{ option.label }}
      </li>
    </ul>
  </div>
  <div v-else-if="currentNode?.type == 'input'">
    <p>{{ currentNode.prompt }}</p>
    <input
      :type="currentNode.inputType"
      :placeholder="currentNode.placeholder"
      class="form-control"
      v-model="userInput"
    />
    <button class="btn btn-primary w-100 mt-2" @click="processInput">Continue</button>
  </div>
  <div v-else-if="currentNode?.type == 'action'">
    <p>{{ currentNode.prompt }}</p>
    <a class="btn btn-lg btn-success w-100 mt-2" :href="toTelHref">
      <span class="bi bi-telephone-outbound"></span> Done
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUssdStore } from '@/stores/ussd'

const ussdStore = useUssdStore()
const { currentNode, toTelHref } = storeToRefs(ussdStore)
const { selectOption, handleInput } = ussdStore
const userInput = ref('')

const processInput = () => {
  handleInput(userInput.value)
  userInput.value = ''
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
