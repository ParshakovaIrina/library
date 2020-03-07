import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BOOKS } from '../example-books';
import { BookService } from '../book.service';
import {RestService} from "../services/rest.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  show: boolean = false;
  selectedBook: Book;
 // books = JSON.parse(localStorage.getItem("myKey"));
books;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  ShowNewBook() {
    this.show = !this.show;
  }
}

