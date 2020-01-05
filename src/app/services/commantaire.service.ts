import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Commantaire } from '../Model/commantaire';

@Injectable({
  providedIn: 'root'
})
export class CommantaireService {

  constructor(private http: HttpClient) { }

  DetailsCommantaireByID(id: any) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<Commantaire[]>(env.BASE_API_URL + 'MovieFilm/Api_Site_Officiel_MovieFilm/commantaire/Commantaire_Film_ByID_SiteOffice.php?id=' + id).pipe(map(res => res || []));
  }
}
