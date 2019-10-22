import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {BookService }  from '../book.service';
@Component({
  selector: 'app-ediing',
  templateUrl: './ediing.component.html',
  styleUrls: ['./ediing.component.less']
})
export class EdiingComponent implements OnInit {
  //@Input() book: Book;
  book=JSON.parse(localStorage.getItem("myKey"));
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  
    ngOnInit(): void {
     // this.getBook();
    }
    mb(): void{
      //this.book.name=document.getElementById("input-id").value;
      localStorage.myKey = JSON.stringify(this.book);
    }

    getBook(): void {
      const name = +this.route.snapshot.paramMap.get('name');
     // this.bookService.getBook(name)
     //   .subscribe(book => this.book = book);
    }
    goBack(): void {
      this.location.back();
    }

}
