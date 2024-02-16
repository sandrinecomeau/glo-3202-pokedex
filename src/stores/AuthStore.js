import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from "@/router/index.js";

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const auth = getAuth();
  const init = () => {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        user.value = userDetails;
      } else {
        user.value = {};
      }
    });
  };
  const registerUser = (credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push({ name: 'home-view' });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const loginUser = (credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push({ name: 'home-view' });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        user.value = {};
        router.push({ name: 'login-view' });
        console.log('exited');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    init,
    user
  };
});
