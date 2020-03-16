import {Component, OnInit} from '@angular/core';
import {Book} from '../interfaces/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {Roles} from "../interfaces/Roles";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  idUser = +this.route.snapshot.paramMap.get("idUser");
  show: boolean = false;
  selectedBook: Book;
  role: Roles;
  books;

  constructor(private bookService: BookService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getRole();
    this.getBooks();
  }

  getRole(): void {
    this.bookService.getRoleById(this.idUser)
      .subscribe((role: Roles) => {
        this.role = role;
      });
  }

  getBooks(): void {
    this.bookService.getBooks(this.idUser)
      .subscribe((books: Book[]) => {
        this.books = books;
        if (this.books == null) {
          this.router.navigate(["login"]);
        }
      });
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  ShowNewBook(): void {
    this.show = !this.show;
  }
  onChanged(books: Book[]) {
    this.ShowNewBook();
    this.books = books;
  }
  deleteSession(): void {
    this.loginService.deleteSession(this.idUser)
      .subscribe(() => {
        this.router.navigate(["login"]);
      });
  }
}

