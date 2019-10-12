import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://securityserver.azurewebsites.net',
  redirectUri: window.location.origin + '/login',
  clientId: 'TrainingManagmentWebCliDevLocal',
  responseType: 'code',
  // scope: 'openid profile email'
  scope: 'openid'
};
