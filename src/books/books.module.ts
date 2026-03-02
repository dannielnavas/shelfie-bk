import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { UsersModule } from '../users/users.module';
import { BookSearchModule } from '../book-search/book-search.module';

@Module({
  imports: [UsersModule, BookSearchModule],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
