import { Component, OnInit } from '@angular/core';
import { GenerecService } from 'src/app/services/generec.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public resultado: any = '';


  constructor(private generecService: GenerecService) {}

  ngOnInit(): void {
    this.characterId()
  }

  public characterId(): void {
    this.generecService.buscarTodosPersonagens().subscribe((dados) => {
      this.resultado = dados;
    });
  }
}
