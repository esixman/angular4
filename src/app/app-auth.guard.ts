import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppConstants } from '../core/constants';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        if (localStorage.getItem(AppConstants.appAuthKey)) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
