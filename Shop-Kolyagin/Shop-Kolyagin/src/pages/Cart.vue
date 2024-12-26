<template>
    <div class="container mx-auto p-6">
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h1 class="text-3xl font-bold mb-4 text-gray-800">Корзина</h1>
        <div v-if="cart.length === 0" class="text-center text-gray-500">
          Корзина пуста.
        </div>
        <ul v-else>
          <li v-for="item in cart" :key="item.id" class="flex justify-between items-center border-b p-4 last:border-b-0">
            <span class="text-lg">{{ item.name }}</span>
            <span class="text-lg font-semibold">{{ item.price }}₽</span>
          </li>
        </ul>
        <div class="mt-4">
          <router-link to="/" class="inline-block mt-4 text-blue-500 hover:underline">Назад в магазин</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '../stores/store';
  
  const store = useStore();
  const cart = store.cart;
  </script>
  
  <style scoped>
  .container {
    max-width: 800px; /* Ограничиваем максимальную ширину контейнера */
  }
  </style>
  