<template>
  <div class="min-h-screen bg-white text-gray-900">
    <header class="bg-white shadow p-4 mb-6">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">JobTracker</h1>
        <nav>
          <NuxtLink to="/" class="mr-4 text-blue-500 hover:underline"
            >Dashboard</NuxtLink
          >
          <NuxtLink to="/recruiters" class="text-blue-500 hover:underline"
            >Recruiters</NuxtLink
          >
        </nav>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4">
      <NuxtPage />
    </main>
    <Toast />
    <footer class="bg-white shadow mt-6 p-4 text-center text-gray-500 text-sm">
      JobTracker App
    </footer>
  </div>
</template>

<script setup lang="ts">
import Toast from "~/components/Toast.vue";
</script>
