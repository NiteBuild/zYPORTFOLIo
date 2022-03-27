import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { InOutComponent } from './in-out/in-out.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';

const routes: Routes = [
    { path: "items", component: ProductListComponent },
    { path: "items/