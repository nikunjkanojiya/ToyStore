<template>
  <div class="bg-white">
    <div class="flex justify-around p-4">
      <div>
        <img src="/src/assets/logo.png" alt="logo" class="h-8 w-auto" />
        <p>
          Bringing smiles and safe play to every doorstep, because childhood dreams deserve the
          best.
        </p>
        <div>Icons</div>
      </div>
      <div>
        <h4>Quick links</h4>
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
      </div>
      <div>
        <h4>Supports</h4>
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
      </div>
      <div>
        <h4>Legal</h4>
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          to="/"
          >Home</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
