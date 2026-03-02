import { Module } from '@nestjs/common';
import { BookSearchService } from './book-search.service';

@Module({
  providers: [BookSearchService],
  exports: [BookSearchService],
})
export class BookSearchModule {}
