import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingViewPage } from './testing-view.page';

const routes: Routes = [
  {
    path: '',
    component: TestingViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingViewPageRoutingModule {}
