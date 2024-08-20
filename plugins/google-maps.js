import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps"; // Import package
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBS_4LJQxVI0C4OnOhXWdAc_Ms06RO3w8g",
    libraries: "places",
  },
});
