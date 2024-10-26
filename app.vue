<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-black">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-sm py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-white text-2xl font-bold">
          Your Name<span class="text-yellow-400">.</span>
        </NuxtLink>

        <div class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.link"
            :to="item.link"
            class="text-white hover:text-yellow-400 transition-colors"
          >
            {{ item.text }}
          </NuxtLink>
        </div>

        <div class="flex space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.platform"
            :href="social.link"
            target="_blank"
            class="text-white hover:text-yellow-400 transition-colors"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative h-screen">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-[url('/your-background-image.jpg')] bg-cover bg-center"
      >
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <!-- Hero Content -->
      <div
        class="relative h-full flex flex-col justify-center items-center text-center px-4"
      >
        <p class="text-white text-xl mb-4">Hello, My name is</p>
        <h1 class="text-white text-5xl md:text-7xl font-bold mb-4">
          Your Name
        </h1>
        <p class="text-yellow-400 text-2xl md:text-3xl mb-8">
          A Freelance Web Developer
        </p>
        <button
          class="bg-yellow-400 text-black px-8 py-3 rounded-md hover:bg-yellow-300 transition-colors"
        >
          MY SERVICES
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { text: "HOME", link: "/" },
  { text: "ABOUT US", link: "/about" },
  { text: "SERVICES", link: "/services" },
  { text: "PORTFOLIO", link: "/portfolio" },
  { text: "BLOG", link: "/blog" },
  { text: "CONTACT", link: "/contact" },
];

const socialLinks = [
  { platform: "twitter", icon: "fab fa-twitter", link: "#" },
  { platform: "instagram", icon: "fab fa-instagram", link: "#" },
  { platform: "medium", icon: "fab fa-medium", link: "#" },
];
</script>

<style>
/* Add any custom styles here */
</style>
