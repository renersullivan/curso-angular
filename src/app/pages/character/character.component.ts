import { Component, OnInit } from '@angular/core';
import { GenerecService } from 'src/app/services/generec.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public resultado: any = '';
personagem: any;
  constructor(private generecService: GenerecService) {}

  ngOnInit(): void {}

  public characterId(): void {
    this.generecService.serviceAuth().subscribe((dados) => {
      this.resultado = dados;
    });
  }
}
