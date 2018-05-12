<template>
  <div class="container home">
    <carousel :paginationEnabled="true">
        <slide v-for="image in images" :key="image">
          <img :src="image" alt="" width="220" height="176">
        </slide>
    </carousel>
    <br v-for="n in 35" :key="n"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const images: string[] = [
  "/img/captain.jpg",
  "/img/strange.jpg",
  "/img/food.jpg",
  "/img/chase.jpg"
];

export default Vue.extend({
  name: "home",
  data() {
    return {
      images
    };
  }
});
</script>

<style>
  .home{
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
</style>

