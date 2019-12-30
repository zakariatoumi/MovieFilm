import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  token: string;
  Email: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.token =  window.sessionStorage.getItem('token');
    console.log(this.token);
    if (!this.token) {
      this.router.navigate(['login']);
    }
  }

  logOut() {
    window.sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
