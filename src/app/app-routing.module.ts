import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HeaderComponent } from './header/header.component'

const routes: Routes = [
  {path: '', component: DasboardComponent},
  {path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
