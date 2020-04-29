import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookservice: BookService) { }

  title: string = "Aggiungi un libro";
  newBook: Book;

  
  ngOnInit(): void {
    this.newBook ={

    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: new Date(),
    coverUrl: ""
    };

  }

  add() {
    this.bookservice.addBook(this.newBook);
    this.newBook = {
    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: new Date(),
    coverUrl: ""
    }
  }

  

}
