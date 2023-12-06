import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  eventIDs: string[]

  constructor() {
    this.eventIDs = [
      "1",
      "2",
      "3"
    ]
  }

  ngOnInit(): void {
  }

}
