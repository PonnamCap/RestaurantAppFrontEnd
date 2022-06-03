import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwt: any = {};
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  })

 /* register(){
    console.log(this.registrationForm.value);
    this.router.navigate(['/welcome'])
    
  }*/
  register(){
    console.log(this.registrationForm.value);
    this.http.post('http://localhost:8084/login', this.registrationForm.value).subscribe((data: any)=>{
      this.jwt = data;
      console.log(this.jwt.response);
     
    }, );
    alert("Login Succesful")
      this.router.navigate(['/welcome']) 
  }

  get username(){
    return this.registrationForm.get('username');
  }

  

  get password(){
    return this.registrationForm.get('password');
  }

}
