import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  public cpf: string = '';
  ngOnInit() {}

  public detectCpf(event: any): void {
    this.cpf = event.value;
  }
}
