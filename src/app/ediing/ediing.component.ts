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
  @Input() book: Book;
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  
    ngOnInit(): void {
      this.getBook();
    }
    
    getBook(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.bookService.getBook(id)
        .subscribe(book => this.book = book);
    }
    goBack(): void {
      this.location.back();
    }

}
