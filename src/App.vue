<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="main-layout">
    <AppHeader />

    <div class="main-wrapper">
      <main class="main">
        <RouterView />
      </main>

      <footer class="footer">
        Vue Question Cards Application | {{ new Date().getFullYear() }}
        <br />
        by Sabyrka
      </footer>
    </div>
  </div>
</template>

<style scoped>
.mainLayout {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}

.mainWrapper {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  overflow-y: auto;
}

.main {
  padding-block: 20px;
}

.footer {
  width: 100%;
  padding: 15px 10px;
  background-color: transparent;
  text-align: center;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
}
</style>
