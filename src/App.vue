<template>
  <div id="app">
    <div class="d-flex flex-column flex-grow-1">
      <div id="banner" class="d-flex justify-content-between bg-secondary">
        <div></div>
        <div class="h1">Dinner planner</div>
        <div id="sidebarButton" class="align-self-center mr-3" style="visibility: hidden;">
          <button type="button" class="btn btn-primary" id="toggleSidebar" v-on:click="toggleSidebar">☰</button>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import modelInstance from './data/DinnerModel';

export default {
  name: "App",
  methods: {
    toggleSidebar: function() {
      document.getElementById("sidebar").classList.toggle("hide");
    }
  }
};
</script>

<style>
@media screen and (max-width: 976px) {
    #sidebar {
        min-width: 100% !important;
    }

    .hide {
        display: none !important;
    }

    #sidebarButton {
        visibility: visible !important;
    }

    .wrap-mobile {
        flex-wrap: wrap;
    }
}

.forceHide {
    display: none !important;
}

.hide_div {
    display: none !important;
}
</style>