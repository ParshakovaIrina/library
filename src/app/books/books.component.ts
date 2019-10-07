import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../example-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  books= BOOKS;
  selectedBook: Book;

  constructor() { }
  
  ngOnInit() {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
