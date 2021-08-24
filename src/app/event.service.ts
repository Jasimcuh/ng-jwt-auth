import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';
  // private _eventsUrl = 'https://jsonplaceholder.typicode.com/todos';


  constructor(private http:HttpClient) { }

  getEvents():Observable<any>{
    return this.http.get<any>(this._eventsUrl).pipe(
      catchError(this.handleError)
      )
  }
  getSpecialEvents(): Observable<any>{
    return this.http.get<any>(this._specialEventsUrl).pipe(
      catchError(this.handleError)
      )
  }

  // private handleError(error: HttpErrorResponse): Promise<any> {
  //   return Promise.reject(error.error || error);
  // }
  private handleError(error: HttpErrorResponse): Observable<any> {
    return Observable.throw(error.message || "Server Error");
  }

}
