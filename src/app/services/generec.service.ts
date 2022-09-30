import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerecService {
  constructor(private httpClient: HttpClient) {}

  private auth: string = 'chegou no service';
  private url_character: string = 'https://rickandmortyapi.com/api/character/';

  public serviceAuth(): Observable<any> {
    return this.httpClient.get(this.url_character);
  }
}
