import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Mutton Biryani', 
    //     'A very tasty indian flavored rice dish with mutton.', 
    //     'https://www.cubesnjuliennes.com/wp-content/uploads/2018/10/Mutton-Biryani-Recipe.jpg',
    //     [
    //         new Ingredient('Mutton', 1),
    //         new Ingredient('Rice', 5)
    //     ]),
    //     new Recipe('Chicken Biryani', 
    //     'Indian flavored rice dish with chicken.', 
    //     'https://www.thedeliciouscrescent.com/wp-content/uploads/2016/05/Easy-Hyderabadi-Chicken-Biryani.jpg',
    //     [
    //         new Ingredient('Chicken', 1),
    //         new Ingredient('Rice', 5),
    //         new Ingredient('Masala', 1)
    //     ])
    // ];
    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}