import { ParticlesModule } from 'angular-particle';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';
import { UnitComponent } from './components/unit/unit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SummaryComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    LeafletModule,
    BrowserAnimationsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
