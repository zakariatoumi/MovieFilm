import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Film } from '../Model/film';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private http: HttpClient) { }

  cherche(name) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/search_SiteOffice.php?search=' + name);
  }

}
