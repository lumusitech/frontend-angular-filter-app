import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db'
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooksByWriter(writerId: number): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      resolve(LIBROS.filter(book => book.escritor === writerId));
    });
  }
}
