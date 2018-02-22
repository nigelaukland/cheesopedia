import { Component, OnInit } from '@angular/core';
import { Cheese } from './../shared/cheese.model';

@Component({
  selector: 'app-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.css']
})
export class CheeseDetailComponent implements OnInit {

  cheeses: Cheese[] = [
    new Cheese('Cheddar', 'Hard', 'Traditional British cheese', 'https://www.paxtonandwhitfield.co.uk/media/catalog/product/cache/1/image/410x410/9df78eab33525d08d6e5fb8d27136e95/i/m/image_1_9.jpg'),
    new Cheese('Stilton', 'Blue', 'Traditional British blue cheese', 'https://www.paxtonandwhitfield.co.uk/media/catalog/product/cache/1/image/410x410/9df78eab33525d08d6e5fb8d27136e95/i/m/image_1_24.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
