import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-experiences-page',
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.css']
})
export class ExperiencesPageComponent implements OnInit {
  experienceIDs: string[];

  constructor() {
    this.experienceIDs = [
      "1",
      "2",
      "3",
    ];
  }

  ngOnInit(): void {
  }

}
