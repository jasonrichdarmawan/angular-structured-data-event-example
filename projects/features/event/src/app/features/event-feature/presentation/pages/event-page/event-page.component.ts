import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  id?: string;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get("id") ?? undefined;
  }

  ngOnInit(): void {
  }

}
