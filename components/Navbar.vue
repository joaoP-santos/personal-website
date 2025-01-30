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
        <a
          v-for="item in navItems"
          :key="item.text"
          @click="scrollToSection(item.href)"
          :href="item.href"
          class="text-white hover:text-primary transition-colors cursor-pointer"
        >
          {{ item.text }}
        </a>
      </div>
      <Socials />
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { text: "ABOUT", href: "#about" },
  { text: "PROJECTS", href: "#portfolio" },
  { text: "ARTICLES", href: "#articles" },
  { text: "CONTACT", href: "#contact" },
];

const scrollToSection = (href) => {
  event.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
