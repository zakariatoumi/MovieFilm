import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  listCategorie() {
   return this.http.get(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/categorie/listCategorie_SiteOffice.php');
  }
}
