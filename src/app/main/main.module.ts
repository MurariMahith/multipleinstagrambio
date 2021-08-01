import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBioItemComponent } from './add-bio-item/add-bio-item.component';
import { AllBioItemsComponent } from './all-bio-items/all-bio-items.component';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';

import { FusionChartsModule } from 'angular4-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Widgets from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fint'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, Fusion)

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FusionChartsModule
  ],
  declarations: [DashboardComponent, AddBioItemComponent, AllBioItemsComponent, MainComponent, HeaderNavigationComponent]
})
export class MainModule { }
