<template>
  <form
    @submit.prevent="handleSubmit"
    class="p-4 bg-white rounded-lg shadow mb-6"
  >
    <h3 class="font-semibold mb-4">
      {{ isEdit ? "Edit Job" : "Add Job" }}
    </h3>

    <div class="grid gap-3">
      <input
        v-model="form.company"
        type="text"
        placeholder="Company"
        class="border p-2 rounded bg-white border-gray-300"
        required
      />

      <input
        v-model="form.position"
        type="text"
        placeholder="Position"
        class="border p-2 rounded bg-white border-gray-300"
        required
      />

      <select
        v-model="form.status"
        class="border p-2 rounded bg-white border-gray-300"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <input
        v-model="form.date"
        type="date"
        class="border p-2 rounded bg-white border-gray-300"
        required
      />

      <div class="flex gap-2">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
          {{ isEdit ? "Update" : "Add" }}
        </button>

        <button
          v-if="isEdit"
          type="button"
          @click="resetForm"
          class="border px-4 py-2 rounded bg-white border-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from "vue";

type Job = {
  id?: number;
  company: string;
  position: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  date: string;
};

const props = defineProps<{
  modelValue: Job | null;
}>();

const emit = defineEmits(["save", "update:modelValue"]);

const form = reactive<Job>({
  company: "",
  position: "",
  status: "Applied",
  date: "",
});

const isEdit = computed(() => !!props.modelValue?.id);

watch(
  () => props.modelValue,
  (job) => {
    if (job) Object.assign(form, job);
  },
  { immediate: true },
);

function handleSubmit() {
  emit("save", { ...form });
  resetForm();
}

function resetForm() {
  emit("update:modelValue", null);
  form.company = "";
  form.position = "";
  form.status = "Applied";
  form.date = "";
}
</script>
