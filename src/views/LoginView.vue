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
  document.getElementById('sign-up-toggle').classList.add('selected')
  document.getElementById('sign-up-toggle').classList.remove('not-selected')
  document.getElementById('login-toggle').classList.add('not-selected')
}

function showLogin() {
  document.getElementById('sign-up-section').classList.add('hidden')
  document.getElementById('login-section').classList.remove('hidden')
  document.getElementById('login-toggle').classList.add('selected')
  document.getElementById('login-toggle').classList.remove('not-selected')
  document.getElementById('sign-up-toggle').classList.add('not-selected')
}
</script>

<template>
  <div class="column">
    <div class="navbar-jump"></div>
    <h1>Welcome to the Pokédex!</h1>
    <p>Please login or sign up to continue</p>

    <div class="login-toggle">
      <p @click="showLogin" id="login-toggle" class="selected">Login</p>
      <p @click="showSingUp" id="sign-up-toggle" class="not-selected">I'm new here - Sign up!</p>
    </div>

    <div class="form-section visible" id="login-section">
      <h4>Login form</h4>
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

    <div class="form-section hidden" id="sign-up-section">
      <h4>Sign up form</h4>
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
button:hover{
  background: var(--yellow-accent);
}

h1{
  margin-top:20px;
}

.visible {
  display: block;
}

.hidden {
  display: none;
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
