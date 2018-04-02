import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "../dashboard/dashboard.component";
import { SearchComponent } from "../search/search.component";
import { LoginComponent } from "../auth/login/login.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { ResetComponent } from "../auth/reset/reset.component";
import { GraphComponent } from "../graph/graph.component";

const appRoutes: Routes = [
  { path: 'reset/:token', component: ResetComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }