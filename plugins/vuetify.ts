import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import VueApexCharts from "vue3-apexcharts";
// import VueTablerIcons from "vue-tabler-icons";
import "@/assets/scss/style.scss";

import {
    PLATFORM_THEME,
  } from "@/theme/LightTheme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "PLATFORM_THEME",
      themes: {
        PLATFORM_THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: "md",
      },
      VTextField: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VTextarea: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VSelect: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VListItem: {
        minHeight: "45px",
      },
      VTooltip: {
        location: "top",
      },
    },
  })
  app.vueApp.use(vuetify)
//   app.vueApp.use(VueApexCharts);
//   app.vueApp.use(VueTablerIcons);
})