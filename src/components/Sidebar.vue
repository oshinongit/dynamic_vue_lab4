<template>
  <div id="sidebar" class="sidebar d-flex flex-column hide" style="min-width:250px; max-width:250px;">
    <h3>My Dinner</h3>
    <p>
      People:
      <input
        type="number"
        :value="numberOfGuests"
        @input="onDidChangeNumberOfGuests"
        @change="onDidChangeNumberOfGuests"
      >
      <br>
    </p>

    <table class="table w-100">
      <tr v-for="dish in dishes" :id="dish.id" :key="dish.id">
        <td>{{dish.title}}</td>
        <td>{{ getDishPrice(dish) }} SEK</td>
        <td><button class="btn btn-danger" v-on:click="model.removeFromMenu(dish)">x</button></td>
      </tr>
      <tr>
        <td></td>
        <td>{{ model.getTotalMenuPrice() }} SEK</td>
        <td></td>
      </tr>
    </table>
    <router-link to="/overview">
    <button id="confirm_button" class="btn btn-outline-dark" type="button">Confirm Dinner</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["model"],
  // this methods is called by React lifecycle when the
  // component is created that's a good place to setup model observer
  created() {
    this.model.addObserver(this);
    this.model.getMenuFromStorage();
  },

  // this is called when component is removed destroyed
  // good place to remove observer
  beforeDestroy() {
    this.model.removeObserver(this);
  },

  // we define and initalise the data we want to use and modify in the component
  data() {
    return {
      numberOfGuests: this.model.getNumberOfGuests(),
      dishes: this.model.getAllDishes(),
    };
  },

  methods: {
    // in our update function we modify the the property of
    // the compoented which will cause the component to re-render
    update() {
      this.numberOfGuests = this.model.getNumberOfGuests();
      this.dishes = this.model.getAllDishes();
    },

    // our handler for the input's on change event
    onDidChangeNumberOfGuests(e) {
      this.model.setNumberOfGuests(+e.target.value);
    },

    getDishPrice(dish) {
      let dish_price = 0;
      let guests = this.numberOfGuests;

      var dish_ingredients = dish.extendedIngredients;
      dish_ingredients.forEach(function(ingredient) {
        dish_price += 1 * guests;
      });

      return dish_price;
    },
  }
};
</script>
