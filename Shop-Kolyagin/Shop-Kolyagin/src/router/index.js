import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import Cart from '../pages/Cart.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'Product', component: Product },
  { path: '/cart', name: 'Cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
