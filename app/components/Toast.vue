<template>
  <div class="fixed top-4 right-4 space-y-2 z-50">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="toastClass(toast.type)"
      class="px-4 py-2 rounded shadow text-white text-sm animate-fade"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "~/composables/useToast";

const { toasts } = useToast();

function toastClass(type: string) {
  return {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  }[type];
}
</script>

<style>
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade {
  animation: fade 0.3s ease-out;
}
</style>
