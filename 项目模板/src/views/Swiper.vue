<template>
  <div>
    <my-swiper :list="list" autoplay></my-swiper>
  </div>
</template>

<script>
import { getBanner } from "@/utils/api/home.js";
import mySwiper from "@/components/Tools/Swiper/Swiper.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    getBanner().then((res) => {
      this.list = res.data;
    });
  },
  components: {
    mySwiper,
  },
};
</script>
