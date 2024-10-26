<script>
import AppChart from "./components/AppChart.vue";
import AppFAQ from "./components/AppFAQ.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppChart,
    AppFAQ,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppChart />
  <AppFAQ />
  <AppFooter />
</template>

<style lang="scss"></style>
