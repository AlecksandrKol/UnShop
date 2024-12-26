<template>
    <div class="container mx-auto p-4">
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6" v-if="product">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ product.name }}</h1>
        <p class="text-lg text-gray-700 mb-4">Цена: <span class="font-semibold text-green-500">{{ product.price }}₽</span></p>
        <button @click="addToCart(product)" class="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200">Добавить в корзину</button>
        <router-link to="/" class="block mt-4 text-center text-blue-500 hover:underline">Назад</router-link>
      </div>
      <div v-else class="text-center text-gray-500">Загрузка...</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from '../stores/store';
  
  const route = useRoute();
  const store = useStore();
  const product = ref(null);
  
  onMounted(() => {
    const id = route.params.id;
    product.value = store.products.find(p => p.id === Number(id));
  });
  
  function addToCart(product) {
    store.addToCart(product);
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px; /* Ограничиваем максимальную ширину контейнера */
  }
  </style>
  