export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export function addRecipe(name, ingredients, callback) {
  callback();
  return {
    type: ADD_RECIPE,
    payload: { item: { name: name, ingredients: ingredients }
    }
  }
}

export function deleteRecipe(key, callback) {
  callback();
  return {
    type: DELETE_RECIPE,
    payload: key,
  }
}