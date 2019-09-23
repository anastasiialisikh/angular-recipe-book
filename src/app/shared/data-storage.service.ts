import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.modal';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { throwError } from 'rxjs';

@Injectable()
export class DataStorageService {
  url = 'https://recipe-book-0919.firebaseio.com/';
  recipeUrl = this.url + 'recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    return this.http.put(
      this.recipeUrl,
      this.recipeService.getRecipes()
    );
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    console.log(token);

    return this.http.get(`${this.recipeUrl}?auth=${token}`)
      .pipe(
        map((recipes: Recipe[]) => {
          console.log('2');
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        }),
        catchError(
          (error) => {
            return throwError(error);
          }
        )
      );
  }
}
