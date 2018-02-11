export const ADD_RECIPE = 'ADD_RECIPE';

export function addRecipe(name, ingredients) {
  return {
    type: ADD_RECIPE,
    payload: { item: { name: 'Chocolate Cake2', ingredients: ['Chocolate', 'Eggs', 'Flour', 'Sugar', 'Butter', 'Milk'] }
    }
  }
}