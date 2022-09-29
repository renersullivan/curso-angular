import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animalList: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getAnimalList();
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos !`;
  }

  removeAnimal(animalFromClick: Animal) {
    console.log('removendo animal....!');
    this.animalList = this.listService.removeItemFromList(
      this.animalList,
      animalFromClick
    );
  }

  getAnimalList(): void {
    this.listService.getAll().subscribe((resultado) => {
      this.animalList = resultado;
    });
  }
}
