import { ADD_RECIPE } from '../actions/';

const initial = {
  1: { name: 'Apple Pie', ingredients: ['Flour', 'Sugar', 'Apples', 'Eggs'] },
  2: { name: 'Chicken Pizza', ingredients: ['Pizza base', 'BBQ Sauce', 'Chicken', 'Cheese', 'Onion'] },
  3: { name: 'Super green shake', ingredients: ['Kale', 'Spinach', 'Green apple', 'Celery'] },
  4: { name: 'Chocolate Cake', ingredients: ['Chocolate', 'Eggs', 'Flour', 'Sugar', 'Butter', 'Milk'] },
};

export default function(state = initial, action) {
  switch(action.type) {
    case ADD_RECIPE:
      //Increment the Recipe Count unique ID by 1
      const ID = Object.keys(state).length + 1;
      return { ...state, [ID]: action.payload.item }
    default: 
      return state;
  }
  
}
