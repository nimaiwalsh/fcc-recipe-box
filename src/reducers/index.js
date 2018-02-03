import { combineReducers } from 'redux';
import recipes from './recipes_reducer.js';

const  rootReducer = combineReducers({
  recipes: recipes,
})

export default rootReducer;