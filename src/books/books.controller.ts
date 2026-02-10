import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-libro.dto';
import { UpdateBookDto } from './dto/update-libro.dto';
import { UpdatePagesDto } from './dto/update-paginas.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ParseIntPipe } from '@nestjs/common';

@Controller('books')
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@CurrentUser('userId') userId: number, @Body() dto: CreateBookDto) {
    return this.booksService.create(userId, dto);
  }

  @Get()
  findAll(@CurrentUser('userId') userId: number) {
    return this.booksService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
  ) {
    return this.booksService.findOne(userId, bookId);
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
    return this.booksService.updatePagesRead(
      userId,
      bookId,
      dto.pagesRead,
    );
  }

  @Delete(':id')
  remove(
    @CurrentUser('userId') userId: number,
    @Param('id', ParseIntPipe) bookId: number,
  ) {
    return this.booksService.remove(userId, bookId);
  }
}
