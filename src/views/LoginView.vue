<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function singUp(event) {
  console.log(event)
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage); //TODO: handle error and remove console.log (side channel potential risk)
    });
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
    </div>

    <div class="hidden" id="sign-up-section">
      <p>Sign up form</p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" >
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password">
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
