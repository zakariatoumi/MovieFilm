import { Component, OnInit } from '@angular/core';
import { Film } from '../Model/film';
import { FilmService } from '../services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommantaireService } from '../services/commantaire.service';
import { Commantaire } from '../Model/commantaire';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  film: Film[];
  id: any;
  commantaires: Commantaire[];
  token: string;
  addForm: FormGroup;
  IsFiled = false;

  constructor(private filmService: FilmService,
              private router: Router,
              private route: ActivatedRoute,
              private commantaireService: CommantaireService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.DetailsFilmByID(this.id);
    this.DetailsCommantaireByID(this.id);

    this.token =  sessionStorage.getItem('token');
    if (!this.token) {
    this.router.navigate(['login']);
  }

    this.addForm = this.formBuilder.group({
    id: [],
    textCommantaire: ['', [Validators.required]],
  });

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

  get f() {
    return this.addForm.controls;
  }

  onSubmit() {

    this.IsFiled = true;
    if (this.addForm.valid) {
    this.commantaireService.addComment(this.addForm.value)
    .subscribe(
      data => {
        this.DetailsCommantaireByID(this.id);
        // this.router.navigate(['/details']);
      }
    );
    }

  }

}
