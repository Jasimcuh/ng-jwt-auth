import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginUserData = {email:'',password:'',}
  loginUserData:any = {}

  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      res =>  {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/special']);
      },
      err => console.log(err)
    )
    
  }

}
