import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap'; 


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TourNgxBootstrapModule
  ]
})
export class HomeModule { }
