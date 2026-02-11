<template>
  <div class="p-4 border rounded-lg shadow transition">
    <h2 class="text-lg font-semibold">{{ name }}</h2>
    <p class="text-gray-600">{{ company }}</p>
    <p class="text-blue-500">
      <a :href="linkedin" target="_blank">LinkedIn</a>
    </p>
    <p class="text-gray-500 mt-2">{{ notes }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  company: string;
  linkedin: string;
  notes?: string;
}>();
</script>
