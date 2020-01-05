import { Component, OnInit } from '@angular/core';
import { Film } from '../Model/film';
import { FilmService } from '../services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommantaireService } from '../services/commantaire.service';
import { Commantaire } from '../Model/commantaire';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  film: Film[];
  id: any;
  commantaires: Commantaire[];

  constructor(private filmService: FilmService,
              private router: Router,
              private route: ActivatedRoute,
              private commantaireService: CommantaireService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.DetailsFilmByID(this.id);
    this.DetailsCommantaireByID(this.id);
  }

  DetailsFilmByID(id: any) {
    this.filmService.DetailsFilmByID(id).subscribe(
      (data: Film[]) => {

        this.film = data;

    },
    err => {
      console.log(err);
      }
      );
  }

  DetailsCommantaireByID(id: any) {
    this.commantaireService.DetailsCommantaireByID(id).subscribe(
      (data: Commantaire[]) => {

        this.commantaires = data;

    },
    err => {
      console.log(err);
      }
      );
  }

}
