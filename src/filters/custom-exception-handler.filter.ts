import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CustomExceptionHandlerFilter<T>
  implements ExceptionFilter<HttpException>
{
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const exceptionResponse: any = exception.getResponse();
    if (exceptionResponse && typeof exceptionResponse !== 'string') {
      const status =
        exceptionResponse.status ||
        exceptionResponse.statusCode ||
        HttpStatus.INTERNAL_SERVER_ERROR;
      return response
        .json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message:
            exceptionResponse ??
            exceptionResponse?.message ??
            'Internal server error',
        })
        .status(status);
    }
    return response
      .json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: exception.message ?? 'Internal server error',
      })
      .status(HttpStatus.BAD_REQUEST);
  }
}
