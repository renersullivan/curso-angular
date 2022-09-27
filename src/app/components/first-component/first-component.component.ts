import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name:string = "Rener"; 
  age:number = 30;
  job = "Programador";
  hobbies= ['correr','jogar','estudar'];
  car={
    name:"Polo",
    year:"2019",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
