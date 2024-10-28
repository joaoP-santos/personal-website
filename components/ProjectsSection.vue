<template>
  <section id="#portfolio" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-primary font-medium mb-4">MY WORK</h3>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured Projects
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group relative overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-primary/50 transition-all duration-500"
        >
          <!-- Project Container -->
          <div class="p-8">
            <!-- Project Content -->
            <div class="space-y-4">
              <!-- Title -->
              <h3
                class="text-2xl font-bold text-white group-hover:text-primary transition-colors"
              >
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p
                class="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-500"
              >
                {{ project.description }}
              </p>

              <!-- Links -->
              <div class="flex items-center gap-6 pt-6">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  class="inline-flex items-center gap-2 text-white hover:text-primary transition-colors group/link"
                >
                  <span>Live preview</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
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
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  class="inline-flex items-center gap-2 text-white hover:text-primary transition-colors group/link"
                >
                  <span>View code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
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

          <!-- Decorative Corner -->
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 via-transparent to-transparent"
          ></div>
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
    githubUrl: "https://github.com/joaoP-santos/signlangrecog",
  },
  {
    id: 2,
    title: "Skarn",
    description:
      "A multidisciplinary repository of interactive learning simulators and animations for students and teachers.",
    liveUrl: "https://skarn.fun",
    githubUrl: "https://github.com/joaoP-santos/skarn",
  },
  {
    id: 3,
    title: "Access+",
    description:
      "An open community website for students seeking for extracurricular activities and volunteer opportunities. On development.",
  },
  {
    id: 4,
    title: "Personal Website",
    description:
      "This very website you're in! A gate to my projects, articles and contact means.",
    githubUrl: "https://github.com/joaoP-santos/personal-website",
  },
]);
</script>
