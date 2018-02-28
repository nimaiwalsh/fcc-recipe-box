export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const CACHED_RECIPES = 'CACHED_RECIPES';

export function addRecipe(name, ingredients, callback) {
  callback();
  return {
    type: ADD_RECIPE,
    payload: { item: { name: name, ingredients: ingredients }
    }
  }
}

export function updateRecipe(key, name, ingredients, callback) {
  callback()
  return{
    type: UPDATE_RECIPE,
    payload: { [key] : {name: name, ingredients: ingredients} }
  }
}

export function deleteRecipe(key, callback) {
  callback();
  return {
    type: DELETE_RECIPE,
    payload: key,
  }
}

export function cachedRecipesToState(cachedRecipes) {
  return {
    type: CACHED_RECIPES,
    payload: JSON.parse(cachedRecipes),
  }
}

