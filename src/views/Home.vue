<template>
  <div class="home">
    <TopNav />
    <RotationChart />
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from "@/components/home/topNav/TopNav.vue";
import RotationChart from "@/components/home/rotationChart/RotationChart.vue";

export default {
  name: "Home",
  components: {
    TopNav,
    RotationChart,
  },
};
</script>
