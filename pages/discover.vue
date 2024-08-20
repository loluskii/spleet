<template>
  <div class="main-content">
    <Hero
      :backgroundImage="'/hero-img.jpeg'"
      :heroText="`Ready to Rock? Discover the Hottest Events Here - Your Calendar's New Best Friend!`"
    />
    <section class="md:p-16 px-8 py-14">
      <div class="header-content flex justify-between items-center mb-8">
        <div class="md:text-4xl text-2xl font-semibold">All Events</div>
      </div>
      <div class="events">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-6 mb-8">
          <template v-if="events.length">
            <Event v-for="event in events" :key="event.id" :event="event" />
          </template>
          <NoData v-else />
        </div>

        <div class="flex justify-center">
          <button
            @click.prevent="previousPage"
            class="flex items-center justify-center px-3 h-8 me-3 text-sm font-bold text-gray-500 bg-white border border-gray-300 rounded-lg disabled:cursor-not-allowed disabled:opacity-75"
            :disabled="currentPage === 1"
          >
            <i class="bi bi-arrow-left"></i>
          </button>
          <button
            @click.prevent="nextPage"
            class="flex items-center justify-center px-3 h-8 text-sm font-bold text-gray-500 bg-white border border-gray-300 rounded-lg disabled:cursor-not-allowed disabled:opacity-75"
            :disabled="currentPage === noOfPages"
          >
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Event from "~/components/Event.vue";
import NoData from "~/components/NoData.vue";
import Hero from "~/components/Hero.vue";
export default {
  name: "discover-events",
  layout: "default",
  components: { Event, NoData, Hero },
  data() {
    return {
      events: [],
      currentPage: 1,
      noOfPages: 1,
    };
  },

  methods: {
    async getEvents() {
      const res = await this.$axios.$get("/events");
      this.events = this.events.length
        ? [...this.events, ...res.data.allEvents]
        : res.data.allEvents;
      this.noOfPages = res.data.noOfPages;
    },
    previousPage() {},
    async nextPage() {
      this.currentPage += 1;
      await this.getEvents();
    },
  },

  beforeMount() {
    this.getEvents();
  },
};
</script>
