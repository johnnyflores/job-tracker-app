<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Applications</h2>

    <client-only>
      <JobForm v-model="selectedJob" @save="saveJob" />
    </client-only>

    <StatusChart :jobs="jobs" class="mb-6" />

    <div class="grid gap-4">
      <JobCard
        v-for="job in jobs"
        :key="job.id"
        v-bind="job"
        @edit="editJob(job)"
        @delete="deleteJob(job.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import JobCard from "~/components/JobCard.vue";
import JobForm from "~/components/JobForm.vue";
import StatusChart from "~/components/StatusChart.vue";
import { useToast } from "~/composables/useToast";

const { show } = useToast();

type Job = {
  id: number;
  company: string;
  position: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  date: string;
};

const STORAGE_KEY = "jobtracker-jobs";

const jobs = ref<Job[]>([]);
const selectedJob = ref<Job | null>(null);

/* Load jobs from localStorage */
onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    jobs.value = JSON.parse(stored);
  } else {
    jobs.value = [];
  }
});

/* Persist jobs automatically */
watch(
  jobs,
  (newJobs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newJobs));
  },
  { deep: true },
);

function saveJob(job: Omit<Job, "id">) {
  if (selectedJob.value?.id) {
    const index = jobs.value.findIndex((j) => j.id === selectedJob.value?.id);
    jobs.value[index] = { ...selectedJob.value, ...job };
    show("Job updated successfully", "info");
  } else {
    jobs.value.push({ ...job, id: Date.now() });
    show("Job added successfully");
  }
}

function editJob(job: Job) {
  selectedJob.value = { ...job };
}

function deleteJob(id: number) {
  if (confirm("Are you sure you want to delete this job?")) {
    jobs.value = jobs.value.filter((job) => job.id !== id);
    show("Job deleted successfully", "error");
  }
}
</script>
