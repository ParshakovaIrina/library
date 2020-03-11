import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../book.service";
import {Book} from "../interfaces/book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent implements OnInit {
  addBookForm: FormGroup;
  book: Book;

  constructor(
    private bookService: BookService) {
    this._createForm();
  }

  ngOnInit() {
  }

  private _createForm(): void {
    this.addBookForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null),
      year: new FormControl(null),
      genre: new FormControl(null),
      description: new FormControl(null),
    });
    this.addBookForm.valueChanges.subscribe((val: string) => {
      console.log(val);
    });
    this.addBookForm.statusChanges.subscribe((val: string) => {
      console.log(val);
    });
  }

  addBook(): void {
    if (this.addBookForm.dirty) {
      this.bookService.addBook(this.addBookForm.value)
        .subscribe(book => this.book = book);
      alert("книга добавлена");
    }
  }
}
