<template>
  <div class="mx-auto px-4 max-w-9/10 sm:px-6 lg:px-8">
    <main class="relative overflow-hidden rounded-4xl shadow-lg ring-1 ring-amber-200/60">
      <img
        src="/src/assets/hero.png"
        alt="Children playing safely with colorful toys"
        class="h-[min(70vh,32rem)] w-full object-cover sm:h-[min(75vh,36rem)]"
      />
      <div
        class="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/10"
        aria-hidden="true"
      />
      <div class="absolute inset-0 flex items-center px-6 py-10 sm:px-12 md:px-16">
        <div class="max-w-xl text-white">
          <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
            Welcome to ToyStore
          </p>
          <h2 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Play Safe, Dream Big
          </h2>
          <p class="mt-4 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            Discover a world where imagination meets safety. Our curated collection of toys is
            designed to inspire joy in every child.
          </p>
          <button
            type="button"
            class="mt-8 cursor-pointer rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-md transition hover:bg-amber-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 sm:text-base"
          >
            Shop New Arrivals
          </button>
        </div>
      </div>
    </main>
    <section class="my-12 px-4 py-10 sm:my-16 sm:px-6 sm:py-14 lg:my-20 lg:py-16">
      <h2 class="mb-10 text-center text-4xl font-bold tracking-tight text-gray-900 md:mb-12 md:text-5xl">
        Shop By Age
      </h2>
      <div class="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-10">
        <button
          v-for="age in ageGroups"
          :key="age.label"
          type="button"
          class="group flex flex-col items-center gap-4 rounded-2xl p-5 transition hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:p-6"
        >
          <div
            class="flex size-28 items-center justify-center overflow-hidden rounded-full border-4 border-amber-200 bg-amber-50 shadow-md ring-2 ring-white transition group-hover:border-amber-400 group-hover:shadow-lg sm:size-36"
          >
            <img
              :src="age.image"
              :alt="age.label"
              class="size-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <p class="text-base font-semibold text-gray-800 sm:text-lg">{{ age.label }}</p>
        </button>
      </div>
    </section>
    <section class="rounded-3xl bg-gray-200 p-8 md:p-10">
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-4xl font-bold text-gray-900 md:text-5xl">Find the perfect gift</p>
          <p class="mt-2 text-lg text-gray-600">curated collection for every occations</p>
        </div>
        <p class="shrink-0 text-sm font-semibold text-amber-800">Explore All Guide-></p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="n in 3"
          :key="n"
          class="group relative aspect-4/5 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-900/10 transition hover:shadow-xl"
        >
          <img
            src="/src/assets/logo.png"
            alt="Birthday best seller"
            class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent"
            aria-hidden="true"
          />
          <div class="absolute inset-x-0 bottom-0 p-5 text-white">
            <p class="text-lg font-bold leading-tight md:text-xl">Birthday best seller</p>
            <p class="mt-1 text-sm leading-relaxed text-white/90">Most love for celebrations</p>
          </div>
        </article>
      </div>
    </section>
    <section class="my-10">
      <div class="text-center text-6xl p-10">Top Selling Toys</div>
      <div class="flex flex-wrap justify-between gap-6">
        <div
          v-for="toy in topSellingToys"
          :key="toy.productname"
          class="flex w-full max-w-xs flex-col overflow-hidden rounded-4xl bg-amber-100 shadow-md ring-1 ring-amber-200/80 sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
        >
          <div class="flex justify-center bg-amber-50 px-4 pt-4">
            <img :src="toy.image" :alt="toy.productname" class="h-44 w-auto object-contain" />
          </div>
          <div class="flex flex-1 flex-col gap-2 p-5">
            <span
              class="inline-flex w-fit rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm"
            >
              {{ toy.tag }}
            </span>
            <h3 class="text-xl font-semibold leading-snug text-gray-900">
              {{ toy.productname }}
            </h3>
            <p class="text-sm text-gray-600">Age {{ toy.agerange }}</p>
            <div class="mt-auto flex items-center justify-between pt-3">
              <p class="text-lg font-bold text-gray-900">${{ toy.price.toFixed(2) }}</p>
              <button
                type="button"
                class="group flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-gray-800 shadow-sm transition hover:bg-amber-500 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                aria-label="Add to cart"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                  class="size-5 transition group-hover:scale-110"
                >
                  <path
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import products from '../../data.json'

const ageGroups = [
  { label: 'Age 0-1', image: '/src/assets/logo.png' },
  { label: 'Age 2-4', image: '/src/assets/logo.png' },
  { label: 'Age 5-8', image: '/src/assets/logo.png' },
  { label: 'Age 8+', image: '/src/assets/logo.png' },
]

const topSellingToys = products.filter((product) => product.tag === 'Bestseller')
</script>

<style scoped></style>
