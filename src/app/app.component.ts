import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FoodItemsComponent } from './food-items/food-items.component';
import { FoodCardComponent } from './food-card/food-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodItemsComponent, FoodCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  clickedFood: { name: string; image: string } | null = null;

  handleFoodClick = (food: { name: string; image: string }) => {
    this.clickedFood = food;
  };
}
