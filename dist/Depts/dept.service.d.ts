import { Model } from 'mongoose';
import { Dept, DeptDocument } from './Schemas/dept.schema';
import { CreateDeptDto } from './dto/dept.dto';
export declare class DeptsService {
    private deptModel;
    constructor(deptModel: Model<DeptDocument>);
    create(createDeptDto: CreateDeptDto): Promise<Dept>;
    findAll(): Promise<Dept[]>;
}
