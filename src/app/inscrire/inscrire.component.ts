import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MustMatch } from '../_helpers/must-match.validator';
import { User } from '../Model/user';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  addForm: FormGroup;
  IsFiled = false;
  message: any;
  Errors: string;
  status: boolean;
  Success: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nom: ['', [Validators.required, Validators.maxLength(20)]],
      prenom: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],

    },
    {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit() {

    this.IsFiled = true;
    if (this.addForm.valid) {
    this.userService.createUsers(this.addForm.value).subscribe((data: any) => {

      if (data.error) {
        this.status = true;
        this.message = data.error;
      } else if (data.success) {
        this.Success = data.success;
        // this.router.navigate(['login']);
    }
    });
  }
  }
}
