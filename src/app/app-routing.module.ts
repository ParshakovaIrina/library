import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DescriptionComponent }  from './description/description.component';
import { EdiingComponent }  from './ediing/ediing.component';
import { BooksComponent }  from './books/books.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'detail/:id', component: DescriptionComponent},
  { path: 'editing/:id', component: EdiingComponent},
  {path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
