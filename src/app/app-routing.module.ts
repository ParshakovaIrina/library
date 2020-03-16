import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DescriptionComponent} from './description/description.component';
import {BooksComponent} from './books/books.component';
import {LoginComponent} from './login/login.component';
import {AdminPageComponent} from "./admin-page/admin-page.component";


const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "detail/:idUser/:idBook", component: DescriptionComponent},
  {path: "books/:idUser", component: BooksComponent},
  {path: "login", component: LoginComponent},
  {path: "admin-page/:idUser", component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
