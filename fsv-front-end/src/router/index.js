import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import AccountPage from '../views/AccountPage.vue'
import AccessDeniedPage from '../views/AccessDeniedPage.vue'

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/sign-in/:id',
    name: 'SignIn',
    component: SignInPage,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUpPage,
  },
  {
    path: '/account/:id',
    name: 'Account',
    component: AccountPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    redirect: '/products',
    meta: { requiresAuth: true },
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedPage,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/sign-in/'); // Redirect to sign-in with default ID
    } else {
      next(); // Allow navigation if authenticated
    }
  } else if (to.path.startsWith('/sign-in/') && isAuthenticated()) {
    const userId = getCurrentUserId();
    const accountId = to.params.id;

    if (userId === accountId) {
      next(); // Allow access to own account page
    } else {
      next('/access-denied'); // Redirect to access denied page
    }
  } else {
    next();
  }
});

export default router
