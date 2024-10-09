import { Controller, Get } from '@nestjs/common';

@Controller('add')
export class AddController {
  @Get()
  getHello(): string {
    return 'hgahha';
  }
}
