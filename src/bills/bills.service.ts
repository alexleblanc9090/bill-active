import { Injectable } from '@nestjs/common';
import { CreateBillsDto } from './dto/createBill.dto';

@Injectable()
export class BillsService {
  getBill(): string {
    return 'This is a bill';
  }

  async addBill(bill : CreateBillsDto): Promise<string>{
    return bill.picture;
  }
}