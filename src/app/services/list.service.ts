import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animalList';
  constructor(private httpClient: HttpClient) {}

  removeItemFromList(animalList: Animal[], animalFromClick: Animal) {
    return animalList.filter((animal) => animalFromClick.name !== animal.name);
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('http://localhost:3000/animalList');
  }
}
