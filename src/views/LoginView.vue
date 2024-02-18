<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore';

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const username = ref('');
const showingLogin = ref(true);

function signUp() {
  authStore.registerUser({ email: email.value, password: password.value});
}

function login() {
  authStore.loginUser({ email: email.value, password: password.value });
}

function toggleShowLogin() {
  showingLogin.value = true;
}

function toggleShowSignUp() {
  showingLogin.value = false;
}
</script>

<template>
  <div class="column">
    <div class="navbar-jump"></div>
    <h1>Welcome to the Pokédex!</h1>
    <p>Please login or sign up to continue</p>

    <div class="login-toggle">
      <p @click="toggleShowLogin" :class="{ selected: showingLogin, 'not-selected': !showingLogin }">Login</p>
      <p @click="toggleShowSignUp" :class="{ selected: !showingLogin, 'not-selected': showingLogin }">I'm new here - Sign up!</p>
    </div>

    <div v-if="showingLogin" class="form-section">
      <h4>Login form</h4>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <button type="button" class="btn btn-primary" @click="login">Submit</button>
      </form>
    </div>

    <div v-if="!showingLogin" class="form-section">
      <h4>Sign up form</h4>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input v-model="username" type="text" class="form-control" id="username">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <button type="button" class="btn btn-primary" @click="signUp">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button:hover{
  background: var(--yellow-accent);
}

.selected {
  box-shadow: var(--blue-accent) 0 2px 0;
}

.not-selected {
  box-shadow: #c4c4c4 0 2px 0;
}

.form-section{
  width: 30vw;
  min-width: 350px;
}

.login-toggle{
  margin: 5vh 0 40px;
  display: flex;
  flex-direction: row;
}

.login-toggle p {
  width: 15vw;
  padding: 5px 0;
  margin: 0 2px;
  text-align: center;
}

.login-toggle p:hover {
  box-shadow: var(--yellow-accent) 0 3px 0;
  font-weight: bold;
}

</style>
