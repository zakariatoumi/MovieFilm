import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  loginForm: FormGroup;
  invalidLogin = false;
  Email: string;

  constructor(private formBuilder: FormBuilder,
              private apiService: UserService,
              private router: Router, ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      return;
    }

    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.apiService.login(loginData).subscribe((data: any) => {

      this.message = data.message;
      // console.log(data.token);
      if (data.token) {

          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('nom', data.nom);
          this.router.navigate(['/']);
       } else {
         this.invalidLogin = true;
        //  alert('a' + data.message);
       }
     });

  }

}
