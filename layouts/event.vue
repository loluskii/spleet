<!-- Please remove this file from your project -->
<template>
  <div class="main flex flex-col justify-center bg-white">
    <Header></Header>

    <Nuxt />
    <!-- <div class="main-content px-16 py-12">
    </div> -->
      <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "default",
  components: { Header, Footer },
};
</script>
