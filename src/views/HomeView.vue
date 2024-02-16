<template>
  <div class="navbar-jump"></div>
  <h2>Welcome to the Pokedex app!</h2>
  <table class="table  table-striped">
     <thead>
      <tr>
        <th scope="col">Dex</th>
        <th scope="col">Image</th>
        <th scope="col">Species</th>
        <th scope="col">Type</th>
        <th scope="col">+ ADD</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">001</th>
        <td>img</td>
        <td>Bulbasaur</td>
        <td>Plant</td>
        <td>x</td>
      </tr>
      <tr>
        <th scope="row">003</th>
        <td>img</td>
        <td>Charmander</td>
        <td>Fire</td>
        <td>x</td>
      </tr>
      <tr>
        <th scope="row">025</th>
        <td>img</td>
        <td>Pikachu</td>
        <td>Electric</td>
        <td>x</td>
      </tr>
    </tbody>
  </table>

  <button @click="logout">Logout</button>
</template>
<script setup>
import { useAuthStore } from '../stores/AuthStore';
import router from "@/router/index.js";

const authStore = useAuthStore();

function logout() {
  authStore.logoutUser();
}

</script>
