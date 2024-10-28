<!-- pages/index.vue -->
<template>
  <HeroSection />
  <AboutSection />
  <ProjectsSection />
  <OrgsSection />
  <ArticlesSection />
  <Footer />
</template>

<script setup>
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
</script>
