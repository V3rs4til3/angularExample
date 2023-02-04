import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TotoFormComponent} from "./toto-form/toto-form.component";
import {TotoListComponent} from "./toto-list/toto-list.component";
import {AuthentificationComponent} from "./authentification/authentification.component";
import {IsAuthGuard} from "./guard/is-auth.guard";

const routes: Routes = [
  { path: '', component: AuthentificationComponent }
  , { path: 'admin', component: TotoListComponent, canActivate: [ IsAuthGuard ]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
