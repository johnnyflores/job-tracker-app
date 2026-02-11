<template>
  <div class="p-4 bg-white rounded-lg shadow">
    <h3 class="font-semibold mb-4">Application Status</h3>

    <ClientOnly>
      <Pie :data="chartData" :options="chartOptions" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

type Job = {
  status: "Applied" | "Interview" | "Offer" | "Rejected";
};

const props = defineProps<{
  jobs: Job[];
}>();

const statusCounts = computed(() => {
  return props.jobs.reduce(
    (acc, job) => {
      acc[job.status]++;
      return acc;
    },
    {
      Applied: 0,
      Interview: 0,
      Offer: 0,
      Rejected: 0,
    },
  );
});

const chartData = computed(() => ({
  labels: Object.keys(statusCounts.value),
  datasets: [
    {
      data: Object.values(statusCounts.value),
      backgroundColor: ["#3B82F6", "#FACC15", "#22C55E", "#EF4444"],
    },
  ],
}));

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};
</script>
