import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      '../../../assets/first-food.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://unsplash.com/photos/rPkgYDh2bmo'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://unsplash.com/photos/rPkgYDh2bmo'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
