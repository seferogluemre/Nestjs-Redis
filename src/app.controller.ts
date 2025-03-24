import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

}
