<script setup>
import {onMounted, ref} from 'vue';
import { Modal } from 'bootstrap';

import Dashboard from "../components/Dashboard.vue";


const modalTitle = ref("Welcome back!");
const modalBody = ref("We are happy to see you again. <br> Gotta catch 'em all!");

onMounted(() => {
    // Check if the user has visited the site before by checking the cookie 'firstVisit'
    if (!document.cookie.split('; ').some((item) => item.trim().startsWith('firstVisit='))) {
      modalTitle.value = 'Welcome, first-time visitor!'
      modalBody.value = 'We are happy to see you here. This is the Pokédex app, where you can store your Pokémon collection for Pokémon Red and Blue <br><br> Gotta catch \'em all!';

      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1); // Expires in 1 year
      document.cookie = `firstVisit=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    }

    // Show a personalized welcome message
    setTimeout(() => {
    const modalInstance = new Modal(document.getElementById('myModal'));
    modalInstance.show();
  }, 200);
});


</script>

<template>
  <div class="navbar-jump"></div>
  <div class="column dashboard-title">
      <h2>Welcome to the Pokédex app!</h2>
  </div>

  <Dashboard/>

  <div class="modal" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"> {{ modalTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-html="modalBody">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-title{
  margin: 20px 0 50px;
}

</style>
