import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') nameInputReference: ElementRef;
  @ViewChild('ingredientAmountInput') amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    const ingredientName = this.nameInputReference.nativeElement.value;
    const ingredientAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}
