import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, CACHED_RECIPES } from '../actions/';
import { largestObjectKeyNumber } from '../util/index';

const initial = {
  1: { name: 'Apple Pie', ingredients: ['Flour', 'Sugar', 'Apples', 'Eggs'] },
  2: { name: 'Chicken Pizza', ingredients: ['Pizza base', 'BBQ Sauce', 'Chicken', 'Cheese', 'Onion'] },
  3: { name: 'Super green shake', ingredients: ['Kale', 'Spinach', 'Green apple', 'Celery'] },
  4: { name: 'Chocolate Cake', ingredients: ['Chocolate', 'Eggs', 'Flour', 'Sugar', 'Butter', 'Milk'] },
};

export default function(state = initial, action) {
  switch (action.type) {
    case ADD_RECIPE:
      const ID = largestObjectKeyNumber(state) + 1;
      //Store state in local storage
      localStorage.setItem(
        'cachedRecipes',
        JSON.stringify({ ...state, [ID]: action.payload.item })
      );
      return { ...state, [ID]: action.payload.item };
    case DELETE_RECIPE:
      const newState = { ...state };
      delete newState[action.payload];
      //Remove from local storage
      localStorage.setItem(
        'cachedRecipes',
        JSON.stringify({ ...newState })
      );
      return { ...newState };
    case UPDATE_RECIPE:
      const updatedrecipe = Object.assign({ ...state }, action.payload);
      return updatedrecipe;
    case CACHED_RECIPES:
      console.log(action.payload);
      return { ...action.payload };
    default:
      return state;
  }
}
