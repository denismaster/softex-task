<template>
  <div class="home">
    <carousel 
      :paginationEnabled="true"
      :paginationColor="'#eee'"
      :paginationActiveColor="'#ccc'"
      :perPageCustom="perPageCustom"
      :scrollPerPage="true"
    >
        <slide 
          v-for="image in images" 
          :key="image"
        >
          <div class="image-wrapper">
            <a :href="image">
              <img :src="image" alt="">
            </a>
          </div>
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
  "/img/chase.jpg",
  "/img/mountain.jpg",
  "/img/ferrari.jpg",
  "/img/kratos.jpg",
];

export default Vue.extend({
  name: "home",
  data() {
    return {
      images,
      perPageCustom:[
        [320,1] , //if screen is mobile show only 1 item
        [768,3], //3 slides for desktop
      ]
    };
  }
});
</script>

<style>
  .image-wrapper {
    display: flex;
    justify-content: center;
  }
</style>

