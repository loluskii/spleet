<template>
  <div class="main-content">
    <Hero
      :backgroundImage="'/hero-img.jpeg'"
      :heroText="`Discover Events in ${categoryName}`"
    />
    <section class="md:p-16 px-8 py-14">
      <div class="header-content flex justify-between items-center mb-8">
        <div class="md:text-4xl text-2xl font-semibold">All Events</div>
      </div>
      <div class="events">
        <template v-if="events.length">
          <div class="grid md:grid-cols-3 grid-cols-1 gap-6 mb-8">
            <Event v-for="event in events" :key="event.id" :event="event" />
          </div>
        </template>
        <NoData v-else />
      </div>
    </section>
  </div>
</template>

<script>
import Event from "~/components/Event.vue";
import NoData from "~/components/NoData.vue";
export default {
  name: "event-by-category",
  layout: "default",
  components: { Event, NoData },
  data() {
    return {
      events: [],
      category: this.$route.params.category,
      currentPage: 1,
      noOfPages: 1,
    };
  },
  computed: {
    categoryName() {
      return (
        this.$route.params.category.charAt(0).toUpperCase() +
        this.$route.params.category.slice(1)
      );
    },
  },

  methods: {
    async getEventsByCategory() {
      let category = this.$route.params.category;
      const res = await this.$axios.$get(
        "/events/search?category=" + category.toLowerCase()
      );
      this.events = res.data.event;
    },
  },

  beforeMount() {
    this.getEventsByCategory();
  },
};
</script>
