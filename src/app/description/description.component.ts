import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../interfaces/book';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {RestService} from "../services/rest.service";
import {LoginService} from "../login/login.service";


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']

})
export class DescriptionComponent implements OnInit, OnChanges {
  editMode = true;
  book: Book;
  idUser = +this.route.snapshot.paramMap.get("idUser");
  idBook = +this.route.snapshot.paramMap.get("idBook");

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private restService: RestService,
              private loginService: LoginService,
              private location: Location) {

  }

  ngOnInit(): void {
    this.getBook();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  getBook(): void {
    this.bookService.getBookById(this.idUser, this.idBook)
      .subscribe((book: Book) => {
        this.book = book;
        if (this.book == null) {
          this.router.navigate(["login"]);
        }
      });
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.idBook)
      .subscribe(() => this.router.navigate(["books/", this.idUser]));
  }

  remo(): void {
    this.editMode = !this.editMode;
  }

  onChanged(book: Book) {
    this.remo();
    this.book = book;
  }
  deleteSession(): void {
    this.loginService.deleteSession(this.idUser)
      .subscribe(() => {
        this.router.navigate(["login"]);
      });
  }
}
