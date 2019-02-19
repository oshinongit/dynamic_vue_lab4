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
          <div class="text-center mx-2" v-for="dish in model.getMenu()" v-bind:key="dish.id">
            <img width="200" height="200" v-bind:src="dish.image" alt="bla bla">
            <p>{{ dish.title }}</p>
            <p>1 SEK</p>
          </div>
          <div style="border-left: 2px solid black; height: 200px;" class="mx-3"></div>
          <div class="text-center mx-2 d-flex align-items-end">
            <div>
              <p>Total</p>
              <p>{{model.getTotalMenuPrice()}} SEK</p>
            </div>
          </div>
          <router-link to="/print">
            <button
              id="printButton"
              type="button"
              class="btn btn-primary mx-5 btn-lg"
            >Print full recipe</button>
          </router-link>
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