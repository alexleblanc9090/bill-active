import { Body, Controller, Get, Post } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillsDto } from './dto/createBill.dto';

@Controller('bills')
export class BillsController {
  constructor(private readonly billService: BillsService) {}

  @Get()
  getBill(): string {
    return this.billService.getBill();
  }

  @Post()
  public async createBill(@Body() bill: CreateBillsDto): Promise<string>{
    return await this.billService.addBill(bill);
  }
}