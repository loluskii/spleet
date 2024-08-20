<template>
  <div class="main-content">
    <section
      class="hero-section bg-cover bg-center bg-no-repeat h-[85vh] flex md:px-16 md:py-28 px-8 py-14"
      style="background-image: url('/hero-img.jpeg')"
    >
      <div class="content-end w-full">
        <div class="text-container md:w-[500px] w-auto">
          <p
            class="text-white md:text-4xl text-2xl font-gilroy font-bold text-wrap"
          >
            Discover Events
          </p>
        </div>
      </div>
    </section>
    <section class="md:p-16 px-8 py-14">
      <div class="header-content flex justify-between items-center mb-8">
        <div class="md:text-4xl text-2xl font-semibold">All Events</div>
      </div>
      <div class="events">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-6 mb-8">
          <Event v-for="event in events" :key="event.id" :event="event" />
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
export default {
  name: "IndexPage",
  layout: "default",
  components: { Event },
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
