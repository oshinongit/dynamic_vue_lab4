<template>
  <div class="Dishes">
    <h3>Dishes</h3>
    <input v-model="search_word" placeholder="Search">
    <p>Search word is: {{ search_word }}</p>
    <button v-on:click="getSearch">GO!</button>
    
      <em v-if='status === "LOADING"'>Loading...</em>
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
  import modelInstance from "../data/DinnerModel";
  import DishItem from '@/components/DishItem'

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
