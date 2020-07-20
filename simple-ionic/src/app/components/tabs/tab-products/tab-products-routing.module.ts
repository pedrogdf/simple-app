import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabProductPage } from './tab-products.page';

const routes: Routes = [
  {
    path: '',
    component: TabProductPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabProductPageRoutingModule {}
