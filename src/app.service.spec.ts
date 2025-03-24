import { Test } from "@nestjs/testing";
import { AppService } from "./app.service"
import { CACHE_MANAGER } from "@nestjs/cache-manager";

describe('AppService', () => {

    let appService: AppService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                AppService,
                {
                    provide: CACHE_MANAGER,
                    useValue: CACHE_MANAGER,
                }
            ]
        }).compile();

        appService = moduleRef.get<AppService>(AppService);
    })

    it('should be defined', () => {
        expect(appService).toBeDefined();
    })


})