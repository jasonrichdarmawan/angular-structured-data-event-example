import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

interface AccountLinkRequest {
  account: string;
  refresh_url: string;
  return_url: string;
  type: string;
}

interface AccountLinkResponse {
  object: string;
  created: number;
  expires_at: number;
  url: string;
}

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
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.hostname = "";
    this.origin = "";
    this.href = "";
  }

  ngOnInit(): void {
    this.hostname = this.document.location.hostname;
    this.origin = this.document.location.origin;
    this.href = this.document.location.href;
  }

  async createAccountLink(accountLink: AccountLinkRequest): Promise<AccountLinkResponse | null> {
    return {
      object: "account_link",
      created: 1680577733,
      expires_at: 1680578033,
      url: "https://github.com"
    }
  }

  async createAccountLinkThenNavigate() {
    const response = await this.createAccountLink({
      account: 'abcd',
      refresh_url: this.origin + "/404",
      return_url: this.href,
      type: 'account_onboarding',
    });

    if (!response) { return; }

    this.document.location.href = response.url;
  }
}
