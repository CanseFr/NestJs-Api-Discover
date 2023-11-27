import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let message = exception.message.replace(/\n/g, '');
    let status;

    switch (exception.code) {
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message = 'Unique constraint violation';
        break;
      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        message = 'Record to delete not found';
        break;
      case 'P2000':
        status = HttpStatus.BAD_REQUEST;
        message = 'Input value too long';
        break;
      case 'P2003':
        status = HttpStatus.BAD_REQUEST;
        message = 'Foreign key constraint violation';
        break;
      case 'P2004':
        status = HttpStatus.BAD_REQUEST;
        message = 'Constraint violation';
        break;
      case 'P2011':
        status = HttpStatus.BAD_REQUEST;
        message = 'Null constraint violation';
        break;
      case 'P2014':
        status = HttpStatus.BAD_REQUEST;
        message = 'Relation violation';
        break;
      case 'P2015':
        status = HttpStatus.NOT_FOUND;
        message = 'Record to update not found';
        break;
      case 'P2016':
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'Query engine error';
        break;
      default:
        super.catch(exception, host);
        return;
    }

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}
