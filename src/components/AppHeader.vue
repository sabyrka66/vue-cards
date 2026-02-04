<script setup lang="ts">
import AppButton from './AppButton.vue'
import logo from '@/assets/icons/logo.svg'
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <div class="logo">
        <img :src="logo" alt="Logo" />
        <span>Vue Cards</span>
      </div>
    </RouterLink>

    <div class="actions">
      <AppButton @click="$router.push('/add-question')"> Add </AppButton>
      <AppButton> Log In </AppButton>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: var(--color-bg);
  padding-inline: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0 0 0 / 0.2);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  user-select: none;

  img {
    width: 42px;
  }

  span {
    font-weight: 500;
    font-size: 18px;
    color: #41b883;
  }
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
