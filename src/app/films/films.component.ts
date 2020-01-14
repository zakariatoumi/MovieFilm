import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Model/categorie';
import { CategorieService } from '../services/categorie.service';
import { FilmService } from '../services/film.service';
import { Film } from '../Model/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  categories: Categorie[];
  // tslint:disable-next-line: ban-types
  CategorieSelect: Number;
  films: Film[];
  // tslint:disable-next-line: ban-types
  id: Number;
  tousFilms: Film[];

  constructor(private categorieService: CategorieService,
              private filmService: FilmService) { }

  ngOnInit() {
    this.listCategorie();
    this.tous_films();
  }

  private tous_films() {
    this.filmService.TousFilms()
      .subscribe((data: Film[]) => {
        this.tousFilms = data;
      }, err => {
        console.log(err);
      });
  }

  private listCategorie() {
    this.categorieService.listCategorie()
      .subscribe((data: Categorie[]) => {
        this.categories = data;
      }, err => {
        console.log(err);
      });
  }

  SelectedListFilm(selectid: any): void {
    this.filmService.listFilm(selectid)
      .subscribe((data: Film[]) => {
        this.films = data;
      }, err => {
        console.log(err);
      });
  }
}
