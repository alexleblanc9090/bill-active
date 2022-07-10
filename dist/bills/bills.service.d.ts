import { Model } from 'mongoose';
import { CreateBillsDto } from './dto/createBill.dto';
import { Bill, BillDocument } from './schemas/bill.schema';
export declare class BillsService {
    private billModel;
    constructor(billModel: Model<BillDocument>);
    findAll(): Promise<Bill[]>;
    create(createBillDto: CreateBillsDto): Promise<Bill>;
}
