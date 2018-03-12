import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  numbers: string[];
  selectedNumber: string;

  constructor() { }

  ngOnInit() {
    this.numbers = [
      "one",
      "two",
      "three"
    ];
  }

  selectNumber(number: string) {
    this.selectedNumber = number;
  }

}
