import { Cat } from './../../shared/models/Cat.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit {


  dataSource: Cat[] = [
    { id: 1, name: 'Cesar', length: 4, weight: 4, race: 'Ciamês'},
    { id: 2, name: 'Augusto', length: 5, weight: 5, race: 'Persa'},
    { id: 3, name: 'Ronaldo', length: 2, weight: 2, race: 'Burmês'},
    { id: 4, name: 'Gato', length: 6, weight: 6, race: 'Bengal'},
    { id: 5, name: 'Farofa', length: 10, weight: 10, race: 'Abissínio'},
  ];


  formCat = new FormGroup({
    name: new FormControl('', Validators.required),
    length: new FormControl(null, Validators.required),
    weight: new FormControl(),
    race: new FormControl()
  });

  editMode = false;
  selectedCat: Cat;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.routeConfig.path);

    if (this.route.routeConfig.path.includes('edit')) {
      this.editMode = true;
      let id: number = this.route.snapshot.params['id'];
      this.selectedCat = this.dataSource.find((item) => item.id == id);

      this.formCat.patchValue({
        name: this.selectedCat.name,
        length: this.selectedCat.length,
        weight: this.selectedCat.weight,
        race: this.selectedCat.race
      });

      // this.formCat.patchValue({name: cat.name, length: cat.length, weight: cat.weight, race: cat.race})

      // this.formCat.get('name').setValue(cat.name);
      // this.formCat.get('length').setValue(String(cat.length));
      // this.formCat.get('weight').setValue(String(cat.weight));
      // this.formCat.get('race').setValue(cat.race);

    }

  }

  createCat(): void {

  }

  updateCat(): void {
    let index = this.dataSource.findIndex(
      (value) => value.id == this.selectedCat.id);

    this.dataSource[index] = {
      id: this.selectedCat.id,
      ...this.formCat.getRawValue()
    };
  }

}
