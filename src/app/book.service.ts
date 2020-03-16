import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './interfaces/book';
import { BOOKS } from './example-books';
import {HttpClient} from "@angular/common/http";
import {UpdateBookRequest} from "./interfaces/UpdateBookRequest";
import {RestService} from "./services/rest.service";
import {Roles} from "./interfaces/Roles";

@Injectable({
  providedIn: "root"
})

export class BookService {
 private baseUrl = "http://localhost:8080";
  constructor(private restService: RestService) { }

  getBooks(idUser: number): Observable<any> {
    return this.restService.get(`${this.baseUrl}/books/${idUser}`);
  }
  getRoleById(idUser: number): Observable<Roles> {
    return this.restService.get(`${this.baseUrl}/roles/${idUser}/`);
  }
  getBookById(idUser: number, idBook: number): Observable<any> {
    return this.restService.get(`${this.baseUrl}/detail/${idUser}/${idBook}`);
  }
  updateBook(idUser: number, idBook: number, value: UpdateBookRequest): Observable<Book> {
    console.log("any" , value);
    return this.restService.put(`${this.baseUrl}/detail/${idUser}/${idBook}`, value);
  }

   deleteBook(idBook: number): Observable<any> {
     return this.restService.delete(`${this.baseUrl}/detail/${idBook}`);
   }

  addBook(idUser: number, value: UpdateBookRequest): Observable<Book> {
    return this.restService.post(`${this.baseUrl}/books/${idUser}`, value);
  }
}
