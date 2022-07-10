import { Controller, Get, Param, Post, Logger, Body, Response } from '@nestjs/common';
import { DeptsService } from './dept.service';
import { CreateDeptDto } from './dto/dept.dto';
import { Dept } from './Schemas/dept.schema';

@Controller('depts')
export class DeptsController {
  constructor(private readonly deptService: DeptsService) {}

  @Get()
  public getAll(): Promise<Dept[]> {
    return this.deptService.findAll();
  }

  @Post()
  public async createBill
  (
    @Body('personToPay') personToPay: String, 
    @Body('personInDept') personInDept: String,
    @Body('amount') amount: Number,
  ): Promise<Boolean> {
    this.deptService.create(new CreateDeptDto(amount, personInDept, personToPay));
    return true;
  }
}

