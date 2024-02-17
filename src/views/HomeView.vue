<script setup>
import { useAuthStore } from '../stores/AuthStore';
import Dashboard from "@/components/Dashboard.vue";

const authStore = useAuthStore();

function logout() {
  authStore.logoutUser();
}

</script>

<template>
  <div class="navbar-jump"></div>
  <div class="column dashboard-title">
      <h2>Welcome to the Pokedex app!</h2>
  </div>

  <Dashboard/>

  <button @click="logout">Logout</button>
</template>

<style scoped>
.dashboard-title{
  margin: 20px 0 5vh;
}

</style>
