import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AccessGuard implements CanActivate {


    constructor(
      private router: Router,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = localStorage.getItem('USER');
        let valid = false;
        if (user) {
          valid = true;
        } else {
          this.router.navigate(['/auth/login']);
        }

        return valid;
    }

}
