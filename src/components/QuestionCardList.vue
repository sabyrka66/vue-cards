<script setup lang="ts">
import type { CardAttributes, QuestionApiItem } from '@/types'
import QuestionCard from '@/components/QuestionCard.vue'
import { computed } from 'vue'

interface Props {
  items: QuestionApiItem[]
}

const props = defineProps<Props>()

const adaptCard = (item: QuestionApiItem): CardAttributes => ({
  id: item.id,
  level: item.level,
  isCompleted: item.completed,
  question: item.question,
  answer: item.answer,
})

const cards = computed(() => props.items.map((item) => adaptCard(item)))
</script>

<template>
  <div class="card-list">
    <QuestionCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>
