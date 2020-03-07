import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Book} from '../interfaces/book';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BOOKS} from '../example-books';
import {RestService} from "../services/rest.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']

})
export class DescriptionComponent implements OnInit, OnChanges {
  editMode: boolean = true;
  @Input() books;
  book: Book;
 //  books = JSON.parse(localStorage.getItem("myKey"));

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private restService: RestService,
              private location: Location) {

  }

  ngOnInit(): void {

    this.getBook();
    console.log(this.book);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }



  getBook(): void {
    const name = +this.route.snapshot.paramMap.get("id");
    console.log(name);
    this.bookService.getBookById(name)
      .subscribe(book => this.book = book);
   // this.book = this.books[name];
  }

  deleteBook(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.bookService.deleteBook(id)
      .subscribe(booki => this.books = booki);
  }

  remo(): void {
    this.editMode = !this.editMode;
  }

 // sendServer(): void {
  // console.log(  this.restService.get("http://localhost:8080/detail/4"));
   // return this.restService.get("http://localhost:8080/detail/4");
   //.subscribe(model => this.greeting = model));

 // }
}
