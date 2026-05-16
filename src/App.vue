<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>
<style scoped></style>
