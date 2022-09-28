import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipers',
  templateUrl: './pipers.component.html',
  styleUrls: ['./pipers.component.scss']
})
export class PipersComponent implements OnInit {
someText = 'Testatndo o pipe operator !! ';
today = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
