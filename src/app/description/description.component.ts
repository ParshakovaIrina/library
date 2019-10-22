
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {BookService }  from '../book.service';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {
 // @Input() book: Book;
  book=JSON.parse(localStorage.getItem("myKey"));

  constructor( private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

    ngOnInit(): void {
      //this.getBook();
    }
    

    getBook(): void {
      const name = +this.route.snapshot.paramMap.get('name');
      //this.bookService.getBook(name)
      //  .subscribe(book => this.book = book);
    }
    // //сериализуем его
    deleteBook(): void {
      var serialObj = JSON.stringify(this.book);
    localStorage.setItem("myKey", serialObj);
    localStorage.removeItem("myKey");
    }
    goBack(): void {
      this.location.back();
    }
}
