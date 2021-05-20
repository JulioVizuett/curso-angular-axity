import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.formBuilders.group({});

  // permite la inyección de dependencias
  constructor(private formBuilders: FormBuilder) { 
    this.formLogin = this.formBuilders.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const username = this.formLogin.get('username')?.value;
    const password = this.formLogin.get('password')?.value;

    const data = {
      email: username,
      password: password
    } as LoginRequest;

    console.log(data);
  }
}
