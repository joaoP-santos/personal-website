<template>
  <section
    class="min-h-screen bg-gradient-to-b from-black via-black to-blue-950"
  >
    <Navbar />

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
            src="/profilepic.jpg"
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
            class="px-8 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            @click.prevent="scrollToSection('projects')"
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
</template>
