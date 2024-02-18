import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login-view',
      component: LoginView
    }
  ]
})

function checkAuthState() {
  return new Promise((resolve) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
}

router.beforeEach(async (to, from) => {
  const user = await checkAuthState();
  const isAuthenticated = !!user;

  if (!isAuthenticated && to.name !== 'login-view') {
    return { name: 'login-view' };
  }
  if (isAuthenticated && to.name === 'login-view') {
    return { name: 'home-view' };
  }
});
export default router
