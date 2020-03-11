import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Book} from '../interfaces/book';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
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
  editMode = true;
  book: Book;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
      .subscribe(() => this.router.navigate(["books"]));
  }

  remo(): void {
    this.editMode = !this.editMode;
  }
  onChanged(book: Book) {
    this.remo();
    this.book = book;
  }

}
