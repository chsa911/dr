import { Component, OnInit } from '@angular/core';
import { book } from '../book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
ngOnInit(): void {
}


book : book = {
      id: 1,
      inputDate: new Date(),
      authorLastName:'archer',
      keyWord:'kain',
      position: 1,
      publisher:'bertelsmann',
      pages: 234,
      endDate: new Date('2023-12-25')
}
}
