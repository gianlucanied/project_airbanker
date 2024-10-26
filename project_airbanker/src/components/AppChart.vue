<template>
  <section class="chart">
    <h1 class="text-center" data-aos="zoom-in-up" data-aos-duration="1500">
      Simulatore Rendimenti
    </h1>
    <div data-aos="zoom-in-down" data-aos-duration="1500">
      <div class="container-chart">
        <div class="input-container">
          <label>Età attuale: {{ age }} anni</label>
          <input
            type="range"
            v-model="age"
            min="18"
            max="67"
            @input="updateChart"
          />
          <label>Risparmio mensile (€): {{ monthlySaving }}</label>
          <input
            type="range"
            v-model="monthlySaving"
            min="0"
            max="1000"
            step="50"
            @input="updateChart"
          />
        </div>
        <apexchart
          type="line"
          :series="series"
          :options="chartOptions"
          style="height: 400px"
        />

        <div class="x-axis-label">
          <span class="info-chart"
            >Investimento passivo: €{{ passiveIncome }}</span
          >
          <span class="info-chart"
            >Conto di risparmio: €{{ savingsAccountIncome }}</span
          >
          <span class="info-chart"
            >Guadagno rispetto al conto di risparmio: €{{
              passiveIncome - savingsAccountIncome
            }}</span
          >
          <!-- <span>La tua età: {{ age }}</span>
        <span>Risparmio totale: €{{ totalSavings }}</span> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, watch, computed } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "App",
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const age = ref(18);
    const monthlySaving = ref(50);
    const series = ref([
      {
        name: "Investimento passivo",
        data: [],
      },
      {
        name: "Conto di risparmio",
        data: [],
      },
    ]);

    const chartOptions = ref({
      chart: {
        id: "risparmio-chart",
        height: 400,
        background: "transparent",
        toolbar: { show: false },
      },
      xaxis: {
        categories: [],
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => `€${val.toLocaleString()}`,
          style: { colors: "#ffffff" },
        },
      },
      grid: { borderColor: "rgba(255, 255, 255, 0.2)" },
      stroke: { curve: "straight", width: 2, colors: ["#5bb7b2", "#000018"] },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        fontSize: "16px",
        labels: {
          colors: "white",
        },
        markers: {
          fillColors: ["#5bb7b2", "#000018"], // Colori personalizzati per i pallini
          width: 12, // Dimensione dei pallini
          height: 12,
          radius: 12, // Rende i pallini rotondi
        },
      },
    });

    const updateChart = () => {
      const passiveSavings = [];
      const savingsAccount = [];
      const categories = [];
      for (let i = age.value; i <= 67; i++) {
        categories.push(i);
        passiveSavings.push(monthlySaving.value * 12 * (i - age.value) * 1.05); // Simulazione investimento passivo
        savingsAccount.push(monthlySaving.value * 12 * (i - age.value)); // Simulazione conto di risparmio
      }
      series.value[0].data = passiveSavings;
      series.value[1].data = savingsAccount;
      chartOptions.value.xaxis.categories = categories;
    };

    watch([age, monthlySaving], updateChart, { immediate: true });

    const totalSavings = computed(() => {
      return series.value[1].data.reduce((acc, val) => acc + val, 0);
    });

    const passiveIncome = computed(() => {
      return series.value[0].data[series.value[0].data.length - 1];
    });

    const savingsAccountIncome = computed(() => {
      return series.value[1].data[series.value[1].data.length - 1];
    });

    return {
      age,
      monthlySaving,
      series,
      chartOptions,
      updateChart,
      totalSavings,
      passiveIncome,
      savingsAccountIncome,
    };
  },
};
</script>

<style scoped>
.chart {
  height: auto;
  width: 100%;
  background-image: url("/blob-scene-haikei(1).svg");
  background-size: cover;
  background-position: center;
  padding: 100px;
  color: white;
  text-align: center;
  border: none;
}

.chart h1 {
  color: white;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.container-chart {
  margin: 40px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  backdrop-filter: blur(12px);
  color: white;
  transition: background-color 0.4s ease, transform 0.4s ease,
    box-shadow 0.4s ease;
}

.container-chart:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px #5bb7b2;
}

.input-container {
  margin: 20px 0;
}

.input-container label {
  color: white;
  display: block;
  margin: 10px 0 5px;
}

.input-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.input-container input:focus {
  border-color: #5bb7b2;
  box-shadow: 0 0 10px rgba(91, 183, 178, 0.5);
}

.input-container input[type="range"] {
  width: 100%;
  margin: 10px 0;
  appearance: none;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
}

.input-container input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  height: 16px;
  width: 16px;
  background-color: #5bb7b2;
  border-radius: 50%;
  cursor: pointer;
}

.x-axis-label {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ffffff;
  background: linear-gradient(
    45deg,
    rgba(91, 183, 178, 0.7),
    rgba(0, 0, 24, 0.7)
  );
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* .x-axis-label:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(91, 183, 178, 0.5);
} */

.info-chart {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.3s ease;
}

.info-chart:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
