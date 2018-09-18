import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
  { path: 'shoppinglist', component: ShoppinglistComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
