<template>
  <div class="mx-auto max-w-9/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
    <!-- Hero intro -->
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-widest text-amber-800">Help center</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        Frequently asked questions
      </h1>
      <p class="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
        Everything you need to know about shopping at ToyStore — safe toys, fast delivery across
        Canada, and support for parents and gift-givers.
      </p>
    </div>

    <!-- Quick links -->
    <div class="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
      <div
        v-for="highlight in highlights"
        :key="highlight.title"
        class="rounded-2xl bg-amber-50 p-5 text-center ring-1 ring-amber-200/80"
      >
        <p class="text-2xl" aria-hidden="true">{{ highlight.icon }}</p>
        <p class="mt-2 text-sm font-bold text-gray-900">{{ highlight.title }}</p>
        <p class="mt-1 text-xs text-gray-600">{{ highlight.text }}</p>
      </div>
    </div>

    <!-- FAQ accordion -->
    <div class="mx-auto mt-12 max-w-3xl space-y-4">
      <details
        v-for="(item, index) in faqs"
        :key="item.question"
        class="group rounded-2xl bg-white ring-1 ring-amber-200/80 shadow-sm open:bg-amber-50/50"
        :open="index === 0"
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold text-gray-900 transition hover:text-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
        >
          <span>{{ item.question }}</span>
          <span
            class="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 transition group-open:rotate-45"
            aria-hidden="true"
          >
            +
          </span>
        </summary>
        <p class="border-t border-amber-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600">
          {{ item.answer }}
        </p>
      </details>
    </div>

    <!-- CTA -->
    <div
      class="mx-auto mt-14 max-w-3xl rounded-3xl bg-amber-50 p-8 text-center ring-1 ring-amber-200/80 shadow-md sm:p-10"
    >
      <h2 class="text-xl font-bold text-gray-900 sm:text-2xl">Still have questions?</h2>
      <p class="mt-2 text-sm text-gray-600 sm:text-base">
        Our team is happy to help with product recommendations, orders, or safety information.
      </p>
      <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <RouterLink
          to="/contact"
          class="inline-flex rounded-2xl bg-amber-400 px-6 py-3 text-sm font-bold text-gray-900 shadow-md transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          Contact us
        </RouterLink>
        <RouterLink
          to="/shop"
          class="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-bold text-gray-900 ring-1 ring-amber-200 transition hover:bg-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          Browse toys
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const highlights = [
  {
    icon: '🚚',
    title: 'Free delivery',
    text: 'On orders over $100 across Canada.',
  },
  {
    icon: '🛡️',
    title: 'Safety first',
    text: 'Age-appropriate, tested toys for every stage.',
  },
  {
    icon: '↩️',
    title: 'Easy returns',
    text: '30-day returns on unused items in original packaging.',
  },
]

const faqs = [
  {
    question: 'What ages are your toys suitable for?',
    answer:
      'We organize toys by age group (0–1, 2–4, 5–8, and 8+) so you can shop confidently. Each product listing shows a recommended age range. When in doubt, choose the band that matches your child’s current stage rather than sizing up too early.',
  },
  {
    question: 'Are your toys safe and non-toxic?',
    answer:
      'Yes. We prioritize toys that meet recognized safety standards and clearly label materials and small-parts warnings. Always check the age label on the box and supervise young children during play, especially with items that contain small pieces.',
  },
  {
    question: 'How does shipping work in Canada?',
    answer:
      'We ship within Canada using tracked delivery. Standard shipping rates apply at checkout. Orders over $100 qualify for free delivery, as shown in our site banner. Delivery times vary by province; most orders arrive within 5–10 business days.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit and debit cards. Prices are shown in CAD. You’ll see the final total, including any applicable taxes, before you complete your purchase at checkout.',
  },
  {
    question: 'Can I return or exchange a toy?',
    answer:
      'Unused items in original packaging may be returned within 30 days of delivery for a refund or store credit, unless marked as final sale. Opened plush or hygiene-sealed items cannot be returned for safety reasons. Contact us with your order number to start a return.',
  },
  {
    question: 'How do I create an account or sign in?',
    answer:
      'Use “Create account” in the header to register with your name, email, and password. “Sign in” lets you access your account on this device. Your session stays active until you sign out or close the browser tab.',
  },
  {
    question: 'How do I choose a gift for a child I don’t know well?',
    answer:
      'Shop by age on our homepage or use our gift guides for birthdays and celebrations. Bestsellers are a great starting point. If you’re unsure, contact us with the child’s age and interests and we’ll suggest a few options.',
  },
  {
    question: 'Do you offer gift wrapping or messages?',
    answer:
      'Gift wrapping and personalized message cards are available at checkout on eligible items. Wrapped orders may ship in a plain outer box so the surprise stays intact.',
  },
]
</script>

<style scoped>
details[open] summary .group-open\:rotate-45 {
  transform: rotate(45deg);
}
</style>
