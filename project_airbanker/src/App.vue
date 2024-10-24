<script>
import AppChart from "./components/AppChart.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppChart,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppChart />
  <AppFooter />
</template>

<style lang="scss"></style>
