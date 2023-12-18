import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.page.html',
  styleUrls: ['./device-type.page.scss']
})
export class DeviceTypePage implements OnInit {
  isServer: boolean;
  isMobile: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    @Optional() @Inject(REQUEST) request: Request,
    @Inject(DOCUMENT) document: Document
  ) {
    this.isServer = isPlatformServer(platformID);
    if (this.isServer) {
      this.isMobile = this.isPlatformMobile((<any>request.headers)('user-agent'))
      return;
    }
    
    this.isMobile = this.isPlatformMobile(document.defaultView?.navigator.userAgent!)
  }

  ngOnInit(): void {
  }

  isPlatformMobile(userAgent: string): boolean {
    console.log(userAgent)

    if (userAgent.includes('Android')) { return true }
    if (userAgent.includes('iPhone')) { return true }

    return false
  }
}
