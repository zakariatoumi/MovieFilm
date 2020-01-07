import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../Model/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listfilmComedie: Film[];
  films: Film[];
  listfilm: Film[];
  listfilmFantastique: Film[];

  constructor(private filmService: FilmService ) { }

  customOptions: any = {
    items: 1,
    merge: true,
    loop: true,
    margin: 20,
    videoHeight: 250,
    videoWidth: 206,
    video: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: false,
    center: false,
    responsive: {
      480: {
        items: 1
      },
      600: {
        items: 3
      }

    }
  };

  ngOnInit() {
    this.filmService.FilmRecent()
    .subscribe( (data: Film[]) => {

        this.films = data;

    },
    err => {
      console.log(err);
      }
    );

    this.filmService.FilmAction()
    .subscribe( (data: Film[]) => {

        this.listfilm = data;

    },
    err => {
      console.log(err);
      }
    );

    this.filmService.FilmComedie()
    .subscribe( (data: Film[]) => {

        this.listfilmComedie = data;

    },
    err => {
      console.log(err);
      }
    );

    this.filmService.FilmFantastique()
    .subscribe( (data: Film[]) => {

        this.listfilmFantastique = data;

    },
    err => {
      console.log(err);
      }
    );
  }


}
