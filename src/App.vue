<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue'

export default Vue.extend({
  name: 'App',
  components:{
    Header
  }
});
</script>

<style>
  @media(min-width: 767px) {
    .content{
      margin: 1rem;
    }
  }
</style>
