import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';
import {BOOKS} from '../example-books';
import {RestService} from "../services/rest.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
