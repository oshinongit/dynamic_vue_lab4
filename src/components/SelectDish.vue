<template>
  <div class="d-flex">
    <sidebar :model="this.model"/>
    <div id="content" class="d-flex w-100">
      <dishes/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Dishes from "@/components/Dishes";

export default {
  props: ["model"],
  components: {
    sidebar: Sidebar,
    dishes: Dishes
  }
};
</script>
