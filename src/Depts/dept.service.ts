import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dept, DeptDocument } from './Schemas/Dept.schema';
import { CreateDeptDto } from './dto/dept.dto';

@Injectable()
export class DeptsService {
  constructor(@InjectModel(Dept.name) private deptModel: Model<DeptDocument>) {}

  async create(createDeptDto: CreateDeptDto): Promise<Dept> {
    const createdDept = new this.deptModel(createDeptDto);
    return createdDept.save();
  }

  async findAll(): Promise<Dept[]> {
    return this.deptModel.find().exec();
  }
}