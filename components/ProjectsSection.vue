<template>
  <section id=".portfolio" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-primary font-medium mb-4">MY WORK</h3>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured Projects
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="project in projects"
          :key="projects.find(project) + 1"
          class="project-card group relative p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-primary/50 overflow-hidden flex flex-col justify-between h-full"
        >
          <div>
            <h3
              class="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2"
            >
              {{ project.title }}
            </h3>

            <p class="text-sm text-gray-400 transition-all">
              {{ project.description }}
            </p>
          </div>
          <!-- Links -->
          <div class="flex items-center gap-4 pt-2 text-sm">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              class="inline-flex items-center gap-1 text-white hover:text-primary transition-colors"
            >
              <span>Live Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              class="inline-flex items-center gap-1 text-white hover:text-primary transition-colors"
            >
              <span>Code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    title: "Gestus",
    description:
      "A education platform for teaching Sign Language through pratical, interactive lessons that use computer vision to the detect the user's signs.",
    liveUrl: "https://signlangrecog.vercel.app",
    url: "https://github.com/joaoP-santos/signlangrecog",
  },
  {
    id: 2,
    title: "Skarn",
    description:
      "A multidisciplinary repository of interactive learning simulators and animations for students and teachers.",
    liveUrl: "https://skarn.fun",
    url: "https://github.com/joaoP-santos/skarn",
  },
  {
    id: 3,
    title: "Access+",
    description:
      "An open community website for students seeking for extracurricular activities and volunteer opportunities. On development.",
  },
  {
    title: "Personal Website",
    description:
      "This very website you're in! A gate to my projects, articles and contact means.",
    url: "https://github.com/joaoP-santos/personal-website",
  },
  {
    title: "LSA4-LSTM",
    description:
      "A replicate I made of an LSTM neural network specialized in performing word-level sign language recognition for 4 different signs of the Argentinian Sign Language.",
    url: "https://www.kaggle.com/code/j0aopsantos/lsa64-mediapipe",
  },
]);
</script>

<style scoped>
.project-card {
  transform-origin: center;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
}
</style>
