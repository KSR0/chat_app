import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/ChatView.vue'
import AccountView from '@/views/AccountView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import { supabase } from '@/supabase'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
  ]
})

router.beforeEach(async (to, from, next) => {
	const {data} = await supabase.auth.getSession()
	const isLogged = !!data.session //Si session est null, isLogged == false, sinon est true
	const requiresAuth = to.matched.some((value) => value.meta.requiresAuth)
	if (requiresAuth && !isLogged) {
		next('/login')
	} else if (!requiresAuth && isLogged) {
		next('/')
	} else {
		next()
	}
});

export default router
