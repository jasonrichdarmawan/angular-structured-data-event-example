import { Injectable } from '@angular/core';

export type DeviceType = "Desktop" | "Tablet" | "Mobile";

@Injectable()
export class GetDeviceTypeService {
  constructor(
  ) {
  }

  call(isServer: boolean, userAgent: string, clientWidth: number): DeviceType {
    console.log(`
      class: ${GetDeviceTypeService.name}
      function: ${this.call.name}
      isServer: ${isServer}
      userAgent: ${userAgent}
      clientWidth: ${clientWidth}
    `);

    if (this.isDesktop(isServer, userAgent, clientWidth)) { return "Desktop" }
    if (this.isTablet(isServer, userAgent, clientWidth)) { return "Tablet" }
    if (this.isMobile(isServer, userAgent, clientWidth)) { return "Mobile" }

    return "Desktop";
  }

  /**
   * @bug Surface Pro 7 user-agent is Windows NT 10.0
   * Meanwhile, Surface Pro 7 width is 912 pixels.
   * Surface Pro 7 is a laptop.
   */
  private isDesktop(
    isServer: boolean, 
    userAgent: string, 
    clientWidth: number,
  ): boolean {
    if (isServer) {
      if (userAgent.includes('Macintosh')) { return true }
      if (userAgent.includes('Windows NT 10.0')) { return true }
      return false;
    }

    if (clientWidth >= 1200) { return true; }

    return false;
  }

  /**
   * @bug iPad Air user-agent is Macintosh.
   * iPad Air is a tablet.
   * Meanwhile, MacBook Pro M2 user-agent is also Macintosh.
   * MacBook Pro M2 is a laptop.
   */
  private isTablet(
    isServer: boolean, 
    userAgent: string,
    clientWidth: number,
  ): boolean {
    if (isServer) {
      if (userAgent.includes('iPad')) { return true; }

      return false;
    }

    if (
      clientWidth >= 576 &&
      clientWidth < 1200
    ) { return true; }

    return false;
  }

  /**
   * @bug Nest Hub user-agent is Android.
   * Meanwhile, Nest Hub is a tablet.
   */
  private isMobile(
    isServer: boolean, 
    userAgent: string,
    clientWidth: number,
  ): boolean {
    if (isServer) {
      if (userAgent.includes('Android')) { return true }
      if (userAgent.includes('iPhone')) { return true }

      return false;
    }
    
    if (clientWidth < 576) { return true }

    return false;
  }
}
