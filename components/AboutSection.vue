<template>
  <section id="#about" class="bg-black pt-20 py-10">
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
            class="bg-primary text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
