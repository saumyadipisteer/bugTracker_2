import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { JoyrideModule } from 'ngx-joyride';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    HomeRoutingModule,
    JoyrideModule.forChild()
  ]
})
export class HomeModule { }
