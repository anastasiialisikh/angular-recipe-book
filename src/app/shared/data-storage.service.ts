import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  url = 'https://recipe-book-0919.firebaseio.com/';
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put(
      this.url + 'recipes.json',
      this.recipeService.getRecipes()
    );
  }
}
