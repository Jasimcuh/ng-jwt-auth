import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any;
  errorMsg: any;

  constructor(private _eventService:EventService,private http:HttpClient) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      res => this.events = res,
      error => this.errorMsg = error
    )
  }

 



}

