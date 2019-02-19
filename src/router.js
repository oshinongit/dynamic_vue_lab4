import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import SelectDish from "@/components/SelectDish";
import DishDetail from "@/components/DishDetail";
import DishOverview from "@/components/DishOverview";
import Print from "@/components/Print";
import modelInstance from "@/data/DinnerModel";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/search",
      name: "SelectDish",
      component: SelectDish,
      props: { model: modelInstance }
    },
    {
      path: "/dish/:id",
      name: "DishDetail",
      component: DishDetail,
      props: { model: modelInstance }
    },
    {
      path: "/overview",
      name: "DishOverview",
      component: DishOverview,
      props: { model: modelInstance }
    },
    {
      path: "/print",
      name: "Print",
      component: Print,
      props: { model: modelInstance }
    },
  ]
});
