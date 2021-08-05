<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />

<Cardworks :works="works"/>

  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardworks from "@/components/Cardworks.vue";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    Slider,
    Cardworks,
  },

  setup() {
    let works = ref([]);

    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/works')
        .then((Response) => {
          works.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })

    function workDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/works/${id}`)
        .then(() => {
          let z = this.works.map((works) => works.id).index(id);
          this.works.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      works,
      workDelete,
    };
  },
};
</script>