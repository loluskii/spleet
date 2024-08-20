<template>
  <div class="main-content">
    <Hero
      :backgroundImage="'/hero-img.jpeg'"
      heroText="Ready to Rock? Discover the Hottest Events Here - Your Calendar's New Best Friend!"
    />
    <section class="md:p-16 px-8 py-14">
      <div class="header-content flex justify-between items-center mb-8">
        <div class="md:text-4xl text-2xl font-semibold">Trending Events</div>
        <a href="/discover" class="text-primary md:text-base text-sm">
          View all trending events <i class="bi bi-arrow-up-right"></i>
        </a>
      </div>
      <div class="event-highlights">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-6">
          <template v-if="events.length && !isLoading">
            <Event v-for="event in events" :key="event.id" :event="event" />
          </template>
          <template v-else-if="isLoading">
            <Skeleton v-for="i in 3" :key="i" />
          </template>
          <NoData v-else />
        </div>
      </div>
    </section>
    <section class="md:px-16 md:py-28 px-8 py-14">
      <div class="grid md:grid-cols-3 grid-cols-1 md:gap-x-12">
        <div class="col-span-1">
          <h2 class="md:text-3xl text-2xl font-semibold mb-5">
            Discover a World of Events Tailored Just for You.
          </h2>
          <button
            type="button"
            class="bg-[#783EAD] rounded-[10px] focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-2 px-8 py-3 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex text-white"
          >
            <span>View all events </span>
          </button>
        </div>
        <div class="col-span-2 grid md:grid-cols-2 md:grid-rows-2 gap-6">
          <div
            v-for="(card, index) in worldOfEvents"
            :key="card.name"
            class="card bg-base-100 image-full h-[240px]"
            :class="{ 'row-span-2': index === 2 }"
          >
            <figure>
              <img :src="card.image_url" alt="Shoes" class="w-full" />
            </figure>
            <div
              class="card-body flex flex-col items-center justify-center text-center"
            >
              <h2 class="font-semibold text-2xl">{{ card.name }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Event from "~/components/Event.vue";
import NoData from "~/components/NoData.vue";
import Hero from "~/components/Hero.vue";
import Skeleton from "~/components/Skeleton.vue";
export default {
  name: "IndexPage",
  layout: "default",
  components: { Event, NoData, Hero, Skeleton },
  data() {
    return {
      events: [],
      categories: [
        "All",
        "Comedy",
        "Religious",
        "Tech",
        "Health",
        "Fitness",
        "Sports",
        "Education",
      ],
      isLoading: true,
      selectedCategory: null,
      worldOfEvents: [
        { name: "Online Events", image_url: "/online_events.jpeg" },
        { name: "Physical Events", image_url: "/physical_events.jpeg" },
        { name: "Hybrid Events", image_url: "/hybrid.jpeg" },
      ],
    };
  },

  methods: {
    async getEvents() {
      const res = await this.$axios.$get("/events");
      this.events = res.data.allEvents.splice(0, 3);
      this.isLoading = false;
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
    search() {
      let category = this.selectedCategory.toLowerCase();
      return this.$router.push("/category/" + category);
    },
  },

  beforeMount() {
    this.getEvents();
  },
};
</script>
