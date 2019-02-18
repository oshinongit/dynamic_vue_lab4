<template>
  <div class="Dishes">
    <h3>Dishes</h3>
    
    <input v-model="search_word" placeholder="Search">
    <button v-on:click="getSearch">GO!</button>
    
      <atom-spinner v-if='status === "LOADING"'
          :animation-duration="1000"
          :size="60"
          :color="'#000000'"
     />
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <div class="d-flex justify-content-start p-4 flex-wrap">
      <div v-for="dish in dishes" :id="dish.id" :key="dish.id" v-on:click="showDetail(dish)">
        <dishitem :dish="dish" :model="model" />
      </div>
      </div>
  </div>
</template>

<script>
  // Alternative to passing the model as the component property,
  // we can import the model instance directly
  import modelInstance from "../data/DinnerModel"
  import DishItem from '@/components/DishItem'
  import {AtomSpinner} from 'epic-spinners'
  

  export default {
    // this methods is called by Vue lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
    mounted() {
      // when data is retrieved we update it's properties
      // this will cause the component to re-render
      modelInstance.getAllDishes().then(dishes => {
        
        this.status = "LOADED"
        this.dishes = dishes.results
      }).catch(() => {
        this.status = "ERROR"
      })
    },
    components: {
      'dishitem': DishItem,
      AtomSpinner
      
    },
    data() {
      return {
        status: "LOADING",
        dishes: [],
        search_word: '',
        model: modelInstance,
      }
    },
    methods: {
      getSearch: function() {

        this.status = "LOADING"
        modelInstance.getSearchDishes(this.$data.search_word).then(dishes => {
        this.status = "LOADED"
        this.dishes = dishes.results
      }).catch(() => {
        this.status = "ERROR"
      })
     },

     showDetail: function(dish) {
       console.log(dish);
       this.$router.push("/dish/" + dish.id);
     }
    }
  }
</script>
