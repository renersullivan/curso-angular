import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {
  show:boolean=false;

  constructor() { }

  ngOnInit(): void {

 
  }
  showMessage():void{
    this.show = !this.show;  //toggle
    
  }  

}
