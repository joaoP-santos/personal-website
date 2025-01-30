<template>
  <section class="bg-white py-10">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-primary font-medium mb-4">ORGANIZATIONS</h3>
        <h2 class="text-4xl md:text-5xl text-black font-bold">
          I was supported by
        </h2>
      </div>

      <!-- Simple Organizations Grid -->
      <div
        class="flex flex-row flex-wrap gap-x-24 gap-4 items-center justify-center"
      >
        <div v-for="org in orgs" class="relative group">
          <img
            :src="org.logo"
            :alt="org.name"
            class="max-w-[200px] max-h-[120px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div
            class="tooltip opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white text-sm py-1 px-3 rounded whitespace-nowrap pointer-events-none"
          >
            {{ org.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const orgs = ref([
  { name: "The Knowledge Society", logo: "/tks.webp" },
  { name: "Behring Foundation", logo: "/behring.png" },
  { name: "Brazilian Student Association", logo: "/brasa.jpg" },
  { name: "EducationUSA", logo: "/educationusa.png" },
  { name: "Sebrae", logo: "/sebrae.png" },
  { name: "Digital Promise", logo: "/digitalpromise.png" },
  { name: "U.S. Embassy and Consulates in Brazil", logo: "/usembassy.png" },
  { name: "Latin America Leadership Academy", logo: "/lala.png" },
]);
</script>

<style scoped>
.tooltip {
  transition: all 0.2s ease;
}

@media (hover: none) {
  .group:active .tooltip {
    opacity: 1;
  }
}
</style>
