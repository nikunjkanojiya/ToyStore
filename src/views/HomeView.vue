<template>
  <div class="mx-auto px-4 max-w-9/10 sm:px-6 lg:px-8">
    <main class="flex justify-center relative">
      <img src="/src/assets/hero.png" alt="hero" class="w-full border-0 rounded-4xl p-4" />
      <div class="absolute top-1/2 left-10">
        <h2 class="text-3xl">Play Safe, Dream Big</h2>
        <p class="py-5">
          Discover a world where imagination meets safety. <br />
          Our curated collection of toys is designed to inspire joy in every child.
        </p>
        <button class="bg-yellow-300 p-3 rounded-2xl cursor-pointer">Shop New Arrivals</button>
      </div>
    </main>
    <section>
      <div class="text-center text-6xl p-5">Shop By Age</div>
      <div class="flex justify-around">
        <div class="text-center">
          <img
            src="/src/assets/logo.png"
            alt=""
            class="rounded-full border-2 border-amber-200 h-40 w-auto"
          />
          <p>Age 0-1</p>
        </div>
        <div class="text-center">
          <img
            src="/src/assets/logo.png"
            alt=""
            class="rounded-full border-2 border-amber-200 h-40 w-auto"
          />
          <p>Age 0-1</p>
        </div>
        <div class="text-center">
          <img
            src="/src/assets/logo.png"
            alt=""
            class="rounded-full border-2 border-amber-200 h-40 w-auto"
          />
          <p>Age 0-1</p>
        </div>
        <div class="text-center">
          <img
            src="/src/assets/logo.png"
            alt=""
            class="rounded-full border-2 border-amber-200 h-40 w-auto"
          />
          <p>Age 0-1</p>
        </div>
      </div>
    </section>
    <section class="p-10 bg-gray-200">
      <div class="flex justify-between py-5">
        <div>
          <p class="text-5xl">Find the perfect gift</p>
          <p>curated collection for every occations</p>
        </div>
        <div>Explore All Guide-></div>
      </div>
      <div class="flex justify-between">
        <div class="relative">
          <img src="/src/assets/logo.png" alt="" class="relative rounded-2 h-60 w-auto" />
          <div class="absolute bottom-2 left-2">
            <p>Birthday best seller</p>
            <p>Most love for celebrations</p>
          </div>
        </div>
        <div class="relative">
          <img src="/src/assets/logo.png" alt="" class="relative rounded-2 h-60 w-auto" />
          <div class="absolute bottom-2 left-2">
            <p>Birthday best seller</p>
            <p>Most love for celebrations</p>
          </div>
        </div>
        <div class="relative">
          <img src="/src/assets/logo.png" alt="" class="relative rounded-2 h-60 w-auto" />
          <div class="absolute bottom-2 left-2">
            <p>Birthday best seller</p>
            <p>Most love for celebrations</p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-10">
      <div class="text-center text-6xl p-10">Top Selling Toys</div>
      <div class="flex justify-between">
        <div class="rounded-4xl bg-amber-300">
          <img src="/src/assets/logo.png" alt="" class="h-50 w-auto" />
          <div class="p-5">
            <p>BestSeller</p>
            <p>Delux Activity cube</p>
            <p>age 1-3</p>
            <div class="flex justify-between">
              <p>$49.99</p>
              <img src="" alt="addCart" />
            </div>
          </div>
        </div>
        <div class="rounded-4xl bg-amber-300">
          <img src="/src/assets/logo.png" alt="" class="h-50 w-auto" />
          <div class="p-5">
            <p>BestSeller</p>
            <p>Delux Activity cube</p>
            <p>age 1-3</p>
            <div class="flex justify-between">
              <p>$49.99</p>
              <img src="" alt="addCart" />
            </div>
          </div>
        </div>
        <div class="rounded-4xl bg-amber-300">
          <img src="/src/assets/logo.png" alt="" class="h-50 w-auto" />
          <div class="p-5">
            <p>BestSeller</p>
            <p>Delux Activity cube</p>
            <p>age 1-3</p>
            <div class="flex justify-between">
              <p>$49.99</p>
              <img src="" alt="addCart" />
            </div>
          </div>
        </div>
        <div class="rounded-4xl bg-amber-300">
          <img src="/src/assets/logo.png" alt="" class="h-50 w-auto" />
          <div class="p-5">
            <p>BestSeller</p>
            <p>Delux Activity cube</p>
            <p>age 1-3</p>
            <div class="flex justify-between">
              <p>$49.99</p>
              <img src="" alt="addCart" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
</script>

<style scoped></style>
