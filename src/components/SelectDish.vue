<template>
  <div class="select-dish d-flex">
    <!-- We pass the model as property to the Sidebar component -->
    <div id="sidebar" class="">
    <sidebar :model="this.model"/>
    </div>
    <div id="dishes">
    <dishes />
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Dishes from '@/components/Dishes'

  export default {
    props: ['model'],
    components: {
      'sidebar': Sidebar,
      'dishes': Dishes
    }
  }
</script>
