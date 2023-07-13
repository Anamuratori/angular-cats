import { Cat } from './../models/Cat.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const cats: Cat[] = [
      { id: 1, name: 'Cesar', length: 4, weight: 4, race: 'Ciamês' },
      { id: 2, name: 'Augusto', length: 5, weight: 5, race: 'Persa' },
      { id: 3, name: 'Ronaldo', length: 2, weight: 2, race: 'Burmês' },
      { id: 4, name: 'Gato', length: 6, weight: 6, race: 'Bengal' },
      { id: 5, name: 'Farofa', length: 10, weight: 10, race: 'Abissínio' },
    ];

    return { cats};
  }

  genId(cats: Cat[]): number {
    return cats.length > 0 ?
    Math.max(...cats.map((cats) => cats.id)) + 1 : 11;
  }
}
