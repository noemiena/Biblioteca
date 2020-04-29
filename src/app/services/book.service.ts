import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  books: Book[] = [
    {
      ISBN: '9780671039745',
      title: 'Salems Lot',
      author: 'Stephen King',
      publisher: 'Pocket Books',
      publicationDate: new Date('10/11/1999'),
      coverUrl: 'https://m.media-amazon.com/images/I/51ndAvQx95L._SL200_.jpg'
  },

  {
    ISBN: '9781982127794',
    title: 'It',
    author: 'Stephen King',
    publisher: 'Paperback',
    publicationDate: new Date('10/07/2019'),
    coverUrl: 'https://m.media-amazon.com/images/I/41h8tLeMLcL._SL200_.jpg'
},

{
  ISBN: ' 9780316769532',
  title: 'The Catcher in the Rye',
  author:'J. D. Salinger',
  publisher: 'Little, Brown and Company',
  publicationDate: new Date('10/07/1951'),
  coverUrl: 'https://images.isbndb.com/covers/95/32/9780316769532.jpg'
}

  ];

  getBooks(): Book[] {
    return this.books;
}

addBook(book: Book): void {
  this.books.push(book);
}

}
