import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/pages/home/home.component";
import {CustomerComponent} from "./modules/home/pages/customer/customer.component";
import {CanActivateGuard} from "./modules/home/pages/guards/can-activate.guard";
import {YouCanDisableGuard} from "./modules/home/pages/guards/you-can-disable.guard";
import {PizzaComponent} from "./modules/home/pages/pizza/pizza.component";
import {CanLoadGuard} from "./modules/home/pages/guards/can-load.guard";
import {PageNoExistComponent} from "./modules/home/pages/page-no-exist/page-no-exist.component";
import {NgModule} from "@angular/core";

const routes : Routes =[
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'client/:user/:password',
  component: CustomerComponent,
  canActivate: [CanActivateGuard],
  canDeactivate: [YouCanDisableGuard]
  },
  {path: 'create-pizza', component: PizzaComponent, children:[
      {path: 'id/:user', component: PizzaComponent},
    ]},

  {path: 'pedido', loadChildren: () =>import('./pedido/pedido.module').then(x =>x.PedidoModule),
  canLoad: [CanLoadGuard]
  },
  {path: '404', component: PageNoExistComponent},
  {path: '**', redirectTo: '404'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
