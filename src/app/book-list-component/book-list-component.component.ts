import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent implements OnInit {

  title: string = "Lista libri";
  books: Book[];

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.books = this.bookservice.getBooks();
  }

}
