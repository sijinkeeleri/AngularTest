import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2moduleRoutingModule } from './test2module-routing.module';
import { Newtest2mdlcmpntComponent } from './newtest2mdlcmpnt/newtest2mdlcmpnt.component';


@NgModule({
  declarations: [Newtest2mdlcmpntComponent],
  imports: [
    CommonModule,
    Test2moduleRoutingModule
  ]
})
export class Test2moduleModule { }
