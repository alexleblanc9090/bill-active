import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBillsDto } from './dto/createBill.dto';
import { Bill, BillDocument } from './schemas/bill.schema';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async findAll(): Promise<Bill[]> {
    return this.billModel.find().exec();
  }

  async create(createBillDto: CreateBillsDto): Promise<Bill> {
    const createdBill = new this.billModel(createBillDto);
    return createdBill.save();
  }
}