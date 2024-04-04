import { Injectable} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YouCanDisableGuard  implements CanDeactivate<CustomerComponent> {
  canDeactivate(
    component: CustomerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.exit();
  }

}
