import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-list/card-detail/card-detail.component';

const routes: Routes = [
  { path: 'card-detail/:id', component: CardDetailComponent },
  { path: '', component: CardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
