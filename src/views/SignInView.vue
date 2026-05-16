<template>
  <div class="mx-auto max-w-9/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-md">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sign in</h1>
      <p class="mt-2 text-sm text-gray-600">
        New to ToyStore?
        <RouterLink to="/create-account" class="font-semibold text-amber-800 hover:text-amber-700">
          Create an account
        </RouterLink>
      </p>

      <form
        class="mt-8 space-y-5 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200/80 shadow-md"
        @submit.prevent="onSubmit"
      >
        <div>
          <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            autocomplete="email"
            class="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          />
        </div>

        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input
            v-model="remember"
            type="checkbox"
            class="size-4 rounded border-gray-300 text-amber-600 focus:ring-amber-400"
          />
          Remember me
        </label>

        <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-bold text-gray-900 shadow-md transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          {{ loading ? 'Signing in…' : 'Sign in' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const email = ref('')
const password = ref('')
const remember = ref(false)
const error = ref('')
const loading = ref(false)

onMounted(() => {
  email.value = auth.getRememberedEmail()
})

async function onSubmit() {
  error.value = ''
  loading.value = true

  const result = auth.login({
    email: email.value,
    password: password.value,
    remember: remember.value,
  })

  loading.value = false

  if (!result.ok) {
    error.value = result.error
    return
  }

  await router.push('/')
}
</script>
