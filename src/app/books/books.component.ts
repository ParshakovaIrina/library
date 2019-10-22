import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../example-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  //books= BOOKS;
  selectedBook: Book;
  book = JSON.parse(localStorage.getItem("myKey"));
   returnObj = JSON.parse(localStorage.getItem("myKey"));

  constructor(private bookService: BookService) { }
  
  ngOnInit() {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks()
   // .subscribe(books => this.books = books);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
var returnObj = JSON.parse(localStorage.getItem("myKey"));
  var returnObj1 = JSON.parse(localStorage.getItem("myKey1"));
  console.log(localStorage.length);
  let y=localStorage.length;
  for(let i=0; i<y; i++){
    const newLocal = returnObj.id;
    console.log(newLocal);
  }