<template>
  <div class="card bg-base-100 border border-[#E0E0E0] rounded-btn">
    <figure>
      <img :src="event.imageUrl" alt="Shoes" />
    </figure>
    <div class="card-body">
      <div class="title-card mb-4">
        <h2 class="card-title text-base font-semibold line-h-normal">
          {{ event.title }}
        </h2>
        <p class="text-sm font-medium">Sun, Oct 3rd &#xb7; 6pm</p>
      </div>
      <p class="text-sm font-light">
        {{
          event.description.length > 100
            ? event.description.slice(0, 200) + "..."
            : event.description
        }}
      </p>
      <nuxt-link
        :to="`/event/${event.id}`"
        class="p-3 text-primary text-sm font-semibold"
      >
        View details <i class="bi bi-arrow-up-right"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["event"]);
</script>
