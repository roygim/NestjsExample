import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  root(): string {
    return 'Hello World!';
  }

  @Get('config')
  getConfig(): string {
    return this.config.get('CONFIG_VALUE');
  }
}
