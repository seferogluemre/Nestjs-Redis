import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @CacheKey('some_route')
  @CacheTTL(60)
  async getHello() {
    return this.appService.getHello();
  }

}
