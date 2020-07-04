import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingViewPageRoutingModule } from './testing-view-routing.module';

import { TestingViewPage } from './testing-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingViewPageRoutingModule
  ],
  declarations: [TestingViewPage]
})
export class TestingViewPageModule {}
