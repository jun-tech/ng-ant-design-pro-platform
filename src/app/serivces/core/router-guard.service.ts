import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class RouterGuardService implements CanActivate {

  constructor(private store: LocalStorageService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const username = this.store.get('username');
    console.log('username:' + username);
    if (!username) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
