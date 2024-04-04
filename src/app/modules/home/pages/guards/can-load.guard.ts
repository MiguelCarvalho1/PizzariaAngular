import { Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad{
  constructor(private router: Router, private customerService: CustomerService){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.customerService.getAuthorized()) {
      return true;
    }
    this.router.navigate(["/"]);
    return false;
  }

}
