import { Component, Input, OnInit } from '@angular/core';
import { GenerecService } from 'src/app/services/generec.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private generecService: GenerecService) {}

  public resultado: any = '';
  public cpf: string = '';
  public senha: string = '';
  ngOnInit() {}

  public detectCpf(event: any): void {
    this.cpf = event.value;
  }

  public detectSenha(event: any): void {
    this.senha = event.value;
  }

  public chamaServicoParaLogar(): void {}

  public chamarServico(): void {
    this.generecService.serviceAuth().subscribe((result) => {
      this.resultado = result;
    });
  }
}
