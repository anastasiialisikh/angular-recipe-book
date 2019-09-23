import { Recipe } from './recipe.modal';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {
  // private url = 'https://recipe-book-0919.firebaseio.com/';
  // private recipeUrl = this.url + 'recipes.json';
  // private recipes: Recipe[];

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Pickles', 1)
      ])
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient
  ) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.createShoppingList(ingredients);
  }

  getRecipe(id: number): Recipe | undefined {
    return this.recipes[id];
    // if (this.recipes) {
    //   return this.recipes[id];
    // } else {
    //   this.fetchRecipes();
    //   this.recipesChanged
    //     .subscribe(
    //       (recipes: Recipe[]) => {
    //         return this.recipes[id];
    //       }
    //     )
    // }

  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    // this.saveRecipes();
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    // this.saveRecipes();
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    // this.saveRecipes();
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  // fetchRecipes() {
  //   this.http.get(this.recipeUrl)
  //     .subscribe(
  //       (recipes: Recipe[]) => {
  //         this.setRecipes(recipes);
  //       }
  //     );
  // }

  // saveRecipes() {
  //   this.http.put(this.recipeUrl, this.getRecipes())
  //     .subscribe(
  //       (recipes: Recipe[]) => {
  //         this.setRecipes(recipes);
  //       }
  //     );
  // }
}
