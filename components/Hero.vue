<template>
  <section
    class="hero-section bg-cover bg-center bg-no-repeat h-[85vh] flex md:px-16 md:py-28 px-8 py-14 relative"
    :style="`background-image: url(${backgroundImage})`"
  >
    <div class="absolute z-0 inset-0 bg-black opacity-50"></div>
    <div
      class="items-end mt-auto w-full flex md:flex-row flex-col md:justify-between relative z-10"
    >
      <div class="text-container md:w-[500px] w-auto">
        <p
          class="text-white md:text-4xl text-2xl font-gilroy font-bold text-wrap"
        >
          {{ heroText }}
        </p>
      </div>
      <div class="search md:w-[650px]">
        <div class="bg-white p-5 rounded-lg">
          <div class="flex flex-wrap items-center gap-x-3">
            <div class="flex-1 w-full md:w-auto">
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

            <div class="w-full h-px bg-gray-300 my-2 md:hidden"></div>

            <div class="w-px h-8 bg-gray-300 hidden md:inline-block"></div>

            <div class="flex-1 w-full md:w-auto dropdown py-3">
              <div tabindex="0" role="button" class="bg-white w-full text-sm">
                <div class="flex justify-between">
                  <span>{{
                    selectedCategory ? selectedCategory : "Select Category"
                  }}</span>
                  <i class="bi bi-chevron-down"></i>
                </div>
              </div>
              <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li
                  class="p-2 cursor-pointer"
                  @click="selectCategory(category)"
                  v-for="category in categories"
                  :key="category"
                >
                  {{ category }}
                </li>
              </ul>
            </div>

            <button
              type="button"
              @click.prevent="search"
              class="bg-[#783EAD] rounded-[10px] justify-center flex-shrink-0 font-medium text-sm gap-x-2 px-8 py-3 items-center flex text-white w-full md:w-auto mt-2 md:mt-0"
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["backgroundImage", "heroText"],
  data() {
    return {
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
      selectedCategory: null,
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    search() {
      let category = this.selectedCategory.toLowerCase();
      return this.$router.push("/category/" + category);
    },
  },
};
</script>
