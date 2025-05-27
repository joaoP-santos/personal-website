<template>
  <section id="about" class="bg-black py-10">
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
          <p class="text-gray-400 mb-8">
            I'm a Brazilian student and innovator passionate about technology
            and its potential to change the world, especially in the field of
            education. I'm currently exploring the use of AI for teaching the
            Brazilian Sign Language (LIBRAS).
          </p>
          <!-- Values Section -->
          <div class="mb-12">
            <h4 class="text-xl font-semibold mb-6 text-white">My Values</h4>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="(value, index) in values"
                :key="value.name"
                class="relative group"
                @mouseenter="showTooltip(index, $event)"
                @mousemove="updateTooltipPosition(index, $event)"
                @mouseleave="hideTooltip(index)"
              >
                <span
                  class="inline-block bg-gray-800 text-primary px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-primary"
                >
                  {{ value.name }}
                </span>

                <!-- Tooltip with description -->
                <div
                  :class="[
                    'absolute w-72 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-xl border border-gray-700 z-10 pointer-events-none transform',
                    tooltipStates[index]?.visible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95',
                  ]"
                  :style="tooltipStates[index]?.style || {}"
                  style="
                    transition: opacity 200ms ease-out, transform 200ms ease-out;
                  "
                >
                  <div class="relative">
                    {{ value.description }}
                    <!-- Arrow pointing down -->
                    <div
                      class="absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
                      :style="tooltipStates[index]?.arrowStyle || {}"
                      style="transition: left 50ms ease-out"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const values = [
  {
    name: "Gratitude",
    description:
      "I love to exercise being grateful, regardless of the situation. There is always something to be happy about.",
  },
  {
    name: "Faith",
    description:
      "I'm Christian, and I'm devoted to follow \"Love God Love People\" as a main life philosophy",
  },
  {
    name: "Purpose",
    description:
      "I don't believe in purpose as a fate, but more like as the best version of myself. I believe the more obstacles I oustrip to become this version, the better my life will be, naturally.",
  },
  {
    name: "Innovation",
    description:
      "I love solving problems and inefficiencies, especially with technology (that will soon become obvious, reader!)",
  },
  {
    name: "Fairness",
    description:
      "My strong sense of justice and fairness makes me passionate about education—what I believe to be the strongest weapon against inequality.",
  },
];

// Tooltip state management
const tooltipStates = reactive(
  values.reduce((acc, _, index) => {
    acc[index] = {
      visible: false,
      style: {},
      arrowStyle: {},
    };
    return acc;
  }, {})
);

const showTooltip = (index, event) => {
  tooltipStates[index].visible = true;
  updateTooltipPosition(index, event);
};

const hideTooltip = (index) => {
  tooltipStates[index].visible = false;
};

const updateTooltipPosition = (index, event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const tooltipWidth = 288; // w-72 = 18rem = 288px
  const tooltipHeight = 120; // approximate height

  // Use mouse position directly for more fluid tracking
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Position tooltip above the mouse with some offset
  let left = mouseX - tooltipWidth / 2;
  let top = mouseY - tooltipHeight - 16; // 16px gap above mouse

  // Prevent tooltip from going off-screen
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Horizontal bounds checking
  if (left < 10) {
    left = 10;
  } else if (left + tooltipWidth > viewportWidth - 10) {
    left = viewportWidth - tooltipWidth - 10;
  }

  // Vertical bounds checking
  if (top < 10) {
    // If tooltip would go above viewport, show it below the mouse
    top = mouseY + 16;
  }

  // Calculate arrow position to always point to the mouse
  const arrowLeft = mouseX - left - 8; // 8px is half arrow width

  tooltipStates[index].style = {
    position: "fixed",
    left: `${left}px`,
    top: `${top}px`,
  };

  tooltipStates[index].arrowStyle = {
    left: `${Math.max(8, Math.min(arrowLeft, tooltipWidth - 16))}px`,
    top: top > mouseY ? "-4px" : "calc(100% - 0px)", // Arrow points up if tooltip is below mouse
    transform: top > mouseY ? "rotate(180deg)" : "none",
  };
};
</script>
