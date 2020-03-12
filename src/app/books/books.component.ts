import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  show: boolean = false;
  selectedBook: Book;
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
  ShowNewBook(): void {
    this.show = !this.show;
  }
}

