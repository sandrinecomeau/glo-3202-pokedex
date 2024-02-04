<script setup>

function singUp() {
  document.getElementById('login-section').classList.add('hidden')
  document.getElementById('sign-up-section').classList.remove('hidden')
}

function login() {
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
      <button @click="login">Login</button>
      <button @click="singUp">I'm new here - Sign up!</button>
    </div>

    <div class="visible" id="login-section">
      <p>Login form</p>
    </div>

    <div class="hidden" id="sign-up-section">
      <p>Sign up form</p>
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
