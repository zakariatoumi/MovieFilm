import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUsers(user: User) {
    return this.http.post<User[]>(env.BASE_API_URL + env.APIs.createUser , user);

  }

  login(loginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(env.BASE_API_URL + env.APIs.loginUser, loginData);
  }
}
