import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean |
    import("@angular/router").UrlTree |
    import("rxjs").Observable<boolean |
    import("@angular/router").UrlTree> |
    Promise<boolean | import("@angular/router").UrlTree> {
      return this.authenticationService.isAuthenticated();
    }
}
