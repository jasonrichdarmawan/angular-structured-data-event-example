import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-subdomain',
  templateUrl: './subdomain.page.html',
  styleUrls: ['./subdomain.page.scss']
})
export class SubdomainPage implements OnInit {
  hostname: string;
  origin: string;
  href: string;

  constructor(
    @Inject(DOCUMENT) document: Document,
  ) {
    this.hostname = document.location.hostname;
    this.origin = document.location.origin;
    this.href = document.location.href;
  }

  ngOnInit(): void {
  }

}
