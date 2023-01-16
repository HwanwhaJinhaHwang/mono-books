import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BooksController} from "../books/books.controller";
import {CategoriesController} from "../categories/categories.controller";
import {BooksService} from "../books/books.service";
import {CategoriesService} from "../categories/categories.service";

@Module({
  imports: [],
  controllers: [AppController, BooksController, CategoriesController],
  providers: [AppService, BooksService, CategoriesService],
})
export class AppModule {}
