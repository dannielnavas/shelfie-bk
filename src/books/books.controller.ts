import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-libro.dto';
import { UpdateBookDto } from './dto/update-libro.dto';
import { UpdatePagesDto } from './dto/update-paginas.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ParseIntPipe } from '@nestjs/common';
import { BookSearchService } from '../book-search/book-search.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { SearchQueryDto } from '../book-search/dto/search-query.dto';

@Controller('books')
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly bookSearchService: BookSearchService,
  ) {}

  @Post()
  create(@CurrentUser('userId') userId: number, @Body() dto: CreateBookDto) {
    return this.booksService.create(userId, dto);
  }

  @Get()
  async findAll(@CurrentUser('userId') userId: number) {
    return this.booksService.findAll(userId);
  }

  /**
   * Busca libros en fuentes externas (Google Books, Open Library).
   * Devuelve un formato unificado compatible con POST /books para que el usuario
   * pueda completar/editar y registrar el libro.
   */
  @Get('search')
  search(@Query() query: SearchQueryDto) {
    const limit = query.limit ?? 10;
    const hasQ = query.q?.trim();
    const hasIsbn = query.isbn?.trim();
    if (!hasQ && !hasIsbn) {
      throw new BadRequestException(
        'Proporciona q (búsqueda por título/autor) o isbn (ISBN-10 o ISBN-13)',
      );
    }
    return this.bookSearchService.search({
      q: hasQ ? query.q!.trim() : undefined,
      isbn: hasIsbn ? query.isbn!.trim() : undefined,
      limit,
    });
  }

  @Get(':id')
  findOne(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
  ) {
    return this.booksService.findOne(userId, bookId);
  }

  @Post(':id/cover')
  @UseInterceptors(FileInterceptor('file'))
  uploadCover(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
    @UploadedFile() file: any,
  ) {
    return this.booksService.uploadCover(userId, bookId, file);
  }

  @Patch(':id')
  update(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
    @Body() dto: UpdateBookDto,
  ) {
    return this.booksService.update(userId, bookId, dto);
  }

  @Patch(':id/pages')
  updatePages(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
    @Body() dto: UpdatePagesDto,
  ) {
    return this.booksService.updatePagesRead(userId, bookId, dto.pagesRead);
  }

  @Delete(':id')
  remove(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
  ) {
    return this.booksService.remove(userId, bookId);
  }
}
