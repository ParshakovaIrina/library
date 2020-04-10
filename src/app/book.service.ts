import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './interfaces/book';
import {UpdateBookRequest} from "./interfaces/UpdateBookRequest";
import {RestService} from "./services/rest.service";
import {Roles} from "./interfaces/Roles";
import {Message} from "./interfaces/message";

@Injectable({
  providedIn: "root"
})

export class BookService {
  private baseUrl = "http://localhost:8080";

  constructor(private restService: RestService) {
  }

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
    return this.restService.put(`${this.baseUrl}/detail/${idUser}/${idBook}`, value);
  }

  addMessage(idUser: number, value: string): Observable<Message> {
    return this.restService.post(`${this.baseUrl}/message/${idUser}`, value);
  }

  showMessage(idUser: number): Observable<Message> {
    return this.restService.get(`${this.baseUrl}/message/${idUser}`);
  }

  deleteBook(idBook: number): Observable<any> {
    return this.restService.delete(`${this.baseUrl}/detail/${idBook}`);
  }

  addBook(idUser: number, value: UpdateBookRequest): Observable<Book[]> {
    return this.restService.post(`${this.baseUrl}/books/${idUser}`, value);
  }

  getUsersBooks(idUser: number): Observable<any> {
    return this.restService.get(`${this.baseUrl}/userLibrary/${idUser}`);
  }

  addInMyLibr(idUser: number, value: number): Observable<JSON> {
    return this.restService.post(`${this.baseUrl}/addInMyLibr/${idUser}`, value);
  }
  nextPage(value: number): Observable<any> {
    return this.restService.post(`${this.baseUrl}/game-book`, value);
  }

  deleteFromMyLibr(idUser: number, idBook: number): Observable<Book[]> {
    return this.restService.delete(`${this.baseUrl}/books/${idUser}/${idBook}`);
  }
}
