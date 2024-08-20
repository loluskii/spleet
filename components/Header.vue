<template>
  <div class="flex w-full h-full justify-center">
    <header
      class="absolute top-[40px] z-50 bg-white bg-opacity-[0.6] rounded-[20px] md:w-[calc(100%-128px)] mx-auto w-[calc(100%-56px)] border"
    >
      <div
        class="mx-auto px-6 py-5 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3"
      >
        <div class="lg:flex-1 flex items-center gap-1.5">
          <a
            aria-current="page"
            href="/"
            aria-label="Nuxt UI Pro"
            class="router-link-active font-gilroy font-bold router-link-exact-active flex-shrink-0 md:text-3xl text-2xl text-primary dark:text-white flex items-end gap-1.5"
          >
            rendezvous
          </a>
        </div>
        <ul class="items-center px-3 gap-x-0 rounded-full hidden lg:flex">
          <li class="relative">
            <a
              href="/#features"
              class="text-sm/6 text-primary flex items-center gap-1 py-2 px-4 font-bold transition-colors relative after:absolute after:-bottom-px after:inset-x-2"
              >Discover</a
            >
          </li>
          <li class="relative">
            <a
              href="/#pricing"
              class="text-sm/6 text-primary flex items-center gap-1 py-2 px-4 font-bold transition-colors relative after:absolute after:-bottom-px after:inset-x-0"
              >About us</a
            >
          </li>
          <li
            data-v-inspector="node_modules/@nuxt/ui-pro/components/header/HeaderLinks.vue:3:5"
            class="relative"
          >
            <a
              href="/#testimonials"
              class="text-sm/6 text-primary flex items-center gap-1 py-2 px-4 font-bold transition-colors relative after:absolute after:-bottom-px after:inset-x-2"
              >FAQs</a
            >
          </li>
          <li class="relative">
            <a
              href="/#faq"
              class="text-sm/6 text-primary flex items-center gap-1 py-2 px-4 font-bold transition-colors relative after:absolute after:-bottom-px after:inset-x-0"
              >Contact us</a
            >
          </li>
        </ul>
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 flex-shrink-0 font-bold rounded text-sm gap-x-2 px-3 py-2 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex text-primary"
          >
            <span>Log in</span>
          </button>
          <button
            type="button"
            class="bg-[#783EAD] rounded-[10px] focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium text-sm gap-x-2 px-8 py-3 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex text-white"
          >
            <span>Sign up</span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
