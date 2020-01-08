import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Model/categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  categories: Categorie[];
  // tslint:disable-next-line: ban-types
  CategorieSelect: Number;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.listCategorie()
    .subscribe( (data: Categorie[]) => {

        this.categories = data;

    },
    err => {
      console.log(err);
      }
    );
  }

}
