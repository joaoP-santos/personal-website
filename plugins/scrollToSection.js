export default defineNuxtPlugin((nuxtApp) => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID ${sectionId} not found.`);
    }
  };

  return {
    provide: {
      scrollToSection,
    },
  };
});
