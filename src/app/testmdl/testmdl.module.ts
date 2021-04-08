import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmdlRoutingModule } from './testmdl-routing.module';
import { TestmdlComponent } from './testmdl.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [TestmdlComponent, AccountComponent],
  imports: [
    CommonModule,
    TestmdlRoutingModule
  ]
})
export class TestmdlModule { }
