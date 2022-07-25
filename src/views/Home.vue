<template>
  <div class="home">
    <TopNav />
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from '@/components/home/topNav/TopNav.vue'

export default {
  name: "Home",
  components: {
    TopNav,
  },
};
</script>
