import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  books?: Book[];

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent?.params.subscribe(async params => {
      console.log(params.id);
      this.books = await this.bookService.getBooksByWriter(parseInt(params.id));
      console.log(this.books);
    });
  }

}
