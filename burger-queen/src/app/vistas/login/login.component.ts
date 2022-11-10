import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any){
    this.api.loginByEmail(form).subscribe(data=>{
      console.log(data);
      //let dataResponse: ResponseI=data
      if (data.accessToken='ok'){
        localStorage.setItem('token',data.accessToken)
        this.router.navigate(['mesero'])
      }
    })

    
  }

}
