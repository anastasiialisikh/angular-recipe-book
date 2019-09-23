import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.modal';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  url = 'https://recipe-book-0919.firebaseio.com/';
  recipeUrl = this.url + 'recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put(
      this.recipeUrl,
      this.recipeService.getRecipes()
    );
  }

  fetchRecipes() {
    return this.http.get(this.recipeUrl)
      .pipe(
        map((recipes: Recipe[]) => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      );
  }
}
