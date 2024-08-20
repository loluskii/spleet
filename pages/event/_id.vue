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
      <div class="flex flex-row items-end gap-x-7">
        <div class="basis-3/5">
          <h3 class="text-2xl font-bold mb-4">{{ eventData?.title }}</h3>
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
          <div class="event-description">
            <h3 class="text-base font-bold mb-4">Description</h3>
            <p class="text-base font-light">{{ eventData?.description }}</p>
          </div>
          <div class="event-pricing">
            <h3 class="text-base font-bold mb-4">Tickets Pricing</h3>
          </div>
        </div>
        <div class="basis-2/5">
          <div class="event-contact">
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
          <div class="event-map">
            
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
        this.eventData = res.data.event; // assuming the response structure is { event: {...} }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    },
  },
  mounted() {
    this.getEventById();
  },
};
</script>
