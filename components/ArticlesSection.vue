<template>
  <section id="#articles" v-if="!loading" class="bg-black py-10">
    <div v-if="error">Error loading articles.</div>
    <div v-else class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h3 class="text-primary font-medium mb-4">MY ARTICLES</h3>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          From Medium and Substack
        </h2>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Article Card (Repeated for each article) -->
        <div v-for="(article, index) in articles" :key="index" class="group">
          <a
            :href="article.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-black border border-gray-800 rounded-lg p-6 h-full transition-all duration-300 hover:border-primary"
          >
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-between mb-4">
                <span class="text-gray-400 text-sm">{{ article.pubDate }}</span>
                <span class="text-gray-400 text-sm">{{
                  article.readTime
                }}</span>
              </div>

              <h3
                class="text-white text-xl font-bold mb-4 group-hover:text-primary transition-colors"
              >
                {{ article.title }}
              </h3>

              <p class="text-gray-400 mb-6">{{ article.description }}</p>

              <div class="mt-auto flex items-center text-primary font-medium">
                Read More on
                {{
                  article.source.charAt(0).toUpperCase() +
                  article.source.slice(1)
                }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <div v-else class="bg-black py-10">
    <div class="container mx-auto px-4 text-center">
      <p class="text-white text-2xl">Loading articles...</p>
    </div>
  </div>
</template>

<script setup>
const { articles, loading, error, fetchArticles } = useBlogArticles();

onMounted(() => {
  fetchArticles();
});
</script>
