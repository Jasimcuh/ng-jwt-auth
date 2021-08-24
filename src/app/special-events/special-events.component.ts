import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents:any[] = [];

  constructor(private _eventService: EventService,private _router: Router) { }

  ngOnInit(): void{
    this._eventService.getSpecialEvents().subscribe(
      res => {
        res.specialEvents = res
        res = this.specialEvents
        console.log(this.specialEvents)
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
    
    )
  }

}
