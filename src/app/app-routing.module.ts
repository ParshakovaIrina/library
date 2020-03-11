import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import {AdminPageComponent} from "./admin-page/admin-page.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'detail/:id', component: DescriptionComponent},
  {path: 'books', component: BooksComponent },
  {path: 'login', component: LoginComponent},
  {path: 'admin-page', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
