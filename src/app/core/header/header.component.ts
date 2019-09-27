import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Recipe } from '../../recipes/recipe.modal';
import { RecipeService } from '../../recipes/recipe.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataStorageService]
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (responce: Response) => {
          console.log(responce);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes()
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      },
      error => {
        console.log('handle error here');
        this.router.navigate(['/signin']);
      }
    );
  }

  onSignout() {
    this.authService.logoutUser();
  }
}
