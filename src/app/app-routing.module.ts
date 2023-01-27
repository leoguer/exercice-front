import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { ButtonsViewComponent } from './buttons-view/buttons-view.component';

const routes: Routes = [
  { path: 'first-component', component: CardViewComponent },
  { path: 'second-component', component: ButtonsViewComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
