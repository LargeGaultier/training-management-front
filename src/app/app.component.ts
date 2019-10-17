import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth/auth.config';

@Component({
  selector: 'edx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eduxim-front';

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private oauthService: OAuthService
  ) {
    ['edx-logo'].forEach(name => {
      this.iconRegistry.addSvgIcon(
        name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../assets/${name}.svg`
        )
      );
    });

    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
