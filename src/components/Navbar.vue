<script setup>
import { useAuthStore } from '../stores/AuthStore';
const authStore = useAuthStore();
</script>

<template>
  <p>LOGIN</p>
  <nav class="navbar fixed-top bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/pokeball.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Pokédex
      </a>
      <span v-if="authStore.user.uid">
        <p>{{authStore.user.email}}</p>
      </span>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  color: white;
}

.navbar-brand{
  color: white;
  font-family: 'Protest Strike', sans-serif;
}
</style>
<script setup>
</script>
