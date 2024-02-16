<script setup>
import { useAuthStore } from '../stores/AuthStore';

const authStore = useAuthStore();

function singUp() {
  const email = document.getElementById('email-signup').value
  const password = document.getElementById('password-signup').value
  const username = document.getElementById('username-signup').value
  authStore.registerUser({email, password});
}

function login() {
  const email = document.getElementById('email-login').value
  const password = document.getElementById('password-login').value
  authStore.loginUser({ email, password });
}

function showSingUp() {
  document.getElementById('login-section').classList.add('hidden')
  document.getElementById('sign-up-section').classList.remove('hidden')
}

function showLogin() {
  document.getElementById('sign-up-section').classList.add('hidden')
  document.getElementById('login-section').classList.remove('hidden')
}

</script>

<template>
  <div class="column">
    <div class="navbar-jump"></div>
    <h1>Welcome to the Pokédex!</h1>
    <p>Please login or sign up to continue</p>

    <div>
      <button @click="showLogin">Login</button>
      <button @click="showSingUp">I'm new here - Sign up!</button>
    </div>

    <div class="visible" id="login-section">
      <p>Login form</p>
      <form>
        <div class="mb-3">
          <label for="email-login" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email-login">
        </div>
        <div class="mb-3">
          <label for="password-login" class="form-label">Password</label>
          <input type="password" class="form-control" id="password-login">
        </div>
        <button type="button" class="btn btn-primary" @click="login">Submit</button>
      </form>
    </div>

    <div class="hidden" id="sign-up-section">
      <p>Sign up form</p>
      <form>
        <div class="mb-3">
          <label for="username-signup" class="form-label">Username</label>
          <input type="text" class="form-control" id="username-signup">
        </div>
        <div class="mb-3">
          <label for="username-signup" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email-signup">
        </div>
        <div class="mb-3">
          <label for="password-signup" class="form-label">Password</label>
          <input type="password" class="form-control" id="password-signup">
        </div>
        <button type="button" class="btn btn-primary" @click="singUp">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

.visible {
  display: block;
}

.hidden {
  display: none;
}

</style>
