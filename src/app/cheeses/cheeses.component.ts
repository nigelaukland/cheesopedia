import { Component, OnInit } from '@angular/core';
import { Cheese } from './shared/cheese.model';

@Component({
  selector: 'app-cheeses',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.css']
})

export class CheesesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
