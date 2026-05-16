<template>
  <div class="mx-auto max-w-9/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-md">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create account</h1>
      <p class="mt-2 text-sm text-gray-600">
        Already have an account?
        <RouterLink to="/sign-in" class="font-semibold text-amber-800 hover:text-amber-700">
          Sign in
        </RouterLink>
      </p>

      <form
        class="mt-8 space-y-5 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200/80 shadow-md"
        @submit.prevent="onSubmit"
      >
        <div>
          <label for="name" class="block text-sm font-medium text-gray-900">Full name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            autocomplete="name"
            class="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          />
        </div>

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
            minlength="6"
            autocomplete="new-password"
            class="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          />
        </div>

        <div>
          <label for="confirm" class="block text-sm font-medium text-gray-900"
            >Confirm password</label
          >
          <input
            id="confirm"
            v-model="confirmPassword"
            type="password"
            required
            autocomplete="new-password"
            class="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          />
        </div>

        <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-bold text-gray-900 shadow-md transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          {{ loading ? 'Creating account…' : 'Create account' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters.'
    return
  }

  loading.value = true

  const result = auth.register({
    name: name.value,
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (!result.ok) {
    error.value = result.error
    return
  }

  auth.loginAfterRegister(result.user)
  await router.push('/')
}
</script>
