import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Book} from '../book';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BOOKS} from '../example-books';
import {RestService} from "../services/rest.service";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']

})
export class DescriptionComponent implements OnInit, OnChanges {
  editMode: boolean = true;
  book: Book;
  books = JSON.parse(localStorage.getItem("myKey"));

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private restService: RestService,
              private location: Location) {

  }

  ngOnInit(): void {
    this.getBook();
    //this.edittingForm.setValue(this.book);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }



  getBook(): void {
    const name = +this.route.snapshot.paramMap.get('id');
    this.book = this.books[name];
  }

  deleteBook(): void {
    let serialObj = JSON.stringify(this.book);
    localStorage.setItem("myKey", serialObj);
    localStorage.removeItem("myKey");
  }

  remo(): void {
    this.editMode = !this.editMode;
  }
  sendServer(): void {
    this.restService.get("http://localhost:8080/books/").subscribe(() => {
    });


  }
}
