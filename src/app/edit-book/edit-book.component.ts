import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../interfaces/book";
import {BookService} from "../book.service";
import {RestService} from "../services/rest.service";
import {Location} from "@angular/common";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {takeUntil} from "rxjs/operators";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {
  editingForm: FormGroup;
  @Input() book: Book;
  @Input() editMode;
  @Output() onChanged = new EventEmitter<Book>();
  constructor(private bookService: BookService
  ) {
    this._createForm();
  }

  ngOnInit() {
    this.editMode = !this.editMode;
    this.updateForm();
  }

  private updateForm(): void {
    this.editingForm.setValue(this.book);
  }

  private _createForm(): void {
    this.editingForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      author: new FormControl(null),
      year: new FormControl(null),
      genre: new FormControl(null),
      description: new FormControl(null),
    });
  }
  change(book: Book): void {
    this.onChanged.emit(book);
  }
  updateBook(): void {
    this.bookService.updateBook(this.book.id, this.editingForm.value).subscribe((book: Book) => {
      this.book = book;
      this.change(book);
    });
  }
  goBack(): void {
    this.change(this.book);
  }

}
