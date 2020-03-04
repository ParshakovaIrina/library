import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {DescriptionComponent} from './description/description.component';
import {EdiingComponent} from './ediing/ediing.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./login/login.service";
import {RestService} from "./services/rest.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ViewComponent } from './view/view.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DescriptionComponent,
    EdiingComponent,
    LoginComponent,
    ViewComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
