<template>
  <div class="main-content px-16 pb-16 pt-[145px]">
    <div
      class="event-image h-[480px] w-full bg-slate-300 rounded-xl"
      :style="{
        backgroundImage: `url(${eventData?.imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
    ></div>
    <div class="event-details mt-12">
      <div class="flex flex-row gap-x-7">
        <div class="basis-3/5">
          <h3 class="text-2xl font-bold mb-4">
            {{ eventData?.title }}
            <span
              class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >{{ eventData?.category }}</span
            >
          </h3>
          <div class="flex flex-col text-base mb-5">
            <div class="flex gap-x-6 mb-2">
              <span class="font-light"
                ><i class="bi bi-calendar4 text-icon"></i>
                {{
                  $moment(eventData?.date).format("dddd, MMMM Do, YYYY")
                }}</span
              >
              <span class="font-light"
                ><i class="bi bi-clock text-icon"></i>
                {{ $moment(eventData?.time, "HH:mm").format("hA") }}</span
              >
            </div>
            <div class="flex gap-x-6">
              <span class="font-light mb-2"
                ><i class="bi bi-geo-alt text-icon"></i>
                {{ eventData?.address }}</span
              >
            </div>
            <div class="flex gap-x-6">
              <span class="font-light"
                ><i class="bi bi-person text-icon"></i>
                {{ eventData?.organizer?.name }}</span
              >
            </div>
          </div>
          <div class="event-description mb-5">
            <h3 class="text-base font-bold mb-4">Description</h3>
            <p class="text-base font-light">{{ eventData?.description }}</p>
          </div>
          <div class="event-pricing">
            <h3 class="text-base font-bold mb-4">Tickets Pricing</h3>

            <h5 class="text-xl font-normal">Single</h5>
            <p class="text-icon text-base font-bold mb-8">
              {{
                eventData?.price
                  ? `NGN ${formatNumber(eventData?.price)}`
                  : "Free"
              }}
            </p>
            <button
              type="button"
              class="bg-[#783EAD] rounded-[10px] focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-2 px-8 py-3 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex text-white"
            >
              <span>Buy Now</span>
            </button>
          </div>
        </div>
        <div class="basis-2/5">
          <div class="event-contact mb-12">
            <h3 class="text-base font-bold mb-4">Contact Organizers</h3>
            <div class="social-media">
              <div class="flex space-x-4">
                <a
                  :mailto="eventData?.organizer?.email"
                  target="_blank"
                  class="cursor-pointer"
                >
                  <div
                    class="flex items-center justify-center bg-primary text-white rounded-full w-8 h-8"
                  >
                    <i class="bi bi-envelope-fill text-lg"></i>
                  </div>
                </a>
                <a
                  :href="eventData?.organizer?.instagram"
                  target="_blank"
                  class="cursor-pointer"
                >
                  <div
                    class="flex items-center justify-center bg-primary text-white rounded-lg w-8 h-8"
                  >
                    <i class="bi bi-instagram text-lg"></i>
                  </div>
                </a>
                <a
                  :href="eventData?.organizer?.twitterUrl"
                  target="_blank"
                  class="cursor-pointer"
                >
                  <div
                    class="flex items-center justify-center bg-primary text-white rounded-lg w-8 h-8"
                  >
                    <i class="bi bi-twitter text-lg"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="event-map" v-if="eventData">
            <h3 class="text-base font-bold mb-4">Contact Organizers</h3>
            <gmap-map
              :zoom="14"
              :center="center"
              style="width: 100%; height: 450px"
              class="mb-5"
            >
              <gmap-marker :position="center"></gmap-marker>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "event",
  data() {
    return {
      eventData: null,
      center: {
        lat: null,
        lng: null,
      },
    };
  },
  computed: {
    eventId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async getEventById() {
      try {
        const res = await this.$axios.$get(`/events/${this.eventId}`);
        this.eventData = res.data.event;
        this.center.lat = parseFloat(res.data.event.lat);
        this.center.lng = parseFloat(res.data.event.long);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    },
    formatNumber(num) {
      return num.toLocaleString("en");
    },
  },
  mounted() {
    this.getEventById();
  },
};
</script>
