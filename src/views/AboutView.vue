<template>
  <div class="mx-auto max-w-9/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
    <!-- Hero -->
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-widest text-amber-800">Our story</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        About ToyStore
      </h1>
      <p class="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
        We started with a simple belief: every child deserves toys that are safe, joyful, and built
        to spark imagination. Today we help families across Canada discover play they can trust.
      </p>
    </div>

    <!-- Mission banner -->
    <section
      class="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-4xl shadow-lg ring-1 ring-amber-200/60"
    >
      <img
        src="/src/assets/hero.png"
        alt="Children enjoying colorful toys"
        class="h-56 w-full object-cover sm:h-72"
      />
      <div
        class="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-black/20"
        aria-hidden="true"
      />
      <div class="absolute inset-0 flex items-center px-6 sm:px-10">
        <div class="max-w-lg text-white">
          <p class="text-sm font-semibold uppercase tracking-widest text-amber-300">Our mission</p>
          <p class="mt-2 text-2xl font-bold leading-tight sm:text-3xl">Play Safe, Dream Big</p>
          <p class="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            We curate age-appropriate toys from trusted brands, with clear labels and honest
            guidance so parents can shop with confidence.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="mx-auto mt-14 max-w-5xl">
      <h2 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl">What we stand for</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="value in values"
          :key="value.title"
          class="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200/80"
        >
          <p class="text-2xl" aria-hidden="true">{{ value.icon }}</p>
          <h3 class="mt-3 text-lg font-bold text-gray-900">{{ value.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">{{ value.description }}</p>
        </article>
      </div>
    </section>

    <!-- Story + stats -->
    <section class="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14">
      <div class="rounded-3xl bg-gray-100 p-8 ring-1 ring-gray-200/80 sm:p-10">
        <h2 class="text-2xl font-bold text-gray-900">How it began</h2>
        <p class="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
          ToyStore was founded by parents who struggled to find toys that balanced fun, quality, and
          safety in one place. What began as a small local shop grew into an online store serving
          families from coast to coast — still guided by the same hands-on care we gave our own
          kids.
        </p>
        <p class="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
          Every product in our catalog is chosen for durability, clear age guidance, and the kind of
          play that helps children learn, laugh, and grow. We work closely with suppliers who share
          our standards and stand behind what they make.
        </p>
      </div>

      <div class="flex flex-col justify-center gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-200/80"
        >
          <p class="text-3xl font-bold text-amber-600 sm:text-4xl">{{ stat.value }}</p>
          <div>
            <p class="font-semibold text-gray-900">{{ stat.label }}</p>
            <p class="mt-0.5 text-sm text-gray-600">{{ stat.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why shop with us -->
    <section
      class="mx-auto mt-14 max-w-5xl rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200/80 sm:p-10"
    >
      <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Why families choose us</h2>
      <ul class="mt-6 space-y-4">
        <li
          v-for="reason in reasons"
          :key="reason"
          class="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base"
        >
          <span
            class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-gray-900"
            aria-hidden="true"
          >
            ✓
          </span>
          {{ reason }}
        </li>
      </ul>
    </section>

    <!-- CTA -->
    <div
      class="mx-auto mt-14 max-w-3xl rounded-3xl bg-white p-8 text-center shadow-md ring-1 ring-amber-200/80 sm:p-10"
    >
      <h2 class="text-xl font-bold text-gray-900 sm:text-2xl">Ready to explore?</h2>
      <p class="mt-2 text-sm text-gray-600 sm:text-base">
        Browse toys by age, check our FAQ, or reach out — we are here to help.
      </p>
      <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <RouterLink
          to="/shop"
          class="inline-flex rounded-2xl bg-amber-400 px-6 py-3 text-sm font-bold text-gray-900 shadow-md transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          Shop now
        </RouterLink>
        <RouterLink
          to="/faq"
          class="inline-flex rounded-2xl bg-amber-50 px-6 py-3 text-sm font-bold text-gray-900 ring-1 ring-amber-200 transition hover:bg-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          Read FAQ
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-bold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          Contact us
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const values = [
  {
    icon: '🛡️',
    title: 'Safety first',
    description:
      'Age labels, material transparency, and trusted brands — so playtime stays worry-free.',
  },
  {
    icon: '✨',
    title: 'Joyful discovery',
    description:
      'Toys that encourage creativity, movement, and learning at every stage of childhood.',
  },
  {
    icon: '🤝',
    title: 'Family focused',
    description:
      'Clear recommendations, gift guides, and support when you are not sure what to pick.',
  },
  {
    icon: '🍁',
    title: 'Proudly Canadian',
    description:
      'Shipping across Canada with prices in CAD and delivery you can track from checkout.',
  },
]

const stats = [
  { value: '500+', label: 'Products curated', detail: 'Hand-picked for quality and play value' },
  { value: '50k+', label: 'Happy families', detail: 'Orders delivered since we opened online' },
  { value: '4', label: 'Age groups', detail: 'Shop easily from newborn to big kids' },
]

const reasons = [
  'Free delivery on orders over $100 across Canada.',
  'Shop by age, bestsellers, and gift guides on our homepage.',
  '30-day returns on unused items in original packaging.',
  'Dedicated support for orders, gifts, and product questions.',
]
</script>

<style scoped></style>
