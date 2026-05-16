import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const USERS_KEY = 'toystore_users'
const SESSION_KEY = 'toystore_session'
const REMEMBER_KEY = 'toystore_remember_email'

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export const useAuthStore = defineStore('auth', () => {
  const session = ref(null)

  function init() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY)
      session.value = raw ? JSON.parse(raw) : null
    } catch {
      session.value = null
    }
  }

  const isAuthenticated = computed(() => !!session.value)
  const currentUser = computed(() => session.value)

  function getRememberedEmail() {
    return localStorage.getItem(REMEMBER_KEY) || ''
  }

  function register({ name, email, password }) {
    const users = loadUsers()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'This email is already registered.' }
    }
    const user = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    }
    users.push(user)
    saveUsers(users)
    return { ok: true, user }
  }

  function login({ email, password, remember = false }) {
    const users = loadUsers()
    const user = users.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password,
    )
    if (!user) {
      return { ok: false, error: 'Invalid email or password.' }
    }

    const safe = { id: user.id, name: user.name, email: user.email }
    session.value = safe
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(safe))

    if (remember) {
      localStorage.setItem(REMEMBER_KEY, user.email)
    } else {
      localStorage.removeItem(REMEMBER_KEY)
    }

    return { ok: true }
  }

  function loginAfterRegister(user) {
    const safe = { id: user.id, name: user.name, email: user.email }
    session.value = safe
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(safe))
  }

  function logout() {
    session.value = null
    sessionStorage.removeItem(SESSION_KEY)
  }

  init()

  return {
    session,
    isAuthenticated,
    currentUser,
    getRememberedEmail,
    register,
    login,
    loginAfterRegister,
    logout,
    init,
  }
})
