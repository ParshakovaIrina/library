import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './interfaces/book';
import { BOOKS } from './example-books';
import {HttpClient} from "@angular/common/http";
import {UpdateBookRequest} from "./interfaces/UpdateBookRequest";
import {RestService} from "./services/rest.service";

@Injectable({
  providedIn: 'root'
})

export class BookService {
 private baseUrl = 'http://localhost:8080';
  constructor(private restService: RestService) { }
 // getBook(id: number): Observable<Book> {

  //  return of(BOOKS.find(book => book.name === name));
 // }
//  getBooks(): Observable<Book[]>
  //  return of(BOOKS);
 // }

  getBooks(): Observable<any> {
    return this.restService.get(`${this.baseUrl}/books`);
  }
  getBookById(id: number): Observable<any> {
    return this.restService.get(`${this.baseUrl}/detail/${id}`);
  }
  updateBook(id: number, value: UpdateBookRequest): Observable<Book> {
    console.log("any" , value);
    return this.restService.put(`${this.baseUrl}/detail/${id}`, value);
  }

   deleteBook(id: number): Observable<any> {
     return this.restService.delete(`${this.baseUrl}/detail/${id}`);
   }

  addBook(value: UpdateBookRequest): Observable<Book> {
    return this.restService.post(`${this.baseUrl}/books`, value);
  }
}
