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

useHead({
  title: "João Pedro Santos",
  meta: [
    {
      name: "description",
      content: "João Pedro Marques Santos's personal website.",
    },
    {
      name: "keywords",
      content:
        "Education, technology, AI, web development, social impact, programming",
    },
    {
      property: "og:title",
      content: "João Pedro Santos",
    },
    {
      property: "og:description",
      content: "João Pedro Marques Santos's personal website.",
    },
    {
      property: "og:url",
      content: "https://joaopedrosantos.com",
    },
  ],
});
</script>
