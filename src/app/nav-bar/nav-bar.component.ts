import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  token: string;
  Email: string;
  searchForm: FormGroup;

  constructor(private router: Router,
              private searchService: SearchService) { }

  ngOnInit() {
    this.token =  sessionStorage.getItem('token');
    console.log(this.token);
    if (!this.token) {
      this.router.navigate(['login']);
    }
  }

  logOut() {
    window.sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  OnSubmit(search) {
    this.searchService.cherche(search).subscribe(res => {
      this.router.navigate(['/search']);
    });
  }

}
