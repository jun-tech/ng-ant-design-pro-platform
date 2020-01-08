import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class RouterGuardService implements CanActivate {

  constructor(private store: LocalStorageService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = this.store.get('x-access-token');
    if (!token) {
      this.router.navigateByUrl('/account/login');
      return false;
    }
    return true;
  }
}
