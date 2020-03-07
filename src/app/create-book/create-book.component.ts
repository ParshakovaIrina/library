import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent implements OnInit {
  addBookForm: FormGroup;
  constructor(private bookService: BookService) {
    this._createForm();
  }

  ngOnInit() {
  }
  private _createForm(): void {
    this.addBookForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      author: new FormControl(null),
      year: new FormControl(null),
      genre: new FormControl(null),
      description: new FormControl(null),
    });
  }
}
