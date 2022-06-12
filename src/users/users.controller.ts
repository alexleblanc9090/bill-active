import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }
}