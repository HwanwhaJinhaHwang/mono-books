import { Injectable } from '@nestjs/common';
import {Category} from "./entities/Category";
import {Book} from "./entities/Book";



const books: Book[] = [
  {
    id: '0',
    title: 'Illusion Perdues',
    authorId: '1',
    categorieId: '1',
  },
  {
    id: '1',
    title: 'Dune',
    authorId: '0',
    categorieId: '0',
  },
];
@Injectable()
export class BooksService {
  listBooks(): Book[] {
    return books;
  }

  findOneBook(id: string): Book | null {
    return books.find((b) => b.id === id);
  }

}
