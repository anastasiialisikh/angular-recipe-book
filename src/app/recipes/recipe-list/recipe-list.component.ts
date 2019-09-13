import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recepies: Recipe[] = [
    new Recipe(
      'First recipe',
      'This is a test recepi',
      'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg'),
      new Recipe(
        'Second recipe',
        'This is a test recepi',
        'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
