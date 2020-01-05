import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Film } from '../Model/film';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  films = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // this.searchService.cherche().subscribe(res => {

    // });
  }



}
