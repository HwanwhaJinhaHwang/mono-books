import {Controller, Get, Param} from '@nestjs/common';
import {Book} from "./entities/Book";
import {ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {BooksService} from "./books.service";

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get()
  @ApiResponse({
    status: 200,
    type: [Book],
  })
  listBooks() {
    return this.booksService.listBooks();
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: Book,
  })
  @ApiResponse({
    status: 404,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String
  })
  findOne(@Param() params) {
    return this.booksService.findOneBook(params.id);
  }
}
