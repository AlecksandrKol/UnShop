<template>
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">Магазин</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <!-- <img :src="product.image" alt="" class="w-full h-48 object-cover"/> -->
          <div class="p-4">
            <h2 class="font-semibold text-xl mb-2">{{ product.name }}</h2>
            <p class="text-lg text-gray-700">Цена: {{ product.price }}₽</p>
            <div class="mt-4 flex justify-between items-center">
              <router-link :to="{ name: 'Product', params: { id: product.id } }" class="text-blue-500 hover:underline">Посмотреть</router-link>
              <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '../stores/store';
  
  const store = useStore();
  const products = store.products;
  
  function addToCart(product) {
    store.addToCart(product);
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px; /* Ограничиваем максимальную ширину контейнера */
  }
  </style>
  