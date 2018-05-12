<template>
    <nav class="header header-sticky header-centered navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" to="/">Home</router-link>
                <router-link class="nav-item nav-link" to="/about">About</router-link>
                <router-link class="nav-item nav-link" to="/contacts">Contacts</router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header'
});
</script>

<style>
.header {
    background-color: white !important;
}

.header.header-sticky{
    position: sticky;
    top:0;
}
</style>
