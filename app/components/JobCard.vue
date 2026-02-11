<template>
  <div class="p-4 rounded-lg shadow bg-white text-gray-800">
    <h3 class="text-lg font-semibold">{{ position }}</h3>
    <p class="text-gray-600">{{ company }}</p>

    <div class="flex justify-between items-center mt-2">
      <span :class="badgeClass" class="px-2 py-1 text-sm text-white rounded">
        {{ status }}
      </span>
      <span class="text-sm text-gray-500">{{ date }}</span>
    </div>
    <div class="flex space-x-2">
      <button
        @click="$emit('edit')"
        class="cursor-pointer mt-3 text-sm text-blue-600 px-4 py-2 rounded border border-blue-600 hover:bg-blue-600 hover:text-white transition"
      >
        Edit
      </button>
      <button
        @click="$emit('delete')"
        class="cursor-pointer mt-3 text-sm text-red-600 px-4 py-2 rounded border border-red-600 hover:bg-red-600 hover:text-white transition"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineEmits(["edit", "delete"]);

const props = defineProps<{
  company: string;
  position: string;
  status: string;
  date: string;
}>();

const badgeClass = computed(
  () =>
    ({
      Applied: "bg-blue-500",
      Interview: "bg-yellow-500",
      Offer: "bg-green-500",
      Rejected: "bg-red-500",
    })[props.status] || "bg-gray-400",
);
</script>
