import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    products: [
      { id: 1, name: 'Товар 1', price: 100 },
      { id: 2, name: 'Товар 2', price: 200 },
      { id: 3, name: 'Товар 3', price: 300 },
    ],
    cart: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
});
