import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checkAuthentication(url) && this.checkAuthorization();
  }

  /**
   * Check if user is connected
   * Otherwise redirect to login and save redirect URL
   * @param url the requested URL
   */
  private checkAuthentication(url: string): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']); // TODO: Use ngxs routing
    return false;
  }

  /**
   * Check user authorization
   * Otherwise redirect to 403 (Forbidden)
   */
  private checkAuthorization(): boolean {
    if (this.authService.isAuthorized()) {
      return true;
    }

    this.router.navigate(['/403']); // TODO: Use ngxs routing
    return false;
  }
}
