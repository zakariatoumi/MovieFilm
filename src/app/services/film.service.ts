import { Injectable } from '@angular/core';
import { Film } from '../Model/film';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  FilmRecent() {
    return this.http.get('http://localhost:4432/MovieFilm/Api_Site_Officiel_MovieFilm/films/Film_recent.php');
  }

  DetailsFilmByID(id: any) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<Film[]>(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/detailsById_SiteOffice.php?id=' + id).pipe(map(res => res || []));
  }

  FilmAction() {
    return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/Film_Action_SiteOffice.php');
  }

  FilmComedie() {
    return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/Film_Comedie_SiteOffice.php');
  }

  FilmFantastique() {
    return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/Film_Fantastique_SiteOffice.php');
  }

  listFilm(id: string): Observable<any> {
    let params1 = new HttpParams().set('Id_categorie', id);
    return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/list_Film_SiteOffice.php' , {params: params1});
  }

  TousFilms() {
    return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/films/tousLesFilms.php');
  }
}
