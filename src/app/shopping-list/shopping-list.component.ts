import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3),
    new Ingredient('Italian Bread', 1),
    new Ingredient('Olive Oil', 1),
    new Ingredient('Cottage Cheese', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddedIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
