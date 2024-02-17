import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../stores/AuthStore';

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

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.user.uid;
  //const isAuthenticated = true;
  if (
    !isAuthenticated && to.name !== 'login-view'
  ) {
    return { name: 'login-view' }
  }
  if (
    isAuthenticated && to.name === 'login-view'
  ) {
    return { name: 'home-view' }
  }
})

export default router
