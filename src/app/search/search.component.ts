import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Film } from '../Model/film';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  films: Film;
  // tslint:disable-next-line: ban-types
  recherche: Object;

  constructor(private searchService: SearchService,
              private router: Router) { }

  ngOnInit() {

  }

  OnSubmit(search) {
    this.searchService.cherche(search).subscribe(res => {
      this.recherche = res;
      this.router.navigate(['/search']);
    });
  }



}
