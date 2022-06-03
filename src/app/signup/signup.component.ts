import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  jwt: any = {};
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  })

  register(){
    console.log(this.registrationForm.value);
    this.http.post('http://localhost:8084/register', this.registrationForm.value).subscribe((data: any)=>{
      this.jwt = data;
      console.log(this.jwt.response);
    }, );
    alert(" Succesfully registered")
    this.router.navigate(['/login'])
  }

  get username(){
    return this.registrationForm.get('username');
  }

  

  get password(){
    return this.registrationForm.get('password');
  }
}
