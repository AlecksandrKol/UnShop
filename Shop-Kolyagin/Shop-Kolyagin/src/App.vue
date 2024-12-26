<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">Магазин</h1>
        <div class="space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-blue-500 transition-colors">Home</router-link>
          <router-link to="/cart" class="text-gray-700 hover:text-blue-500 transition-colors">Cart</router-link>
        </div>
      </div>
    </nav>

    <main class="container mx-auto p-6">
      <router-view />
    </main>
  </div>
</template>
