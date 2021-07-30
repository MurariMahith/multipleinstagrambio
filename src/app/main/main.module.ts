import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBioItemComponent } from './add-bio-item/add-bio-item.component';
import { AllBioItemsComponent } from './all-bio-items/all-bio-items.component';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [DashboardComponent, AddBioItemComponent, AllBioItemsComponent, MainComponent, HeaderNavigationComponent]
})
export class MainModule { }
