import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
})
export class FoodCardComponent {
  @Input() food!: { name: string; image: string };
  @Output() foodClick = new EventEmitter<{ name: string; image: string }>();

  handleFoodClick = () => {
    this.foodClick.emit(this.food);
  };
}
