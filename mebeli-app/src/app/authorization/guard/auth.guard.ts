import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Auth } from '../authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (Auth.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/users/login']);
        return false;
      }
  }
}
