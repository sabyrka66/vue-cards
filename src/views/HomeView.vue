<script setup lang="ts">
import AppLoader from '@/components/AppLoader.vue'
import { useFetch } from '@/composables/useFetch'
import { API_URL } from '@/constants'
import type { QuestionApiItem } from '@/types'
import { onMounted, ref } from 'vue'

const questionCards = ref<QuestionApiItem[]>([])
const searchValue = ref<string>('')

const { fetchResponse, isLoading, error } = useFetch(async (): Promise<void> => {
  const response = await fetch(`${API_URL}/react`)

  if (!response.ok) {
    throw new Error('Failed to fetch questions')
  }

  const questions = (await response.json()) as QuestionApiItem[]
  questionCards.value = questions
})

onMounted(() => {
  void fetchResponse('react')
})
</script>

<template>
  <div>
    <div class="controlsContainer">
      <SearchField v-model="searchValue" />
    </div>

    <AppLoader v-if="isLoading" />
    <p v-if="error">{{ error }}</p>

    <QuestionCardList :items="questionCards" />
  </div>
</template>
