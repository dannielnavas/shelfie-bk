import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PrismaKnownError = any;

@Catch()
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaExceptionFilter.name);

  catch(exception: PrismaKnownError, host: ArgumentsHost) {
    if (exception?.constructor?.name !== 'PrismaClientKnownRequestError') {
      throw exception;
    }
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error de base de datos';

    switch (exception.code) {
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message = `Ya existe un registro con ese valor en un campo único`;
        break;
      case 'P2003':
        status = HttpStatus.BAD_REQUEST;
        message =
          'Referencia inválida (foreign key). Si acabas de crear la base de datos, ejecuta el seed para crear los planes: pnpm prisma:seed';
        break;
      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        message = `Registro no encontrado`;
        break;
      case 'P2010':
        status = HttpStatus.SERVICE_UNAVAILABLE;
        message = `Las tablas de la base de datos no existen. Ejecuta las migraciones (pnpm prisma:migrate) o aplica el SQL en prisma/migrations.`;
        break;
      default:
        this.logger.warn(
          `Prisma error ${exception.code}: ${exception.message}`,
        );
        const msg =
          (exception.meta?.message as string) ?? exception.message ?? '';
        if (
          exception.code === 'P2021' ||
          /relation.*does not exist|table.*does not exist/i.test(msg)
        ) {
          status = HttpStatus.SERVICE_UNAVAILABLE;
          message =
            'Las tablas no existen. Aplica la migración en Supabase (SQL Editor) o ejecuta: pnpm prisma:migrate';
        } else {
          message = msg;
        }
    }

    response.status(status).json({
      statusCode: status,
      error: exception.code,
      message,
    });
  }
}
