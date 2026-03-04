import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { UsersModule } from '../users/users.module';
import { BookSearchModule } from '../book-search/book-search.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [UsersModule, BookSearchModule, CloudinaryModule],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
