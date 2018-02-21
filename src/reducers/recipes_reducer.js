import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from '../actions/';
import { largestObjectKeyNumber } from '../util/index';

const initial = {
  1: { name: 'Apple Pie', ingredients: ['Flour', 'Sugar', 'Apples', 'Eggs'] },
  2: { name: 'Chicken Pizza', ingredients: ['Pizza base', 'BBQ Sauce', 'Chicken', 'Cheese', 'Onion'] },
  3: { name: 'Super green shake', ingredients: ['Kale', 'Spinach', 'Green apple', 'Celery'] },
  4: { name: 'Chocolate Cake', ingredients: ['Chocolate', 'Eggs', 'Flour', 'Sugar', 'Butter', 'Milk'] },
};

export default function(state = initial, action) {
  switch(action.type) {
    case ADD_RECIPE:
      //Always ensure newest recipe has highest key value
      const ID = largestObjectKeyNumber(state) + 1
      return { ...state, [ID]: action.payload.item };
    case DELETE_RECIPE:
      const newState = { ...state };
      delete newState[action.payload];
      return { ...newState };
    case UPDATE_RECIPE:
      const updatedrecipe = Object.assign({...state}, action.payload)
      return updatedrecipe;
    default: 
      return state;
  }
  
}
