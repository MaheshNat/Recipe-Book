import { Ingredient } from '../shared/ingredient.model';
import { Action } from '@ngrx/store';

const initialState = {
  ingredients: [new Ingredient('Rice', 5), new Ingredient('Mutton', 10)]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      };
  }
}
