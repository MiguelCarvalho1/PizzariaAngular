import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate{

  constructor(private router : Router, private customerService: CustomerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(route.params['user'] === 'marcos' && route.params['password'] === '123') {
      return true;
    }
    this.router.navigate(["/"]);
    return false;


    }
  }




