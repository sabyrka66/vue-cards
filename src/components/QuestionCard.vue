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

<style scoped>
.card {
  width: 300px;
  height: 350px;
  border-radius: 10px;
  padding: 15px;
  background-color: var(--color-bg-card);
  color: var(--color-text);
  box-shadow: 0 0 8px 5px rgba(0 0 0 / 0.1);

  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card-header {
  display: flex;
  gap: 10px;
}

.card-title {
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
}

.card-footer {
  margin-top: auto;
}

.short-answer {
  font-size: 14px;
  filter: blur(2px);
  font-style: italic;
  cursor: pointer;
  transition-duration: 0.4s;
}

.short-answer:hover {
  filter: none;
}

.card button {
  align-self: flex-end;
}
</style>
