import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';


  constructor(private http:HttpClient,private _router: Router) { }

  registerUser(user: any){
    return this.http.post<any>(this._registerUrl,user)
  }
  loginUser(user: any){
    return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(): boolean{
    // if(localStorage.getItem('token') !== ''){
    //   return false;
    // } else
    // return true;  
    // !! using for boolean purpose so it will return only true or false use boolean type of method
     return !!localStorage.getItem('token'); 
   
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
