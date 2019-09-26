import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {path: '', component: NoRecipeComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
