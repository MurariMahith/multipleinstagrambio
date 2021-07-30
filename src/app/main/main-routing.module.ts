import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBioItemComponent } from './add-bio-item/add-bio-item.component';
import { AllBioItemsComponent } from './all-bio-items/all-bio-items.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full' 
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'add',
                component: AddBioItemComponent,
            },
            {
                path: 'all',
                component: AllBioItemsComponent,
            }
        ]
    },
    {
        path:'',
        redirectTo: 'main',
        pathMatch: 'full' 
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }