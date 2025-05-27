<template>
  <div class="flex space-x-6">
    <a
      v-for="social in socialLinks"
      :key="social.platform"
      :href="social.link"
      target="_blank"
      class="text-white/90 hover:text-primary transition-all duration-300 hover:scale-110"
    >
      <component :is="social.icon" :class="'w-' + size + ' h-' + size" />
    </a>
  </div>
</template>

<script setup>
import { Twitter, Instagram, Medium, Linkedin, Github } from "@iconoir/vue";

defineProps({
  size: {
    type: String,
    default: "5",
  },
});

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
  {
    platform: "github",
    icon: Github,
    link: "https://github.com/joaoP-santos",
  },
];
</script>
