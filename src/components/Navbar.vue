<script setup>
import { useAuthStore } from '../stores/AuthStore';
import {onMounted, ref} from "vue";
const authStore = useAuthStore();

function logout() {
  authStore.logoutUser();
}

const currentTheme = ref('light');

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme.value);
  applyTheme();
}

function applyTheme() {
  document.body.className = currentTheme.value === 'light' ? '' : 'bg-dark text-white';
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    currentTheme.value = storedTheme;
    applyTheme();
  }
});
</script>

<template>
  <nav class="navbar fixed-top bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/pokeball.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Pokédex
      </a>
      <span v-if="authStore.user.uid" class="navbar-text">
        <div class="dropdown-center">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{authStore.user.email}}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="toggleTheme">Toggle Dark/Light Mode</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout">Logout</a></li>
          </ul>
        </div>
      </span>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-toggle
{
  width: fit-content;
  min-width: 160px;
  color: white;
}

.navbar{
  color: white;
}

.navbar-brand{
  color: white;
  font-family: 'Protest Strike', sans-serif;
}
</style>
