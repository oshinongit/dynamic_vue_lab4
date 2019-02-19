import ObservableModel from "./ObservableModel";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/53";
const httpOptions = {
  headers: { "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767" }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 1;
    this.getNumberOfGuests();
    this.menu = [];

    this.getMenuFromStorage();
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
    localStorage.setItem('numberOfGuests', JSON.stringify(this._numberOfGuests));
    this.notifyObservers();
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes() {
    const url = `${BASE_URL}/recipes/search`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/${id}/information`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  addToMenu(dish) {
    if (this.menu.find(d => d.id == dish.id) !== undefined) {
      alert("Dish has already been added.");
      return;
    }

    this.menu.push(dish);
    localStorage.setItem('menu', JSON.stringify(this.menu));
    this.notifyObservers();
  }

  removeFromMenu(dish) {
    var index = this.menu.indexOf(dish);
    if (index > -1) {
      this.menu.splice(index, 1);
    }

    localStorage.setItem('menu', JSON.stringify(this.menu));
    this.notifyObservers();
  }

  getMenuFromStorage() {
    if (localStorage.getItem('menu')) {
      this.menu = JSON.parse(localStorage.getItem('menu'));
    }

    if (localStorage.getItem('numberOfGuests')) {
      this._numberOfGuests = JSON.parse(localStorage.getItem('numberOfGuests'));
    }
  }

  getMenu() {
    return this.menu;
  }

  getTotalMenuPrice() {
    var price = 0;

    this.menu.forEach(function (item) {
      item.extendedIngredients.forEach(function (ingredient) {
        price += 1;
      });
    });

    return price * this.getNumberOfGuests();
  }


  //https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information

  getSearchDishes(search_word, type) {
    const url = `${BASE_URL}/recipes/search` + '?query=' + search_word + "&type=" + type;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
