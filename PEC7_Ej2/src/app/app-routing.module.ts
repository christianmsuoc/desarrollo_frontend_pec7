import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {WineNewComponent} from "./components/wines/wine-new/wine-new.component";
import {WineDetailComponent} from "./components/wines/wine-detail/wine-detail.component";
import {WinelistComponent} from "./components/wines/winelist/winelist.component";
import {LoggedGuard} from "./guards/logged.guard";
import {WineResolver} from "./components/resolvers/wine.resolver";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'wine/list', component: WinelistComponent},
  {
    path: 'wine/create',
    component: WineNewComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'wine/:id',
    component: WineDetailComponent,
    resolve: {
      wine: WineResolver
    }
  },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
