import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../book.service";
import {Book} from "../interfaces/book";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent implements OnInit {
  @Input() idUser;
  addBookForm: FormGroup;
  book: Book;
  @Input() books: Book[];
  @Input() show;
  @Output() onChanged = new EventEmitter<Book[]>();

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) {
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

  change(books: Book[]): void {
    this.onChanged.emit(this.books);
  }

  addBook(): void {
    if (this.addBookForm.dirty) {
      this.bookService.addBook(this.idUser, this.addBookForm.value)
        .subscribe((books: Book[]) => {
          this.books = books;
          if (this.books == null) {
            this.router.navigate(["login"]);
          } else {
            this.change(this.books);
          }
        });
    }
  }
}
