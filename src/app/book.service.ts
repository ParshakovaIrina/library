import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BOOKS } from './example-books';
@Injectable({
  providedIn: 'root'
})

export class BookService {
 
  constructor() { }
  //getBook(id: number): Observable<Book> {
    
   // return of(BOOKS.find(book => book.id === id));
  //}
  getBooks(): Observable<Book[]> {
    
    return of(BOOKS);
  }
}
