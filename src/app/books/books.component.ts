import {Component, OnInit} from '@angular/core';
import {Book} from '../interfaces/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {Roles} from "../interfaces/Roles";
import {Message} from "../interfaces/message";
import {HttpClient} from '@angular/common/http';
import {MyUser} from "../interfaces/MyUser";

export type Name = "Library" | "My Books";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.less"]
})
export class BooksComponent implements OnInit {
  idUser = +this.route.snapshot.paramMap.get("idUser");
  show: boolean = false;
  selectedBook: Book;
  role: Roles;
  name: Name;
  imageButton: string;
  books;
  message: Message;
  flag: boolean;
  myMessage: string;
  mess: any;


  constructor(private bookService: BookService,
              private loginService: LoginService,
              private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getRole();
    this.getBooks();
    this.showMessage();
    this.connect();
  }

  connect(): void {
    const source = new EventSource("http://localhost:8080/stream");
    source.addEventListener("message", message => {
      let n: MyUser; // need to have this Notification model class in angular2
      n = JSON.parse(message.data);
      // console.log(message.data);
      if (this.idUser === n.id) {
        alert("Ваша библиотека обновлена");
      }
    });
  }

  getRole(): void {
    this.bookService.getRoleById(this.idUser)
      .subscribe((role: Roles) => {
        this.role = role;
      });
  }

  addMessage(): void {
    this.bookService.addMessage(this.idUser, this.myMessage)
      .subscribe((messages: Message) => {
        this.message = messages;
        this.myMessage = "";
      });
  }

  showMessage(): void {
    this.bookService.showMessage(this.idUser)
      .subscribe((message: Message) => {
        this.message = message;
      });
  }

  getBooks(): void {
    this.bookService.getBooks(this.idUser)
      .subscribe((books: Book[]) => {
        this.books = books;
        this.name = "Library";
        this.imageButton = "../../assets/plus.svg";
        if (this.books == null) {
          this.router.navigate(["login"]);
        }
      });
  }


  getUserBooks(): void {
    this.name = "My Books"
    this.role.addBook = false;
    this.imageButton = "../../assets/delete.svg";
    this.bookService.getUsersBooks(this.idUser)
      .subscribe((books: Book[]) => {
        this.books = books;
        if (this.books == null) {
          this.router.navigate(["login"]);
        }
      });
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.books.forEach((mybook: Book) => mybook.selected = false);
    book.selected = true;
  }

  onOver(): void {
    this.books.forEach((book: Book) => book.selected = false);
    this.selectedBook = null;
  }

  ShowNewBook(): void {
    this.show = !this.show;
  }

  workWithMyLibr(selectedBook): void {
    this.name === "Library" ? this.addInMyLibr(selectedBook) : this.deleteFromMyLibr(selectedBook);
  }

  addInMyLibr(selectedBook): void {
    this.bookService.addInMyLibr(this.idUser, selectedBook.id)
      .subscribe(mess => {
        this.mess = mess;
        alert(this.mess.mess);
      });
  }

  deleteFromMyLibr(selectedBook): void {
    this.bookService.deleteFromMyLibr(this.idUser, selectedBook.id)
      .subscribe((books: Book[]) => {
        this.books = books;
      });
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

