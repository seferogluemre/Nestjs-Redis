import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        { id: Math.floor(Math.random() * 1000), name: "Emre Seferoglu", age: 17 },
        { id: Math.floor(Math.random() * 1000), name: "Mert Kartal", age: 21 },
        { id: Math.floor(Math.random() * 1000), name: "Berat Güdelek", age: 27 },
        { id: Math.floor(Math.random() * 1000), name: "Emre Uçar", age: 27 },
    ];

    findAll() {
        return this.users;
    }

}
