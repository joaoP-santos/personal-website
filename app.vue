<!-- pages/index.vue -->
<template>
  <section
    class="min-h-screen bg-gradient-to-b from-black via-black to-blue-950"
  >
    <!-- Navigation -->
    <nav
      class="fixed w-full z-50 bg-black/80 backdrop-blur-sm py-4 border-b border-white/5"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-white text-2xl font-bold">
          João Pedro Santos<span class="text-primary">.</span>
        </NuxtLink>
        <div
          class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-center space-x-8"
        >
          <NuxtLink
            v-for="item in menuItems"
            :key="item.link"
            :to="item.link"
            class="text-white/90 hover:text-primary text-center transition-colors relative group"
          >
            {{ item.text }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
            ></span>
          </NuxtLink>
        </div>
        <div class="flex space-x-6">
          <a
            v-for="social in socialLinks"
            :key="social.platform"
            :href="social.link"
            target="_blank"
            class="text-white/90 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative h-screen">
      <!-- Background with parallax effect -->
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-[url('/landscape.jpeg')] bg-cover bg-center bg-fixed"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"
          ></div>
        </div>
        <!-- Animated dots overlay -->
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
            background-size: 50px 50px;
          "
        ></div>
      </div>

      <!-- Hero Content -->
      <div
        class="relative h-full flex flex-col justify-center items-center text-center px-4"
      >
        <div class="mb-8 relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"
          ></div>
          <img
            class="relative rounded-full size-48 border-2 border-white/20 object-cover transition duration-500 group-hover:border-primary"
            src="/profile.jpg"
            alt="João Pedro"
          />
        </div>
        <h1 class="text-white text-5xl md:text-7xl font-bold mb-4 relative">
          João Pedro
          <span
            class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          ></span>
        </h1>
        <p class="text-white/90 text-2xl md:text-3xl mb-8">
          An education and
          <span class="text-primary">technology</span> enthusiast
        </p>

        <!-- Call to action -->
        <div class="mt-8 flex gap-6">
          <a
            href="#projects"
            class="px-8 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="px-8 py-3 bg-transparent text-white border border-white/20 rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
  <section class="bg-black pt-20 py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Image -->
        <div class="relative">
          <img
            src="/lab.jpg"
            alt="Professional photo"
            class="rounded-lg w-full"
          />
        </div>

        <!-- Right Column - Content -->
        <div class="text-white">
          <h3 class="text-primary font-medium mb-4">NICE TO MEET YOU</h3>

          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            My name is <span class="text-white">João Pedro Santos.</span>
          </h2>

          <p class="text-gray-400 mb-12">
            I'm a Brazilian student and innovator passionate about technology
            and its potential to change the world, especially in the field of
            education. I'm currently exploring the use of AI for teaching the
            Brazilian Sign Language (LIBRAS).
          </p>

          <!-- Contact Button -->
          <button
            class="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-blue-400 font-medium mb-4">MY WORK</h3>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured Projects
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group relative overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-400/50 transition-all duration-500"
        >
          <!-- Project Container -->
          <div class="p-8">
            <!-- Top Bar with Tags -->
            <div class="flex items-center gap-3 mb-6">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Project Content -->
            <div class="space-y-4">
              <!-- Title -->
              <h3
                class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors"
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
                  class="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors group/link"
                >
                  <span>Live Preview</span>
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
                  class="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors group/link"
                >
                  <span>View Code</span>
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
            class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/10 via-transparent to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black py-10">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-blue-400 font-medium mb-4">ORGANIZATIONS</h3>
        <h2 class="text-4xl md:text-5xl text-white font-bold">
          I was supported by
        </h2>
      </div>

      <!-- Simple Organizations Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center"
      >
        <img
          v-for="n in 8"
          :key="n"
          src="/lab.jpg"
          :alt="`Organization ${n}`"
          class="w-full max-w-[200px] opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  </section>
  <section class="bg-black py-10">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-blue-400 font-medium mb-4">MY ARTICLES</h3>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Latest from Medium
        </h2>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Article Card (Repeated for each article) -->
        <div v-for="(article, index) in articles" :key="index" class="group">
          <a
            :href="article.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-black border border-gray-800 rounded-lg p-6 h-full transition-all duration-300 hover:border-blue-400"
          >
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-between mb-4">
                <span class="text-gray-400 text-sm">{{ article.date }}</span>
                <span class="text-gray-400 text-sm">{{
                  article.readTime
                }}</span>
              </div>

              <h3
                class="text-white text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors"
              >
                {{ article.title }}
              </h3>

              <p class="text-gray-400 mb-6">{{ article.description }}</p>

              <div class="mt-auto flex items-center text-blue-400 font-medium">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Twitter,
  Instagram,
  Medium,
  Linkedin,
  NavArrowRight,
} from "@iconoir/vue";

const menuItems = [
  { text: "ABOUT ME", link: "/about" },
  { text: "PORTFOLIO", link: "/portfolio" },
  { text: "BLOG", link: "/blog" },
  { text: "CONTACT", link: "/contact" },
];

const socialLinks = [
  { platform: "twitter", icon: Twitter, link: "https://x.com/_joaopsantoss" },
  {
    platform: "instagram",
    icon: Instagram,
    link: "https://instagram.com/_joaopsantos",
  },
  {
    platform: "linkedin",
    icon: Linkedin,
    link: "https://linkedin.com/in/joão-p-m-santos",
  },
  {
    platform: "medium",
    icon: Medium,
    link: "https://medium.com/@santosjoaopedro",
  },
];
const projects = ref([
  {
    id: 1,
    title: "Gestus",
    description:
      "A full-featured dashboard for managing online stores, built with Vue.js and Tailwind CSS. Includes real-time analytics, inventory management, and order processing.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Skarn",
    description:
      "Social media analytics platform that helps businesses track their online presence and engagement across multiple platforms.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Access+",
    description:
      "A collaborative task management application with real-time updates, file sharing, and team chat functionality.",
    image: "/api/placeholder/600/400",
    tags: ["Nuxt.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
]);

const articles = [
  {
    title: "How to Build Scalable Web Applications",
    description:
      "Learn the best practices for building large-scale applications with modern tooling and architecture.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "Understanding Web Performance Optimization",
    description:
      "A deep dive into techniques for optimizing website performance and improving user experience.",
    date: "Mar 1, 2024",
    readTime: "12 min read",
    link: "#",
  },
  {
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "Feb 20, 2024",
    readTime: "10 min read",
    link: "#",
  },
];
</script>
