<template>
  <div class="d-flex">
    <div id="content" class="d-flex w-100">
      <div id="dinnerOverviewView" class="d-flex flex-column flex-grow-1 py-4">
        <div class="d-flex justify-content-between mx-5">
          <h2>My Dinner: {{ this.model.getNumberOfGuests() }} people</h2>
          <router-link to="/search">
            <button
              id="buttonBackToEditDinner"
              type="button"
              class="btn btn-primary mx-5"
            >Go back and edit dinner</button>
          </router-link>
        </div>
        <div id="dinnerOverviewList" class="d-flex justify-content-center p-4 flex-wrap my-5">
          <div class="d-flex m-5" v-for="dish in model.getMenu()" v-bind:key="dish.id">
            <div class="text-center mx-2">
              <img v-bind:src="dish.image" alt="bla bla">
            </div>

            <div class="ml-3">
              <h1>{{dish.title}}</h1>
              <p>{{dish.instructions}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelInstance from "../data/DinnerModel";

export default {
  mounted() {},

  methods: {},

  data() {
    return {
      model: modelInstance
    };
  },
  components: {}
};
</script>