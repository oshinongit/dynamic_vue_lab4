<template>
    <div class='dishItem text-center'><img v-bind:src='"https://spoonacular.com/recipeImages/" + dishObject.image' alt=''/><p>{{dishObject.title}}</p></div>
</template>

<script>
export default {
  props: ["model", "dish"],
  // this methods is called by React lifecycle when the
  // component is created that's a good place to setup model observer
  created() {
    this.model.addObserver(this);
  },

  // this is called when component is removed destroyed
  // good place to remove observer
  beforeDestroy() {
    this.model.removeObserver(this);
  },

  // we define and initalise the data we want to use and modify in the component
  data() {
    return {
      dishObject: this.dish
    };
  },
};
</script>

<style>

.dishItem {
    border: 1px solid lightgray;
    border-radius: 7px;
    margin: 10px;
    width: 200px;
    height: 300px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.dishItem:hover {
    box-shadow: 0px 0px 91px -6px rgba(0,0,0,0.38);
    transform: scale(1.1, 1.1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

}

.dishItem > img {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.dishItem > p {
    width: auto;
    padding: 10px;
}

</style>