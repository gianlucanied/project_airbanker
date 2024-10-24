<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts"; // Importa ApexCharts

export default {
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const lineChartSeries = ref([
      {
        name: "Risparmio (€)",
        data: [],
      },
    ]);

    const lineChartOptions = ref({
      chart: {
        id: "risparmio-chart",
        height: 400, // Altezza fissa per il grafico
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        labels: {
          formatter: (val) => (val >= 500 ? val : ""),
        },
      },
    });

    const age = ref(18);
    const monthlySaving = ref(50);
    const chartKey = ref(0);

    const calculateSavings = () => {
      const currentAge = age.value;
      const targetAge = 67;
      const savings = [];
      const categories = [];

      for (let i = currentAge; i <= targetAge; i++) {
        categories.push(i);
        const totalSavings = monthlySaving.value * 12 * (i - currentAge);
        savings.push(totalSavings);
      }

      lineChartSeries.value[0].data = savings;
      lineChartOptions.value.xaxis.categories = categories;
      chartKey.value++;
    };

    return {
      lineChartSeries,
      lineChartOptions,
      age,
      monthlySaving,
      calculateSavings,
      chartKey,
    };
  },
};
</script>

<template>
  <div class="container-chart">
    <apexchart
      :key="chartKey"
      type="line"
      :series="lineChartSeries"
      :options="lineChartOptions"
      style="height: 400px"
    />

    <div class="input-container">
      <label for="age">Età attuale:</label>
      <input type="number" id="age" v-model="age" min="18" max="67" />

      <label for="monthlySaving">Risparmio mensile (€):</label>
      <input type="number" id="monthlySaving" v-model="monthlySaving" />

      <button @click="calculateSavings">Calcola Risparmio</button>
    </div>
  </div>
</template>

<style scoped>
.container-chart {
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease;
}

.container-chart:hover {
  transform: scale(1.02);
}

.input-container {
  margin: 20px 0;
}

.input-container label {
  display: block;
  margin: 10px 0 5px;
}

.input-container input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
