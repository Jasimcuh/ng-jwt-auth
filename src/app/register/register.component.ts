import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

// registerUserData = {email:'', password:''}  it's also correct
   registerUserData:any = {}

  constructor(private _auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  

  registerUser(){
    // console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe(
      res =>  {
      console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigate(['/special'])
      },
      err => console.log(err)
    )    
    }


}
