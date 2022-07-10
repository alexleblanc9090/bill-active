import { DeptsService } from './dept.service';
import { Dept } from './Schemas/dept.schema';
export declare class DeptsController {
    private readonly deptService;
    constructor(deptService: DeptsService);
    getAll(): Promise<Dept[]>;
    createBill(personToPay: String, personInDept: String, amount: Number): Promise<Boolean>;
}
