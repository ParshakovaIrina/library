import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../book";
import {RestService} from "../services/rest.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {
  editingForm: FormGroup;
  @Input() book: Book;
  constructor() {
    this._createForm();
  }

  ngOnInit() {
    //this.editingForm.setValue();
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
    //this.restService.get("http://localhost:8080/book/" + this.book.id).subscribe(() => {
    //});
    console.log(this.editingForm.value);
  }
}
