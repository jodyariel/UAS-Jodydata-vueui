<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />


  </div>
</template>

<script>

import Slider from "@/components/Slider.vue";


export default {
  name: "Home",
  components: {
    Slider,
  },
};
</script>
