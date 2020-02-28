
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {BookService } from '../book.service';
import { BOOKS } from '../example-books';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {

  @Input() book: Book;
  books = JSON.parse(localStorage.getItem("myKey"));
  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const name = +this.route.snapshot.paramMap.get('id');
    this.book = this.books[name];
    //this.bookService.getBook(name)
    // .subscribe(book => this.book = book);

    //routerLink="/editing/{{book.id}}
  }

  deleteBook(): void {
    var serialObj = JSON.stringify(this.book);
    localStorage.setItem("myKey", serialObj);
    localStorage.removeItem("myKey");
  }

remo(): void{
  document.getElementById('descr').style.display = 'none';
  document.getElementById('red').style.display = 'inline-block';
  document.getElementById('descriptionYear').style.display = 'none';
  document.getElementById('editYear').style.display = 'inline-block';
  document.getElementById('descriptionGenre').style.display = 'none';
  document.getElementById('editGenre').style.display = 'inline-block';
  document.getElementById('bookDescription').style.display = 'none';
  document.getElementById('editButton').style.display = 'block';
  document.getElementById('editName').style.display = 'block';
}
  mb(): void{
    //this.book.name=document.getElementById("input-id").value;
    localStorage.myKey = JSON.stringify(this.books);
    document.getElementById('descr').style.display = 'inline-block';
    document.getElementById('red').style.display = 'none';
    document.getElementById('descriptionYear').style.display = 'inline-block';
    document.getElementById('editYear').style.display = 'none';
    document.getElementById('descriptionGenre').style.display = 'inline-block';
    document.getElementById('editGenre').style.display = 'none';
    document.getElementById('bookDescription').style.display = 'block';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('editName').style.display = 'none';
  }
  goBack(): void{
    document.getElementById('descr').style.display = 'inline-block';
    document.getElementById('red').style.display = 'none';
    document.getElementById('descriptionYear').style.display = 'inline-block';
    document.getElementById('editYear').style.display = 'none';
    document.getElementById('descriptionGenre').style.display = 'inline-block';
    document.getElementById('editGenre').style.display = 'none';
    document.getElementById('bookDescription').style.display = 'block';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('editName').style.display = 'none';
  }
}
