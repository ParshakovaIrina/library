import {Component, OnInit} from "@angular/core";
import {BookService} from "../book.service";

@Component({
  selector: "app-game-book",
  templateUrl: "./game-book.component.html",
  styleUrls: ["./game-book.component.less"]
})
export class GameBookComponent implements OnInit {
  annotation = true;
  page;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  GoRead(): void {
    this.annotation = !this.annotation;
    this.nextPage(2);
  }

  nextPage(id): void {
    this.bookService.nextPage(id).subscribe(page => {
      this.page = page;
      console.log(this.page);
    });
  }
}
