import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { foods } from '../data/foods';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-food-items',
  standalone: true,
  imports: [FoodCardComponent, CommonModule],
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css'],
})
export class FoodItemsComponent {
  foods: { name: string; image: string }[] = foods;
  @Output() foodClick = new EventEmitter<{ name: string; image: string }>();

  handleFoodClick = (food: { name: string; image: string }) => {
    this.foodClick.emit(food);
  };
}
