import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export const IS_SERVER = new InjectionToken<boolean>("IS_SERVER");
export const USER_AGENT = new InjectionToken<string>("USER_AGENT");
export const CLIENT_WIDTH = new InjectionToken<number>("CLIENT_WIDTH");

export type DeviceType = "Desktop" | "Tablet" | "Mobile";

@Injectable()
export class GetDeviceTypeService {
  constructor(
    @Inject(IS_SERVER) private isServer: boolean,
    @Inject(USER_AGENT) private userAgent: string,
    @Optional() @Inject(CLIENT_WIDTH) private clientWidth: number,
  ) {

  }

  call(): DeviceType {
    console.log(`
      class: ${GetDeviceTypeService.name}
      function: ${this.call.name}
      isServer: ${this.isServer}
      userAgent: ${this.userAgent}
      clientWidth: ${this.clientWidth}
    `);

    if (this.isDesktop()) { return "Desktop" }
    if (this.isTablet()) { return "Tablet" }
    if (this.isMobile()) { return "Mobile" }

    return "Desktop";
  }

  /**
   * @bug Surface Pro 7 user-agent is Windows NT 10.0
   * Meanwhile, Surface Pro 7 width is 912 pixels.
   * Surface Pro 7 is a laptop.
   */
  private isDesktop(
  ): boolean {
    if (this.isServer) {
      if (this.userAgent.includes('Macintosh')) { return true }
      if (this.userAgent.includes('Windows NT 10.0')) { return true }
      return false;
    }

    if (this.clientWidth >= 1200) { return true; }

    return false;
  }

  /**
   * @bug iPad Air user-agent is Macintosh.
   * iPad Air is a tablet.
   * Meanwhile, MacBook Pro M2 user-agent is also Macintosh.
   * MacBook Pro M2 is a laptop.
   */
  private isTablet(
  ): boolean {
    if (this.isServer) {
      if (this.userAgent.includes('iPad')) { return true; }

      return false;
    }

    if (
      this.clientWidth >= 576 &&
      this.clientWidth < 1200
    ) { return true; }

    return false;
  }

  /**
   * @bug Nest Hub user-agent is Android.
   * Meanwhile, Nest Hub is a tablet.
   */
  private isMobile(
  ): boolean {
    if (this.isServer) {
      if (this.userAgent.includes('Android')) { return true }
      if (this.userAgent.includes('iPhone')) { return true }

      return false;
    }
    
    if (this.clientWidth < 576) { return true }

    return false;
  }
}
