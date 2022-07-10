import { UsersService } from 'src/users/users.service';
export declare class UsersController {
    private readonly appService;
    constructor(appService: UsersService);
    getUser(): string;
}
