import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../cat.service';


@Component({
  selector: 'app-search-cats',
  templateUrl: './search-cats.component.html',
  styleUrls: ['./search-cats.component.scss']
})
export class SearchCatsComponent implements OnInit {

displayedColumns: string[] = ['id', 'name', 'length', 'weight', 'race', 'actions'];
  
  dataSource = [
    {id: 1, name: 'Cesar', length: 4, weight: 4, race: 'Ciamês'},
    {id: 2, name: 'Augusto', length: 5, weight: 5, race: 'Persa'},
    {id: 3, name: 'Ronaldo', length: 2, weight: 2, race: 'Burmês'},
    {id: 4, name: 'Gato', length: 6, weight: 6, race: 'Bengal'},
    {id: 5, name: 'Farofa', length: 10, weight: 10, race: 'Abissínio'},

  ];


  constructor(private service: CatService, private router: Router) {}
  
  ngOnInit(): void {
    this.service.getCats().subscribe((resp) => {
      console.log(resp);
      
    })
  }

}
