import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() Category:Category = new Category("Laptop", "metalmarious_Laptop.svg", ["1","2","3"]);
}

export class Category {
  title:string = "";
  imageUrl:string = "";
  subtitles:string[] = [];

  constructor(Title:string, ImageUrl:string, Subtitles:string[]) {
    this.title = Title;
    this.imageUrl = ImageUrl;
    this.subtitles = Subtitles;
  }
  
  public IsOnlyTitle() : boolean {
    return this.subtitles.length === 0;
  }
}