<script setup lang="ts">
import type { CardAttributes } from '@/types'
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

interface Props {
  card: CardAttributes
}

const props = defineProps<Props>()
const router = useRouter()

const handleViewCardDetails = () => {
  router.push(`/question/${props.card.id}`)
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <span>Level: {{ card.level }}</span>
      <div>
        {{ card.isCompleted ? 'Completed' : 'Not Completed' }}
      </div>
    </div>

    <p class="card-title">
      {{ card.question }}
    </p>

    <div class="card-footer">
      <div>Short answer:</div>
      <p class="short-answer">
        {{ card.answer }}
      </p>
    </div>

    <AppButton @click="handleViewCardDetails"> View </AppButton>
  </div>
</template>
