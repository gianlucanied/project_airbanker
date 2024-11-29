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

<template>
  <section class="chart">
    <h1 class="text-center" data-aos="zoom-in-up" data-aos-duration="1500">
      Simulatore Rendimenti
    </h1>
    <div data-aos="zoom-in-down" data-aos-duration="1500">
      <div class="container-chart">
        <!-- Contenitore degli input -->
        <div class="input-container">
          <div class="input-group">
            <label>Età attuale: {{ age }} anni</label>
            <input
              type="range"
              v-model="age"
              min="18"
              max="67"
              @input="updateChart"
            />
          </div>
          <div class="input-group">
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
        </div>

        <!-- Grafico -->
        <apexchart
          type="line"
          :series="series"
          :options="chartOptions"
          style="height: 250px; width: 100%"
        />

        <!-- Etichette sotto il grafico -->
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
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sezione principale */
.chart {
  width: 100%;
  background-image: url("/blob-scene-haikei(1).svg");
  background-size: cover;
  background-position: center;
  padding: 100px 20px;
  color: white;
  text-align: center;
  margin: 0;
}

.chart h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Contenitore del grafico */
.container-chart {
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  backdrop-filter: blur(12px);
  color: white;
}

/* Input range */
.input-container {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 10px;
  font-size: 1rem;
}

.input-container input[type="range"] {
  width: 100%;
  height: 8px;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
}

/* Etichette sotto il grafico */
.x-axis-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  font-size: 1rem;
  color: #ffffff;
  background: rgba(91, 183, 178, 0.7);
  border-radius: 12px;
}

.info-chart {
  margin: 5px 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

/* Responsività */
@media (max-width: 768px) {
  .chart h1 {
    font-size: 2rem;
  }

  .container-chart {
    padding: 15px;
  }

  .x-axis-label {
    font-size: 0.9rem;
  }

  .input-container {
    gap: 10px;
  }

  .input-group label {
    font-size: 0.9rem;
  }
}
</style>
