<template>
  <div class="main-content">
    <section
      class="hero-section bg-cover bg-center bg-no-repeat h-[85vh] flex md:px-16 md:py-28 px-8 py-14"
      style="background-image: url('/hero-img.jpeg')"
    >
      <div class="items-end w-full flex justify-between">
        <div class="text-container md:w-[500px] w-auto">
          <p
            class="text-white md:text-4xl text-2xl font-gilroy font-bold text-wrap"
          >
            Ready to Rock? Discover the Hottest Events Here - Your Calendar's
            New Best Friend!
          </p>
        </div>
        <div class="search w-[650px]">
          <div class="bg-white p-5 rounded-lg">
            <div class="flex items-center gap-x-3">
              <div class="flex-1">
                <div class="relative">
                  <input
                    class="appearance-none rounded h-full w-full py-2 pl-10 pr-3 text-[#4f4f4f] leading-tight focus:outline-none focus:shadow-outline placeholder:font-normal"
                    id="search"
                    type="text"
                    placeholder="Search for an event"
                  />
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <i class="bi bi-search text-gray-400"></i>
                  </div>
                </div>
              </div>

              <!-- Divider -->
              <div class="w-px h-8 bg-gray-300"></div>

              <div class="flex-1 dropdown">
                <div tabindex="0" role="button" class="bg-white w-full text-sm">
                  <div class="flex justify-between">
                    <span>Categories</span>
                    <i class="bi bi-chevron-down"></i>
                  </div>
                </div>
                <ul
                  tabindex="0"
                  class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li class="p-2" v-for="category in categories" :key="category">
                    {{ category }}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                class="bg-[#783EAD] rounded-[10px] focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium text-sm gap-x-2 px-8 py-3 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex text-white"
              >
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="md:p-16 px-8 py-14">
      <div class="header-content flex justify-between items-center mb-8">
        <div class="md:text-4xl text-2xl font-semibold">Trending Events</div>
        <p class="text-primary md:text-base text-sm">
          View all trending events <i class="bi bi-arrow-up-right"></i>
        </p>
      </div>
      <div class="event-highlights">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-6">
          <Event v-for="event in events" :key="event.id" :event="event" />
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
export default {
  name: "IndexPage",
  layout: "default",
  components: { Event },
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
    },
  },

  beforeMount() {
    this.getEvents();
  },
};
</script>
