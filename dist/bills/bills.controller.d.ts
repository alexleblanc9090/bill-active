import { BillsService } from './bills.service';
import { Bill } from './schemas/bill.schema';
export declare class BillsController {
    private readonly billService;
    constructor(billService: BillsService);
    getBills(): Promise<Bill[]>;
    createBill(date: String, name: String, store: String, amount: Number, picture: String): Promise<Bill>;
    private isBillValid;
    private convertToDate;
}
