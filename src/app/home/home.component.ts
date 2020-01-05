import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../Model/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService ) { }

  ngOnInit() {
    this.filmService.FilmRecent()
    .subscribe( (data: Film[]) => {

        this.films = data;

    },
    err => {
      console.log(err);
      }
    );
  }


}
