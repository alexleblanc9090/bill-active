import { Controller, Get } from '@nestjs/common';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private readonly appService: BillsService) {}

  @Get()
  getBill(): string {
    return this.appService.getBill();
  }
}