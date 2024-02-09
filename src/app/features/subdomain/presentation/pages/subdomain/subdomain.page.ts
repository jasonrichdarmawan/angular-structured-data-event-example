import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-subdomain',
  templateUrl: './subdomain.page.html',
  styleUrls: ['./subdomain.page.scss']
})
export class SubdomainPage implements OnInit {
  hostname: string;

  constructor(
    @Inject(DOCUMENT) document: Document,
  ) {
    this.hostname = "";
  }

  ngOnInit(): void {
    this.hostname = document.location.hostname;
  }

}
