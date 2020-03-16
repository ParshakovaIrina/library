import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../interfaces/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {RestService} from "../services/rest.service";
import {MyRouteService} from "../services/my-route.service";
import {LoginService} from "../login/login.service";
import {Roles} from "../interfaces/Roles";


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']

})
export class DescriptionComponent implements OnInit, OnChanges {
  editMode = true;
  book: Book;
  role: Roles;
  idUser = +this.route.snapshot.paramMap.get("idUser");
  idBook = +this.route.snapshot.paramMap.get("idBook");

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private myRouteService: MyRouteService,
              private restService: RestService,
              private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.getBook();
    this.getRole();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  getRole(): void {
    this.bookService.getRoleById(this.idUser)
      .subscribe((role: Roles) => {
        this.role = role;
      });
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
