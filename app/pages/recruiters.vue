<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Recruiters</h1>
    <div class="grid gap-4">
      <RecruiterCard
        v-for="r in recruiters"
        :key="r.id"
        :name="r.name"
        :company="r.company"
        :linkedin="r.linkedin"
        :notes="r.notes"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecruiterCard from "~/components/RecruiterCard.vue";

const recruiters = [
  {
    id: 1,
    name: "Jon Doe",
    company: "Lyft Inc",
    linkedin: "#",
    notes: "Follow up after interview",
  },
  {
    id: 2,
    name: "Mike Smith",
    company: "Espresso Co",
    linkedin: "#",
    notes: "Send portfolio",
  },
];
</script>
