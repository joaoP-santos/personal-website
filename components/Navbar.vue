<template>
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
      <Socials />
    </div>
  </nav>
</template>

<script setup>
const menuItems = [
  { text: "ABOUT ME", link: "#about" },
  { text: "PORTFOLIO", link: "#portfolio" },
  { text: "BLOG", link: "#articles" },
  { text: "CONTACT", link: "#contact" },
];
</script>
