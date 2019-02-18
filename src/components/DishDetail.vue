<template>
  <div class="d-flex flex-row flex-grow-1 py-4 wrap-mobile">
    
    <div id="dishDescription" class="d-flex flex-column flex-fill w-50 mx-5 mb-5">
      <h1>{{dish.title}}</h1>
      <atom-spinner v-if='status === "LOADING"'
          :animation-duration="1000"
          :size="60"
          :color="'#000000'"
     />
      <img v-bind:src='dish.image' width="300px">
      <p>{{dish.instructions}}</p>
      <router-link to="/search">
      <button id="backToSearchButton" type="button" class="btn btn-outline-dark">Back to search</button>
      </router-link>
    </div>
    <div id="dishIngredients" class="d-flex flex-column flex-fill mx-5">
      <h2>Ingredients</h2>
      <table class="table w-100">
        <tbody>
          <tr v-for="ingredient in dish.extendedIngredients" :id="dish.extendedIngredients.id" :key="dish.extendedIngredients.id">
            <td>{{ingredient.amount}} {{ingredient.unit}}</td>
            <td>{{ingredient.name}}</td>
            <td>1 SEK</td>
          </tr>
        </tbody>
      </table>
      <button
        id="buttonAddToMenu"
        type="button"
        class="btn btn-outline-dark"
      >Add to menu</button>
    </div>
  </div>
</template>

<script>
import modelInstance from "../data/DinnerModel"
import {AtomSpinner} from 'epic-spinners'

export default {
  mounted() {
    this.getItem();
  },

  methods: {
    getItem: function() {
      this.status = "LOADING"
      modelInstance
        
        .getDish(this.$route.params.id)
        .then(result => {
          this.status = "LOADED";
          this.dish = result;
        })
        .catch(error => {
          this.status = "ERROR";
        });
    }
  },

  data() {
    return {
      dish: {},
      status: "",
      
    };
  },
   components: {
      
      AtomSpinner
      
    }
};
</script>