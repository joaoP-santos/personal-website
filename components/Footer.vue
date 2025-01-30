<template>
  <footer id="contact" class="bg-black text-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Main content -->
      <div class="flex flex-row justify-between gap-12">
        <!-- Contact Section -->
        <div class="space-y-6">
          <h2 class="text-3xl font-bold relative inline-block">
            Let's Connect
            <span
              class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            ></span>
          </h2>

          <p class="text-white/80 max-w-md">
            Feel free to reach out for collaborations, questions, or just to say
            hello! I'm always excited to connect with fellow education and
            technology enthusiasts.
          </p>
          <div class="space-y-1">
            <!-- Email -->
            <div
              class="flex items-center gap-2 text-white/90 hover:text-primary hover:cursor-pointer transition-colors"
            >
              <Mail class="w-5 h-5" />
              <span @click="copyEmail">santosjoaopedroms@gmail.com</span>
            </div>

            <!-- Calendly Link -->
            <div
              class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors"
            >
              <Calendar class="w-5 h-5" />
              <a
                href="https://calendly.com/santosjoaopedroms/braindate"
                target="_blank"
              >
                Schedule a call through Calendly
              </a>
            </div>
          </div>
          <!-- Social Links -->
          <Socials size="12" />
        </div>

        <!-- Substack Section -->
        <div class="space-y-6">
          <h2 class="text-3xl font-bold relative inline-block">
            Newsletter
            <span
              class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            ></span>
          </h2>
          <p class="text-white/80 max-w-md">
            Subscribe to my newsletter to receive updates about my latest
            projects and insights about education and technology.
          </p>
          <iframe
            src="https://santosjoaopedro.substack.com/embed"
            class="w-full max-w-md h-[150px] bg-primary/5 rounded-lg"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-16 pt-8 border-t border-white/10 text-center text-white/60"
      >
        <p>
          © {{ new Date().getFullYear() }} João Pedro Santos. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Calendar } from "@iconoir/vue";

function copyEmail() {
  navigator.clipboard.writeText("santosjoaopedroms@gmail.com");
  alert("Email copied to clipboard!");
}
</script>
