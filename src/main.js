import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import VueApexCharts from "vue3-apexcharts";

// Crea l'applicazione
const app = createApp(App);

// Registra il componente globale per ApexCharts
app.component("apexchart", VueApexCharts);

// Inizializza AOS (Animate On Scroll)
AOS.init();

// Usa il router e monta l'app
app.use(router).mount("#app");
