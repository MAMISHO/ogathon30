import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('challenges/solution-1')
  @ApiOperation({
    summary: 'Calcular propagación de virus',
    description:
      'Devuelve el número de propagaciones posibles dado un valor inicial n. No se permiten valores negativos.',
  })
  @ApiQuery({
    name: 'n',
    required: true,
    type: Number,
    description: 'Número inicial para el cálculo de la propagación',
  })
  getPattern(@Query('n') n): bigint {
    if (isNaN(n)) {
      throw new BadRequestException('El parámetro n debe ser un número');
    }
    if (n < 0) {
      throw new BadRequestException('No se permiten valores negativos');
    }

    const result = this.appService.countVirusPropagation(parseInt(n));

    return result;
  }
}
