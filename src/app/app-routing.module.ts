import { UnitComponent } from './components/unit/unit.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'unit', component: UnitComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
