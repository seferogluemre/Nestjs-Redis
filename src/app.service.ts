import { Cache } from '@nestjs/cache-manager';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly cacheManager: Cache) { }

  async getHello() {
    await this.cacheManager.set('cached_item', { key: 32 });
    await this.cacheManager.del('cached_item')
    await this.cacheManager.set('cached_item', "Emre")
    const cachedItem = await this.cacheManager.get('cached_item')
    console.log("Önbellekdeki data", { message: "Önbellekden veri geldi", data: cachedItem })

    return 'Hello World!';
  }

}
