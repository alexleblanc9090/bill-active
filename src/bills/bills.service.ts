import { Injectable } from '@nestjs/common';
import { CreateBillsDto } from './dto/createBill.dto';

@Injectable()
export class BillsService {
  getBill(): string {
    return 'This is a bill';
  }

  async addBill(bill : CreateBillsDto): Promise<String>{
    return bill.picture;
  }
}