<script setup lang="ts">
import SearchIcon from './icons/SearchIcon.vue';

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <label class="input-container">
    <SearchIcon />

    <input type="text" placeholder="Search..." :value="modelValue" @input="onInput" class="input" />
  </label>
</template>


