import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../interfaces/book";
import {BookService} from "../book.service";
import {RestService} from "../services/rest.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {
  editingForm: FormGroup;
  @Input() book: Book;
  @Input() editMode;

  constructor(private bookService: BookService,
  private location: Location) {
    this._createForm();
  }

  ngOnInit() {
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

  sendServer(): void {
    //this.restService.get("http://localhost:8080/books/" + this.book.id).subscribe(() => {
    //});
    // /
    // this.restService.get("http://localhost:8080/book/" + this.book.id).subscribe(() => {
    //});
    console.log(this.editingForm.value);
  }

  updateBook(): void {
    this.bookService.updateBook(this.book.id, this.editingForm.value).subscribe((book: Book) => {
      this.book = book;
      this.location.back();
    });

    // this.restService.updateBook();
  }

}
